import { describe, it, expect } from "vitest";
import { Point } from "./index.ts";

describe("Point#add", () => {
  it("adds positive coordinates", () => {
    const point = new Point(1, 2);
    point.add(new Point(10, 20));
    expect(point).toStrictEqual(new Point(11, 22));
  });

  it("adds negative coordinates", () => {
    const point = new Point(1, 2);
    point.add(new Point(-4, -7));
    expect(point).toStrictEqual(new Point(-3, -5));
  });

  it("does nothing when adding (0, 0)", () => {
    const point = new Point(1, 2);
    point.add(new Point(0, 0));
    expect(point).toStrictEqual(new Point(1, 2));
  });

  it("handles adding a point to itself", () => {
    const point = new Point(1, 2);
    point.add(point);
    expect(point).toStrictEqual(new Point(2, 4));
  });
});
