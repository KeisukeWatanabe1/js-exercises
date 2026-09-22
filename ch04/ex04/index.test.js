import { describe, it, expect } from "vitest";
import { bitCount } from "./index.js";

describe("bitCount関数", () => {
  describe("1であるビットの数を返す", () => {
    it.each([
      [0b10, 1],
      [0b101, 2],
      [0b110010010, 4],
      [0b10010011011011110011101011101101, 20],
    ])("bitCount(%i) は %i を返す", (input, expected) => {
      expect(bitCount(input)).toBe(expected);
    });
  });

  describe("全て0である場合は0を返す", () => {
    it.each([
      [0b0, 0],
      [0b00, 0],
      [0b0000000000000000000000000000000, 0],
      [0b00000000000000000000000000000000, 0],
    ])("bitCount(%i) は %i を返す", (input, expected) => {
      expect(bitCount(input)).toBe(expected);
    });
  });

  describe("全て1である場合も正しく1であるビットの数を返す", () => {
    it.each([
      [0b1, 1],
      [0b11, 2],
      [0b1111111111111111111111111111111, 31],
      [0b11111111111111111111111111111111, 32],
    ])("bitCount(%i) は %i を返す", (input, expected) => {
      expect(bitCount(input)).toBe(expected);
    });
  });
});
