import { describe, it, expect } from "vitest";
import { DynamicSizeArray } from "./index.js";
import { beforeEach } from "vitest";

function makeArrayWith(n) {
  const arr = new DynamicSizeArray();
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

describe("DynamicSizeArray", () => {
  it("pushした値をgetで取り出せ、pushした分、lengthが増える", () => {
    const arr = makeArrayWith(5);
    expect(arr.length()).toEqual(5);
    expect(arr.get(0)).toEqual(0);
    expect(arr.get(1)).toEqual(1);
    expect(arr.get(2)).toEqual(2);
    expect(arr.get(3)).toEqual(3);
    expect(arr.get(4)).toEqual(4);
  });

  it("setで既存の要素を上書きでき、lengthは変わらない", () => {
    const arr = makeArrayWith(5);
    arr.set(1, "a");
    expect(arr.get(1)).toEqual("a");
    expect(arr.length()).toEqual(5);
  });

  it("範囲外のgetはエラーになる(get(-1))", () => {
    const arr = makeArrayWith(5);
    expect(() => arr.get(-1)).toThrow();
  });

  it("範囲外のgetはエラーになる(get(length))", () => {
    const arr = makeArrayWith(5);
    expect(() => arr.get(arr.length())).toThrow();
  });

  it("新しい配列のlength()は0", () => {
    const arr = makeArrayWith(0);
    expect(arr.length()).toEqual(0);
  });
});
