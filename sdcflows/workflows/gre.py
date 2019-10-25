# emacs: -*- mode: python; py-indent-offset: 4; indent-tabs-mode: nil -*-
# vi: set ft=python sts=4 ts=4 sw=4 et:
"""

.. _gre-fieldmaps:

Workflows for processing GRE fieldmaps
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Workflows for preparing the magnitude part of :abbr:`GRE (gradient recalled echo)` fieldmap
images and cleaning up the fieldmaps created from the phases or phasediff.

"""

from nipype.pipeline import engine as pe
from nipype.interfaces import utility as niu, fsl, ants
from nipype.workflows.dmri.fsl.utils import demean_image, cleanup_edge_pipeline
from niworkflows.engine.workflows import LiterateWorkflow as Workflow
from niworkflows.interfaces.bids import DerivativesDataSink
from niworkflows.interfaces.images import IntraModalMerge
from niworkflows.interfaces.masks import BETRPT
from ..interfaces.fmap import FieldEnhance


def init_prepare_magnitude_wf(omp_nthreads, name='magnitude_wf'):
    """Prepare the magnitude part of GRE fieldmaps.

    Average (if not done already) the magnitude part of the GRE images, run N4 to
    correct for B1 field nonuniformity, and skull-strip the preprocessed magnitude.

    **Parameters**:
        omp_nthreads : int
            Maximum number of threads an individual process may use
        name : str
            Name of workflow (default: ``magnitude_wf``)

    **Inputs**:
        magnitude : pathlike
            Path to the corresponding magnitude path(s).
        source_file : pathlike
            Path to the corresponding phase-difference file.

    **Outputs**:
        fmap_ref : pathlike
            Path to the fieldmap reference calculated in this workflow.
        fmap_mask : pathlike
            Path to a binary brain mask corresponding to the reference above.

    .. workflow ::
        :graph2use: orig
        :simple_form: yes
        from sdcflows.workflows.fmap import init_prepare_magnitude_wf
        wf = init_prepare_magnitude_wf(omp_nthreads=6)

    """
    workflow = Workflow(name=name)
    inputnode = pe.Node(
        niu.IdentityInterface(fields=['magnitude', 'source_file']), name='inputnode')
    outputnode = pe.Node(
        niu.IdentityInterface(fields=['fmap_ref', 'fmap_mask', 'mask_report']),
        name='outputnode')

    # Merge input magnitude images
    magmrg = pe.Node(IntraModalMerge(), name='magmrg')

    # de-gradient the fields ("bias/illumination artifact")
    n4_correct = pe.Node(ants.N4BiasFieldCorrection(dimension=3, copy_header=True),
                         name='n4_correct', n_procs=omp_nthreads)
    bet = pe.Node(BETRPT(generate_report=True, frac=0.6, mask=True),
                  name='bet')

    workflow.connect([
        (inputnode, magmrg, [('magnitude', 'in_files')]),
        (magmrg, n4_correct, [('out_file', 'input_image')]),
        (n4_correct, bet, [('output_image', 'in_file')]),
        (bet, outputnode, [('mask_file', 'fmap_mask'),
                           ('out_file', 'fmap_ref'),
                           ('out_report', 'mask_report')]),
    ])
    return workflow


def init_fmap_postproc_wf(omp_nthreads, fmap_bspline, median_kernel_size=3,
                          name='fmap_postproc_wf'):
    """
    Postprocess a B0 map estimated elsewhere.

    This workflow denoises (mostly via smoothing) a B0 fieldmap.

    **Parameters**:
        omp_nthreads : int
            Maximum number of threads an individual process may use
        fmap_bspline : bool
            Whether the fieldmap should be smoothed and extrapolated to off-brain regions
            using B-Spline basis.
        median_kernel_size : int
            Size of the kernel when smoothing is done with a median filter.
        name : str
            Name of workflow (default: ``fmap_postproc_wf``)

    **Inputs**:
        mask_file : pathlike
            A brain binary mask corresponding to this fieldmap.
        fmap_ref : pathlike
            A preprocessed magnitude/reference image for the fieldmap.
        fmap : pathlike
            A B0 nonuniformity map (aka fieldmap) estimated elsewhere.

    **Outputs**:
        out_fmap : pathlike
            Postprocessed fieldmap.

    .. workflow ::
        :graph2use: orig
        :simple_form: yes
        from sdcflows.workflows.fmap import init_fmap_postproc_wf
        wf = init_fmap_postproc_wf(omp_nthreads=6)

    """
    workflow = Workflow(name=name)
    inputnode = pe.Node(niu.IdentityInterface(
        fields=['mask_file', 'fmap_ref', 'fmap']), name='inputnode')
    outputnode = pe.Node(niu.IdentityInterface(fields=['out_fmap']),
                         name='outputnode')
    if fmap_bspline:
        # despike_threshold=1.0, mask_erode=1),
        fmapenh = pe.Node(
            FieldEnhance(unwrap=False, despike=False),
            name='fmapenh', mem_gb=4, n_procs=omp_nthreads)

        workflow.connect([
            (inputnode, fmapenh, [('mask_file', 'in_mask'),
                                  ('fmap_ref', 'in_magnitude'),
                                  ('fmap_hz', 'in_file')]),
            (fmapenh, outputnode, [('out_file', 'out_fmap')]),
        ])

    else:

        denoise = pe.Node(fsl.SpatialFilter(operation='median', kernel_shape='sphere',
                                            kernel_size=median_kernel_size), name='denoise')
        demean = pe.Node(niu.Function(function=demean_image), name='demean')
        cleanup_wf = cleanup_edge_pipeline(name='cleanup_wf')
        applymsk = pe.Node(fsl.ApplyMask(), name='applymsk')

        workflow.connect([
            (inputnode, denoise, [('fmap', 'in_file')]),
            (denoise, demean, [('out_file', 'in_file')]),
            (demean, cleanup_wf, [('out', 'inputnode.in_file')]),
            (inputnode, cleanup_wf, [('mask_file', 'inputnode.in_mask')]),
            (cleanup_wf, applymsk, [('outputnode.out_file', 'in_file')]),
            (inputnode, applymsk, [('mask_file', 'mask_file')]),
            (applymsk, outputnode, [('out_file', 'out_fmap')]),
        ])

    return workflow
