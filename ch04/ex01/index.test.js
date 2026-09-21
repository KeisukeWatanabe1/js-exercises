import { describe, it, expect } from "vitest";
import { add, sub, mul, div } from "./index.js";

describe("複素数の四則演算", () => {
  describe("加算", () => {
    it("実部と虚部をそれぞれ加算する", () => {
      expect(add({ re: 2, im: 4 }, { re: 8, im: 5 })).toEqual({
        re: 10,
        im: 9,
      });
    });

    it("負の値を含んでいても正しく加算できる", () => {
      expect(add({ re: 2, im: 4 }, { re: -8, im: -5 })).toEqual({
        re: -6,
        im: -1,
      });
    });

    it("0を足すと値が変わらない", () => {
      expect(add({ re: 2, im: 4 }, { re: 0, im: 0 })).toEqual({ re: 2, im: 4 });
    });

    it("実数同士の加算を正しく計算できる", () => {
      expect(add({ re: 2, im: 0 }, { re: 8, im: 0 })).toEqual({
        re: 10,
        im: 0,
      });
    });

    it("純虚数同士の加算を正しく計算できる", () => {
      expect(add({ re: 0, im: 4 }, { re: 0, im: 5 })).toEqual({ re: 0, im: 9 });
    });

    it("交換法則が成り立つ", () => {
      const a = { re: 2, im: 4 };
      const b = { re: 8, im: 5 };
      expect(add(a, b)).toEqual(add(b, a));
    });
  });

  describe("減算", () => {
    it("実部と虚部をそれぞれ減算する", () => {
      expect(sub({ re: 2, im: 4 }, { re: 8, im: 5 })).toEqual({
        re: -6,
        im: -1,
      });
    });

    it("負の値を含んでいても正しく減算できる", () => {
      expect(sub({ re: 2, im: 4 }, { re: -8, im: -5 })).toEqual({
        re: 10,
        im: 9,
      });
    });

    it("0を引いても値が変わらない", () => {
      expect(sub({ re: 2, im: 4 }, { re: 0, im: 0 })).toEqual({ re: 2, im: 4 });
    });

    it("実数同士の減算を正しく計算できる", () => {
      expect(sub({ re: 2, im: 0 }, { re: 8, im: 0 })).toEqual({
        re: -6,
        im: 0,
      });
    });

    it("純虚数同士の減算を正しく計算できる", () => {
      expect(sub({ re: 0, im: 4 }, { re: 0, im: 5 })).toEqual({
        re: 0,
        im: -1,
      });
    });
  });

  describe("乗算", () => {
    it("複素数の乗算を正しく計算できる", () => {
      expect(mul({ re: 2, im: 4 }, { re: 8, im: 5 })).toEqual({
        re: -4,
        im: 42,
      });
    });

    it("0をかけると0になる", () => {
      expect(mul({ re: 2, im: 4 }, { re: 0, im: 0 })).toEqual({
        re: 0,
        im: 0,
      });
    });

    it("実数同士の乗算を正しく計算できる", () => {
      expect(mul({ re: 2, im: 0 }, { re: 8, im: 0 })).toEqual({
        re: 16,
        im: 0,
      });
    });

    it("純虚数同士の乗算を正しく計算できる", () => {
      expect(mul({ re: 0, im: 4 }, { re: 0, im: 5 })).toEqual({
        re: -20,
        im: 0,
      });
    });

    it("交換法則が成り立つ", () => {
      const a = { re: 2, im: 4 };
      const b = { re: 8, im: 5 };
      expect(mul(a, b)).toEqual(mul(b, a));
    });
  });

  describe("除算", () => {
    it("複素数の除算を正しく計算できる", () => {
      // (2+4i)/(8+5i) = (2+4i)(8-5i)/89 = (36+22i)/89
      expect(div({ re: 2, im: 4 }, { re: 8, im: 5 })).toEqual({
        re: 36 / 89,
        im: 22 / 89,
      });
    });

    it("0を除算すると0になる", () => {
      expect(div({ re: 0, im: 0 }, { re: 8, im: 5 })).toEqual({
        re: 0,
        im: 0,
      });
    });

    it("0で除算するとエラーになる", () => {
      expect(() => div({ re: 2, im: 4 }, { re: 0, im: 0 })).toThrow();
    });

    it("実数同士の除算を正しく計算できる", () => {
      expect(div({ re: 2, im: 0 }, { re: 8, im: 0 })).toEqual({
        re: 2 / 8,
        im: 0,
      });
    });

    it("純虚数同士の除算を正しく計算できる", () => {
      expect(div({ re: 0, im: 4 }, { re: 0, im: 5 })).toEqual({
        re: 4 / 5,
        im: 0,
      });
    });
  });
});
