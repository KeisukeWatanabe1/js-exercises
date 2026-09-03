import { equalArrays } from "./index.ts";
import { test, expect } from "vitest";

test("ch03-ex07", () => {
  const x = "abc"; // ここを変更
  const y = ["a", "b", "c"]; // ここを変更

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});