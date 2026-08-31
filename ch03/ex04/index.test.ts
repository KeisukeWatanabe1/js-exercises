import { describe, it, expect } from "vitest";

describe("escape sequence of emoji", () => {
    describe("'Hundred Points Symbol' (💯)", () => {
        it("has a length of 2 due to surrogate pair encoding", () => {
            expect("💯".length).toBe(2);
        });

        it("can be represented as a surrogate pair", () => {
            expect("\uD83D\uDCAF").toBe("💯");
        });

        it("can be represented as a code point escape", () => {
            expect("\u{0001F4AF}").toBe("💯");
        });
    });
});