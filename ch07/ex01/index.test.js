import { describe, it, expect } from "vitest";
import { sumMatrix, multipleMatrix } from "./index.js";

describe("sumMatrix 関数", () => {
  it("行列の加算をする", () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const b = [
      [7, 8, 9],
      [10, 11, 12],
    ];
    expect(sumMatrix(a, b)).toEqual([
      [8, 10, 12],
      [14, 16, 18],
    ]);
  });

  it("行列のサイズが異なる場合エラーになる", () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const b = [[7, 8, 9]];
    expect(() => {
      sumMatrix(a, b);
    }).toThrow;
  });
});

describe("multipleMatrix関数", () => {
  it("行列の掛け算をする", () => {
    const a = [
      [1, 5, 7],
      [2, 3, 8],
    ];
    const b = [
      [4, 9],
      [7, 2],
      [1, 0],
    ];
    expect(multipleMatrix(a, b)).toEqual([
      [46, 19],
      [37, 24],
    ]);
  });

  it("2つの行列のサイズが掛け算の条件を満たさない場合、エラーになる", () => {
    const a = [
      [1, 5, 7],
      [2, 3, 8],
    ];
    const b = [
      [4, 9],
      [7, 2],
    ];
    expect(() => {
      multipleMatrix(a, b);
    }).toThrow();
  });
});
