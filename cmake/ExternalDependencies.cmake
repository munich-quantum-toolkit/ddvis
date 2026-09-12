# Copyright (c) 2023 - 2026 Chair for Design Automation, TUM
# Copyright (c) 2025 - 2026 Munich Quantum Software Company GmbH
# All rights reserved.
#
# SPDX-License-Identifier: MIT
#
# Licensed under the MIT License

# Declare all external dependencies and make sure that they are available.

include(FetchContent)
set(FETCH_PACKAGES "")

# cmake-format: off
set(MQT_CORE_MINIMUM_VERSION 3.9.0
    CACHE STRING "MQT Core version")
set(MQT_CORE_VERSION 4.0.0
    CACHE STRING "MQT Core version")
set(MQT_CORE_REV "8d9bcfb031fa0fe2769a852cdf8d66017d24abe8"
    CACHE STRING "MQT Core identifier (tag, branch or commit hash)")
set(MQT_CORE_REPO_OWNER "cda-tum"
    CACHE STRING "MQT Core repository owner (change when using a fork)")
# cmake-format: on
FetchContent_Declare(
  mqt-core
  GIT_REPOSITORY https://github.com/${MQT_CORE_REPO_OWNER}/mqt-core.git
  GIT_TAG ${MQT_CORE_REV}
  EXCLUDE_FROM_ALL FIND_PACKAGE_ARGS ${MQT_CORE_MINIMUM_VERSION})
list(APPEND FETCH_PACKAGES mqt-core)

# Make all declared dependencies available.
FetchContent_MakeAvailable(${FETCH_PACKAGES})
