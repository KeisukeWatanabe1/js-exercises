import { describe, it, expect } from "vitest";
import { equals } from "./index.js";

describe("compare two objects", () => {
    it("returns true for strict equality", () => {
        expect(equals(42, 42)).toBe(true);
        expect(equals(null, null)).toBe(true);
    });

    it("returns false when not strict equal and a non-object is compared", () => {
        expect(equals({x: 42}, 42)).toBe(false);
        expect(equals(null, {x: 42})).toBe(false);
    });

    it("returns false when property count or names differ", () => {
        expect(equals({x: 1}, {y: 1})).toBe(false);
        expect(equals({x: 1}, {x: 1, y: 1})).toBe(false);
    });

    it("recursively compares each property value", () => {
        expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})).toBe(true);
        expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})).toBe(false);
    })
})