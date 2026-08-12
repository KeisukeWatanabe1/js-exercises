import { describe, it, expect } from "vitest";
import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  describe("sum", () => {
    it("returns zero when empty array given", () => {
      expect(sum([])).toBe(0);
    });

    it("returns total when array of positive numbers given", () => {
      expect(sum([0, 1, 2, 3, 4])).toBe(10);
    });

    it("return total when array contains negative numbers", () => {
      expect(sum([-1, -2, 3])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns factorial when positive integer given", () => {
      expect(factorial(4)).toBe(24);
    });

    it("retunrs one when zero given", () => {
      expect(factorial(0)).toBe(1);
    });

    it("return one when one given", () => {
      expect(factorial(1)).toBe(1);
    });
  });
});
