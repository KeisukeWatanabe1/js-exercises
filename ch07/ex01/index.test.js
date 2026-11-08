import { describe, it, expect } from "vitest";
import { sumMatrix, multiplyMatrix } from "./index.js";

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

  it("行数が異なる場合エラーになる", () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const b = [[7, 8, 9]];
    expect(() => {
      sumMatrix(a, b);
    }).toThrow("行列のサイズが違います");
  });

  it("列数が異なる場合エラーになる", () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const b = [
      [7, 8],
      [9, 10],
    ];
    expect(() => {
      sumMatrix(a, b);
    }).toThrow("行列のサイズが違います");
  });
});

describe("multiplyMatrix関数", () => {
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
    expect(multiplyMatrix(a, b)).toEqual([
      [46, 19],
      [37, 24],
    ]);
  });

  it("行ベクトルと列ベクトルの掛け算ができる", () => {
    const a = [[1, 2, 3]];
    const b = [[4], [5], [6]];
    expect(multiplyMatrix(a, b)).toEqual([[32]]);
  });

  it("列ベクトルと行ベクトルの掛け算ができる", () => {
    const a = [[1], [2], [3]];
    const b = [[4, 5, 6]];
    expect(multiplyMatrix(a, b)).toEqual([
      [4, 5, 6],
      [8, 10, 12],
      [12, 15, 18],
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
      multiplyMatrix(a, b);
    }).toThrow("行列のサイズが違います");
  });

  it("第一引数行列に欠けている部分があると、エラーになる", () => {
    const a = [
      [1, 2, 3, 4],
      [5, 6, 7],
      [8, 9, 10, 11],
    ];
    const b = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    expect(() => {
      multiplyMatrix(a, b);
    }).toThrow("行列のサイズが違います");
  });

  it("第二引数行列に欠けている部分があると、エラーになる", () => {
    const a = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const b = [
      [1, 2, 3],
      [4, 5],
      [7, 8, 9],
      [10, 11, 12],
    ];
    expect(() => {
      multiplyMatrix(a, b);
    }).toThrow("行列のサイズが違います");
  });

  it("第一引数に空配列を渡すと、エラーになる", () => {
    const b = [
      [1, 2],
      [3, 4],
    ];
    expect(() => {
      multiplyMatrix([], b);
    }).toThrow("行列のサイズが違います");
  });

  it("第二引数に空配列を渡すと、エラーになる", () => {
    const a = [
      [1, 2],
      [3, 4],
    ];
    expect(() => {
      multiplyMatrix(a, []);
    }).toThrow("行列のサイズが違います");
  });
});
