import { describe, it, expect } from "vitest";
import { copyEvenNumberPropertyFromObject } from "./index.js";

describe("copyEvenNumberPropertyFromObject 関数", () => {
  it("偶数の値のプロパティだけを持つオブジェクトを返す", () => {
    expect(copyEvenNumberPropertyFromObject({ a: 2 })).toEqual({ a: 2 });
    expect(copyEvenNumberPropertyFromObject({ a: 1, b: 2, c: 3 })).toEqual({
      b: 2,
    });
  });

  it("与えられたオブジェクトに偶数の値のプロパティが無い場合は、空のオブジェクトを返す", () => {
    expect(copyEvenNumberPropertyFromObject({ a: 1 })).toEqual({});
    expect(copyEvenNumberPropertyFromObject({ a: 1, b: 3, c: 5 })).toEqual({});
  });

  it("空のオブジェクトの場合は、空のオブジェクトを返す", () => {
    expect(copyEvenNumberPropertyFromObject({})).toEqual({});
  });
});
