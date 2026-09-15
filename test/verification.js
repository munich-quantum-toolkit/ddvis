// Copyright (c) 2023 - 2026 Chair for Design Automation, TUM
// Copyright (c) 2025 - 2026 Munich Quantum Software Company GmbH
// All rights reserved.
//
// SPDX-License-Identifier: MIT
//
// Licensed under the MIT License

const assert = require("node:assert/strict");
const { QDDVer } = require("../build/Release/mqt-ddvis");

for (const gates of ["s q[0];", "h q[0]; s q[0];"]) {
  const circuit = `OPENQASM 2.0; include "qelib1.inc"; qreg q[1]; ${gates}`;
  const verifier = new QDDVer();
  const { numOfOperations } = verifier.load(circuit, 1, 0, true, true);
  verifier.load(circuit, 1, 0, true, false);
  const identity = verifier.getDD().dot;

  verifier.toEnd(true);
  assert.notEqual(verifier.getDD().dot, identity);
  verifier.toEnd(false);
  assert.equal(
    verifier.getDD().dot,
    identity,
    `Identical circuits must cancel: ${gates}`,
  );

  for (const algo1 of [true, false]) {
    assert.equal(verifier.prev(algo1).changed, true);
    assert.notEqual(verifier.getDD().dot, identity);
    assert.equal(verifier.next(algo1).changed, true);
    assert.equal(verifier.getDD().dot, identity);

    assert.equal(verifier.toStart(algo1), true);
    assert.notEqual(verifier.getDD().dot, identity);
    assert.equal(verifier.toEnd(algo1).nops, numOfOperations);
    assert.equal(verifier.getDD().dot, identity);
  }

  // Loading with an initial position also applies gates through stepForward.
  verifier.toStart(true);
  verifier.toStart(false);
  verifier.load(circuit, 1, numOfOperations, true, true);
  verifier.load(circuit, 1, numOfOperations, true, false);
  assert.equal(verifier.getDD().dot, identity);
}

console.log("Verification inverse and undo checks passed.");
