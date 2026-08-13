import { describe, it, expect } from "vitest";
import { fib } from "./index.ts";

describe("fibonacci sequence", () => {
  it("throws when zero given", () => {
    expect(() => fib(0)).toThrow();
  });

  it("throws when negative number given", () => {
    expect(() => fib(-5)).toThrow();
  });

  it("throws when decimal given", () => {
    expect(() => fib(3.5)).toThrow();
  });

  it("returns one when one given", () => {
    expect(fib(1)).toBe(1);
  });

  it("returns one when two given", () => {
    expect(fib(2)).toBe(1);
  });

  it("returns fibonacci number when 75 given", () => {
    expect(fib(75)).toBe(2111485077978050);
  });
});