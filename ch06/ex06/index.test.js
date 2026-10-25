import { describe, it, expect } from "vitest";
import { getPropertyOf } from "./index.js";

describe("getPropertyOf", () => {
  it("オブジェクトの全ての独自プロパティ(列挙不可、Symbol含む)を取得できる", () => {
    const symbol = Symbol();
    console.log(symbol);
    const o = { x: 0, [symbol]: 1 };
    Object.defineProperty(o, "notEnumerable", {
      enumerable: false,
    });
    const expectedProperty = ["x", symbol, "notEnumerable"];

    const actualProperty = getPropertyOf(o);

    expect(actualProperty).toHaveLength(expectedProperty.length);
    expect(actualProperty).toEqual(expect.arrayContaining(expectedProperty));
  });
});
