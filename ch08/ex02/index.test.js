import { describe, it, expect } from "vitest";
import { powRecursive, powLoop } from "./index.js";

const testPattern = [
  [2, 0, 1],
  [-2, 0, 1],
  [2, 1, 2],
  [-2, 1, -2],
  [2, 4, 16],
  [-2, 4, 16],
  [2, 18, 262144],
  [-2, 18, 262144],
  [2, 17, 131072],
  [-2, 17, -131072],
  [1, 0, 1],
  [-1, 0, 1],
  [1, 4, 1],
  [-1, 4, 1],
  [1, 37, 1],
  [-1, 37, -1],
  [0, 17, 0],
  [0, 18, 0],
  [0, 0, 1],
];
describe("powRecursive 関数", () => {
  it.each(testPattern)("powLoop(%i, %i) -> %i", (base, exponent, expected) => {
    expect(powRecursive(base, exponent)).toBe(expected);
  });
});
describe("powLoop 関数", () => {
  it.each(testPattern)("powLoop(%i, %i) -> %i", (base, exponent, expected) => {
    expect(powLoop(base, exponent)).toBe(expected);
  });
});
