import { describe, it, expect } from "vitest";
import { isEqual } from "./index.ts";

describe("isEqual function", () => {
    it ("returns true for exactly equal numbers", () => {
        expect(isEqual(0.2 - 0.1, 0.1)).toBe(true);
    });

    it("returns true for numbers equal within floating-point precision", () => {
        expect(isEqual(0.3 - 0.2, 0.1)).toBe(true);
    });

    it("returns false for different numbers", () => {
        expect(isEqual(0.2, 0.1)).toBe(false);
    });
})