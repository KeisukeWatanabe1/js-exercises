import { describe, it, expect } from "vitest";
import { fibonacciUsingDoWhile, fibonacciUsingFor } from "./index.js";

describe("fibonacciUsingDoWhile関数", () => {
  it("10個のフィボナッチ数列の配列を返す", () => {
    expect(fibonacciUsingDoWhile()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

describe("fibonacciUsingFor関数", () => {
  it("10個のフィボナッチ数列の配列を返す", () => {
    expect(fibonacciUsingFor()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
