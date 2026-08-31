import { describe, it, expect } from "vitest";
import { LFtoCRLF, CRLFtoLF } from "./index.ts";

describe("line break code conversion", () => {
    describe("LFtoCRLF function", () => {
        it("converts LF to CRLF", () => {
            expect(LFtoCRLF("ABC\nDEF\nGHI")).toBe("ABC\r\nDEF\r\nGHI");
        });

        it("only converts LF when both LF and CRLF are present", () => {
            expect(LFtoCRLF("ABC\r\nDEF\nGHI")).toBe("ABC\r\nDEF\r\nGHI");
        });

        it("doen not convert when line breaks are already CRLF", () => {
            expect(LFtoCRLF("ABC\r\nDEF\r\nGHI")).toBe("ABC\r\nDEF\r\nGHI");
        });

        it("does not convert when there are no line breaks", () => {
            expect(LFtoCRLF("ABCDEFGHI")).toBe("ABCDEFGHI")
        });
    });

    describe("CRLFtoLF function", () => {
        it("converts CRLF to LF", () => {
            expect(CRLFtoLF("ABC\r\nDEF\r\nGHI")).toBe("ABC\nDEF\nGHI");
        });

        it("only converts CRLF when both LF and CRLF are present", () => {
            expect(CRLFtoLF("ABC\nDEF\r\nGHI")).toBe("ABC\nDEF\nGHI");
        });

        it("doen not convert when line breaks are already LF", () => {
            expect(CRLFtoLF("ABC\nDEF\nGHI")).toBe("ABC\nDEF\nGHI");
        });

        it("does not convert when there are no line breaks", () => {
            expect(CRLFtoLF("ABCDEFGHI")).toBe("ABCDEFGHI");
        });
    })
})