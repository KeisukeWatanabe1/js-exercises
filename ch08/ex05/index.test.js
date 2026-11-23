import { describe, it, expect } from "vitest";
import { sequenceToObject } from "./index.js";

describe("sequenceToObject 関数", () => {
  it("奇数番に string の値を、偶数番に任意の値を受け取り、各奇数偶数のペアで {奇数番の値: 偶数番の値} のオブジェクトを返す", () => {
    expect(sequenceToObject("a", 1, "b", 2, "c", 3)).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it("奇数番が string でない場合エラーとなる", () => {
    expect(() => sequenceToObject("a", 1, 100, 2, "c", 3)).toThrow();
  });

  it("引数の個数の合計が偶数でない場合エラーとなる", () => {
    expect(() => sequenceToObject("a", 1, "b", 2, "c")).toThrow();
  });

  it("スプレッド演算子で配列を与えられる", () => {
    expect(sequenceToObject(...["a", 1, "b", 2, "c", 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });
});
