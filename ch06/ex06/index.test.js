import { describe, it, expect } from "vitest";
import { getPropertyOf } from "./index.js";

describe("getPropertyOf", () => {
  it("オブジェクトの全ての独自プロパティ(列挙不可、Symbol含む)を取得できる", () => {
    const symbol = Symbol();
    const o = { x: 0, [symbol]: 0 };
    Object.defineProperty(o, "notEnumerable", {
      enumerable: false,
    });
    const expectedProperty = ["x", symbol, "notEnumerable"];

    const actualProperty = getPropertyOf(o);

    expect(actualProperty).toHaveLength(expectedProperty.length);
    expect(actualProperty).toEqual(expect.arrayContaining(expectedProperty));
  });

  it("継承プロパティを取得できる", () => {
    const o1 = { a: 1, b: 2 };
    const o2 = Object.create(o1);
    o2.c = 3;
    o2.d = 4;
    const o = Object.create(o2);
    o.x = 0;
    const symbol = Symbol();
    o[symbol] = 0;
    Object.defineProperty(o, "notEnumerable", {
      enumerable: false,
    });
    const expectedProperty = ["a", "b", "c", "d", "x", symbol, "notEnumerable"];

    const actualProperty = getPropertyOf(o);

    expect(actualProperty).toHaveLength(expectedProperty.length);
    expect(actualProperty).toEqual(expect.arrayContaining(expectedProperty));
  });

  it("継承した列挙不可 / Symbol のプロパティは含まない", () => {
    const symbol1 = Symbol();
    const o1 = { [symbol1]: 1, a: 2 };
    Object.defineProperty(o1, "notEnumerable1", {
      enumerable: false,
    });
    const o = Object.create(o1);
    o.x = 0;
    const symbol = Symbol();
    o[symbol] = 0;
    Object.defineProperty(o, "notEnumerable", {
      enumerable: false,
    });
    const expectedProperty = ["a", "x", symbol, "notEnumerable"];

    const actualProperty = getPropertyOf(o);

    expect(actualProperty).not.toContain(symbol1);
    expect(actualProperty).not.toContain("notEnumerable1");
    expect(actualProperty).toHaveLength(expectedProperty.length);
    expect(actualProperty).toEqual(expect.arrayContaining(expectedProperty));
  });

  it("独自プロパティと継承プロパティに重複があっても、重複無くプロパティを取得できる", () => {
    const o1 = { a: 1, b: 2, c: 3 };
    const o2 = Object.create(o1);
    o2.a = 4;
    o2.d = 5;
    const o = Object.create(o2);
    o.x = 0;
    o.c = 0;
    const symbol = Symbol();
    o[symbol] = 0;
    Object.defineProperty(o, "notEnumerable", {
      enumerable: false,
    });
    const expectedProperty = ["a", "b", "c", "d", "x", symbol, "notEnumerable"];

    const actualProperty = getPropertyOf(o);

    expect(actualProperty).toHaveLength(expectedProperty.length);
    expect(actualProperty).toEqual(expect.arrayContaining(expectedProperty));
  });

  it("空のオブジェクトからプロパティを取得すると空である", () => {
    expect(getPropertyOf({})).toEqual([]);
  });
});
