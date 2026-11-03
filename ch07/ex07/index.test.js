import { describe, it, expect } from "vitest";
import { sort } from "./index.js";

describe("sort 関数", () => {
  it("配列が昇順になる", () => {
    const arr = [3, 7, 1, 11, 9, 10, 8, 5, 17, 3];
    expect(sort(arr)).toEqual([1, 3, 3, 5, 7, 8, 9, 10, 11, 17]);
  });

  it("既に昇順の場合は配列の並びは変わらない", () => {
    const arr = [1, 3, 3, 5, 7, 8, 9, 10, 11, 17];
    expect(sort(arr)).toEqual([1, 3, 3, 5, 7, 8, 9, 10, 11, 17]);
  });

  it("要素が一つの配列を渡すとその配列が返る", () => {
    expect(sort([3])).toEqual([3]);
  });

  it("空配列を渡すと空配列が返る", () => {
    expect(sort([])).toEqual([]);
  });
});
