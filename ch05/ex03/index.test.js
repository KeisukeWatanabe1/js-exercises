import { describe, it, expect } from "vitest";
import { has31DaysUsingIfElse, has31DaysUsingSwitch } from "./index.js";

describe("has31Days関数", () => {
  describe.each([
    ["if else 版", has31DaysUsingIfElse],
    ["switch 版", has31DaysUsingSwitch],
  ])("%s", (_, has31Days) => {
    describe("月の日数が31日であればtrueを、そうでなければfalseを返す", () => {
      it.each([
        ["Jan", true],
        ["Feb", false],
        ["Mar", true],
        ["Apr", false],
        ["May", true],
        ["Jun", false],
        ["Jul", true],
        ["Aug", true],
        ["Sep", false],
        ["Oct", true],
        ["Nov", false],
        ["Dec", true],
      ])("%s -> %s", (input, expected) => {
        expect(has31Days(input)).toBe(expected);
      });
    });
  });
});
