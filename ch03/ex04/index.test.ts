import { describe, it, expect } from "vitest";

describe("escape sequence of emoji", () => {
    it("the length of emoji of 'Hundred Points Symbol' is 2", () => {
        expect("💯".length).toBe(2);
    });

    it("\uD83D\uDCAF is emoji of 'Hundred Points Symbol'", () => {
        expect("\uD83D\uDCAF").toBe("💯");
    });

    it("\u{0001F4AF} is emoji of 'Hundred Points Symbol'", () => {
        expect("\u{0001F4AF}").toBe("💯");
    });
});