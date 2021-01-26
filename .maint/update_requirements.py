#!/usr/bin/env python3
from copy import copy
from configparser import ConfigParser
from pathlib import Path
from packaging.requirements import Requirement, SpecifierSet

repo_root = Path(__file__).parent.parent
setup_cfg = repo_root / "setup.cfg"
reqs = repo_root / "requirements.txt"
min_reqs = repo_root / "min-requirements.txt"

config = ConfigParser()
config.read(setup_cfg)
requirements = [
    Requirement(req)
    for req in config.get("options", "install_requires").strip().splitlines()
]

script_name = Path(__file__).relative_to(repo_root)


def to_min(req):
    if req.specifier:
        req = copy(req)
        try:
            min_spec = [spec for spec in req.specifier if spec.operator in (">=", "~=")][0]
        except IndexError:
            return req
        min_spec._spec = ("==",) + min_spec._spec[1:]
        req.specifier = SpecifierSet(str(min_spec))
    return req


lines = [f"# Auto-generated by {script_name}", ""]

# Write requirements
lines[1:-1] = [str(req) for req in requirements]
reqs.write_text("\n".join(lines))

# Write minimum requirements
lines[1:-1] = [str(to_min(req)) for req in requirements]
min_reqs.write_text("\n".join(lines))