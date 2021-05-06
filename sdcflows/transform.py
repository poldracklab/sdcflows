"""The :math:`B_0` unwarping transform formalism."""
from pathlib import Path

import attr
import numpy as np
from scipy import ndimage as ndi
from scipy.sparse import vstack as sparse_vstack, csr_matrix, kron

import nibabel as nb
from bids.utils import listify


@attr.s(slots=True)
class B0FieldTransform:
    """Represents and applies the transform to correct for susceptibility distortions."""

    coeffs = attr.ib(default=None)
    shifts = attr.ib(default=None, init=False)

    def apply(
        self,
        spatialimage,
        pe_dir,
        ro_time,
        order=3,
        mode="constant",
        cval=0.0,
        prefilter=True,
        output_dtype=None,
    ):
        """
        Apply a transformation to an image, resampling on the reference spatial object.

        Parameters
        ----------
        spatialimage : `spatialimage`
            The image object containing the data to be resampled in reference
            space
        reference : spatial object, optional
            The image, surface, or combination thereof containing the coordinates
            of samples that will be sampled.
        order : int, optional
            The order of the spline interpolation, default is 3.
            The order has to be in the range 0-5.
        mode : {'constant', 'reflect', 'nearest', 'mirror', 'wrap'}, optional
            Determines how the input image is extended when the resamplings overflows
            a border. Default is 'constant'.
        cval : float, optional
            Constant value for ``mode='constant'``. Default is 0.0.
        prefilter: bool, optional
            Determines if the image's data array is prefiltered with
            a spline filter before interpolation. The default is ``True``,
            which will create a temporary *float64* array of filtered values
            if *order > 1*. If setting this to ``False``, the output will be
            slightly blurred if *order > 1*, unless the input is prefiltered,
            i.e. it is the result of calling the spline filter on the original
            input.

        Returns
        -------
        resampled : `spatialimage` or ndarray
            The data imaged after resampling to reference space.

        """
        # Calculate the physical coordinates of target grid
        if isinstance(spatialimage, (str, bytes, Path)):
            spatialimage = nb.load(spatialimage)

        vsm = self.shifts
        if vsm is None:
            weights = []
            coeffs = []

            for level in listify(self.coeffs):
                wmat = grid_bspline_weights(spatialimage, level)
                weights.append(wmat)
                coeffs.append(level.get_fdata(dtype="float32").reshape(-1))

            # VSM = voxel-shift map
            vsm = np.zeros(spatialimage.shape[:3], dtype="float32")
            vsm = (np.squeeze(np.vstack(coeffs).T) @ sparse_vstack(weights)).reshape(
                vsm.shape
            )

            # Cache
            self.shifts = vsm

        # Reverse shifts if reversed blips
        if pe_dir.endswith("-"):
            vsm *= -1.0

        # Generate warp field
        pe_axis = "ijk".index(pe_dir[0])

        # Map voxel coordinates applying the VSM
        ijk_axis = tuple([np.arange(s) for s in vsm.shape])
        voxcoords = np.array(np.meshgrid(*ijk_axis, indexing="ij"), dtype="float32")
        voxcoords[pe_axis, ...] += vsm * ro_time

        # Prepare data
        data = np.asanyarray(spatialimage.dataobj)
        output_dtype = output_dtype or data.dtype

        # Resample
        resampled = ndi.map_coordinates(
            data,
            voxcoords.reshape(3, -1),
            output=output_dtype,
            order=order,
            mode=mode,
            cval=cval,
            prefilter=prefilter,
        ).reshape(spatialimage.shape)

        moved = spatialimage.__class__(
            resampled, spatialimage.affine, spatialimage.header
        )
        moved.header.set_data_dtype(output_dtype)
        return moved


def _cubic_bspline(d):
    """Evaluate the cubic bspline at distance d from the center."""
    return np.piecewise(
        d,
        [d < 1.0, d >= 1.0],
        [
            lambda d: (4.0 - 6.0 * d ** 2 + 3.0 * d ** 3) / 6.0,
            lambda d: (2.0 - d) ** 3 / 6.0,
        ],
    )


def grid_bspline_weights(target_nii, ctrl_nii):
    """Evaluate tensor-product B-Spline weights on a grid."""
    shape = target_nii.shape[:3]
    ctrl_sp = ctrl_nii.header.get_zooms()[:3]
    ras2ijk = np.linalg.inv(ctrl_nii.affine)
    origin = nb.affines.apply_affine(ras2ijk, [tuple(target_nii.affine[:3, 3])])[0]

    wd = []
    for i, (o, n, sp) in enumerate(
        zip(origin, shape, target_nii.header.get_zooms()[:3])
    ):
        locations = np.arange(0, n, dtype="float16") * sp / ctrl_sp[i] + o
        knots = np.arange(0, ctrl_nii.shape[i], dtype="float16")
        distance = np.abs(locations[np.newaxis, ...] - knots[..., np.newaxis])

        within_support = distance < 2.0
        d_vals, d_idxs = np.unique(distance[within_support], return_inverse=True)
        bs_w = _cubic_bspline(d_vals)
        weights = np.zeros_like(distance, dtype="float32")
        weights[within_support] = bs_w[d_idxs]
        wd.append(csr_matrix(weights))

    return kron(kron(wd[0], wd[1]), wd[2])