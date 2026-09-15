// Copyright (c) 2023 - 2026 Chair for Design Automation, TUM
// Copyright (c) 2025 - 2026 Munich Quantum Software Company GmbH
// All rights reserved.
//
// SPDX-License-Identifier: MIT
//
// Licensed under the MIT License

const assert = require("node:assert/strict");
const { QDDVer } = require("../build/Release/mqt-ddvis");
const circuit =
  'OPENQASM 2.0; include "qelib1.inc"; qreg q[1]; s q[0]; h q[0];';

for (const algo1 of [true, false]) {
  const verifier = new QDDVer();
  verifier.load(circuit, 1, 0, true, true);
  verifier.load(circuit, 1, 0, true, false);
  const identity = verifier.getDD().dot;
  verifier.next(algo1);
  const first = verifier.getDD().dot;
  verifier.next(algo1);
  const last = verifier.getDD().dot;
  verifier.toStart(algo1);

  assert.deepEqual(verifier.toLine(1, algo1), { changed: true, nops: 1 });
  assert.equal(verifier.getDD().dot, first);
  assert.deepEqual(verifier.toLine(1, algo1), { changed: false, nops: 0 });
  assert.deepEqual(verifier.toLine(2 ** 32, algo1), { changed: true, nops: 1 });
  assert.equal(verifier.getDD().dot, last);
  assert.equal(verifier.next(algo1).changed, false);
  assert.deepEqual(verifier.toLine(0, algo1), { changed: true, nops: 2 });
  assert.equal(verifier.getDD().dot, identity);
  assert.equal(verifier.prev(algo1).changed, false);
  assert.deepEqual(verifier.toLine(0, algo1), { changed: false, nops: 0 });

  verifier.toLine(1, algo1);
  assert.throws(() => verifier.toLine(), RangeError);
  assert.throws(() => verifier.toLine("1", algo1), TypeError);
  assert.throws(() => verifier.toLine(1, "true"), TypeError);
  for (const line of [-1, 0.5, NaN, Infinity]) {
    assert.throws(() => verifier.toLine(line, algo1), RangeError);
  }
  assert.equal(verifier.getDD().dot, first);
  verifier.unready(algo1);
  assert.throws(() => verifier.toLine(0, algo1), /No algorithm loaded/);
}

console.log("Verification line navigation checks passed.");
