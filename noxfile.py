#!/usr/bin/env -S uv run --script --quiet
# Copyright (c) 2023 - 2026 Chair for Design Automation, TUM
# Copyright (c) 2025 - 2026 Munich Quantum Software Company GmbH
# All rights reserved.
#
# SPDX-License-Identifier: MIT
#
# Licensed under the MIT License

# /// script
# dependencies = ["nox"]
# ///

"""Nox sessions."""

from __future__ import annotations

import shutil

import nox


@nox.session(reuse_venv=True, default=True)
def lint(session: nox.Session) -> None:
    """Run the linter."""
    if shutil.which("prek") is None:
        session.install("prek")

    session.run("prek", "run", "--all-files", *session.posargs, external=True)


if __name__ == "__main__":
    nox.main()
