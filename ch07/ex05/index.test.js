import { describe, it, expect } from "vitest";
import { push, pop, shift, unshift, sort } from "./index.js";

describe("push関数", () => {
  it("配列に値を一つpushできる", () => {
    const arr = [1, 2, 3];
    expect(push(arr, 4)).toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("配列に値を複数pushできる", () => {
    const arr = [1, 2, 3];
    expect(push(arr, 4, 5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("引数に何も渡さないと配列は変わらない", () => {
    const arr = [1, 2, 3];
    expect(push(arr)).toEqual([1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe("pop関数", () => {
  it("配列から末尾の要素を取り除ける", () => {
    const arr = [1, 2, 3];
    expect(pop(arr)).toEqual([1, 2]);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe("shift関数", () => {
  it("配列の最初の要素を取り除ける", () => {
    const arr = [1, 2, 3];
    expect(shift(arr)).toEqual([2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe("unshift関数", () => {
  it("配列の最初に要素を一つ追加できる", () => {
    const arr = [1, 2, 3];
    expect(unshift(arr, 0)).toEqual([0, 1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("配列の最初に要素を複数追加できる", () => {
    const arr = [1, 2, 3];
    expect(unshift(arr, -2, -1, 0)).toEqual([-2, -1, 0, 1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("要素を渡さないと配列は変わらない", () => {
    const arr = [1, 2, 3];
    expect(unshift(arr)).toEqual([1, 2, 3]);
    expect(arr).toEqual([1, 2, 3]);
  });
});

describe("sort関数", () => {
  it("アルファベット順にソートする", () => {
    const arr = ["banana", "lemon", "apple"];
    expect(sort(arr)).toEqual(["apple", "banana", "lemon"]);
    expect(arr).toEqual(["banana", "lemon", "apple"]);
  });

  it("比較関数を指定して、昇順に並び替える", () => {
    const arr = [2, 6, 4, 12, 7];
    expect(sort(arr, (a, b) => a - b)).toEqual([2, 4, 6, 7, 12]);
    expect(arr).toEqual([2, 6, 4, 12, 7]);
  });
});
