import { describe, it, expect } from "vitest";
import { any, catching } from "./index.js";

describe("any 関数", () => {
  describe("渡す関数が一つ", () => {
    it.each([
      [(n) => n > 0, 12, true],
      [(n) => n > 0, -7, false],
    ])("関数: %s, 引数: %i, 期待する結果: %s", (func, arg, expected) => {
      const anyFunc = any(func);
      expect(anyFunc(arg)).toBe(expected);
    });
  });

  describe("渡す関数が複数", () => {
    it.each([
      [[(n) => n === 1, (n) => n === 2, (n) => n === 3], 2, true],
      [[(n) => n === 1, (n) => n === 2, (n) => n === 3], 5, false],
    ])("関数: %s, 引数: %i, 期待する結果: %s", (funcs, arg, expected) => {
      const anyFunc = any(...funcs);
      expect(anyFunc(arg)).toBe(expected);
    });
  });
});

describe("catching 関数", () => {
  it("1つ目の関数で例外が発生しない場合は、1つ目の関数の結果が返される", () => {
    const func = JSON.parse;
    const errorHandler = (e) => {
      return { error: e.toString() };
    };
    const catchingFunc = catching(func, errorHandler);
    expect(catchingFunc('{"a": 1}')).toEqual({ a: 1 });
  });

  it("1つ目の関数で発生した例外を2つ目の関数の引数として処理し結果を返す", () => {
    const func = JSON.parse;
    const errorHandler = (e) => {
      return { error: e.toString() };
    };
    const catchingFunc = catching(func, errorHandler);
    expect(catchingFunc("{Invalid Json}")).toEqual({
      error: expect.stringContaining("SyntaxError"),
    });
  });
});
