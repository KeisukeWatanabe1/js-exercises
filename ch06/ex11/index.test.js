import { describe, it, expect } from "vitest";
import { createPoint } from "./index.js";

describe("createPoint", () => {
  it("x, y を設定して、極座標に変換される", () => {
    const p = createPoint();
    p.x = 1;
    p.y = 1;
    expect(p.r).toBeCloseTo(Math.SQRT2);
    expect(p.theta).toBeCloseTo(Math.PI / 4);
  });

  it("x を指定して、その値が保持されている", () => {
    const p = createPoint();
    p.x = 1.24;
    expect(p.x).toBeCloseTo(1.24);
  });

  it("y を設定して、その値が保持されている", () => {
    const p = createPoint();
    p.y = 5.36;
    expect(p.y).toBeCloseTo(5.36);
  });

  it("x を変えて、y が変わらない", () => {
    const p = createPoint();
    p.x = 3;
    p.y = 4;
    p.x = 6;
    expect(p.x).toBeCloseTo(6);
    expect(p.y).toBeCloseTo(4);
  });

  it("yを変えて、x が変わらない", () => {
    const p = createPoint();
    p.x = 3;
    p.y = 4;
    p.y = 6;
    expect(p.x).toBeCloseTo(3);
    expect(p.y).toBeCloseTo(6);
  });

  it("x にNaNを設定して、エラーになる", () => {
    const p = createPoint();
    expect(() => {
      p.x = NaN;
    }).toThrow();
  });

  it("y にNaNを設定して、エラーになる", () => {
    const p = createPoint();
    expect(() => {
      p.y = NaN;
    }).toThrow();
  });
});
