import { describe, it, expect } from "vitest";
import {
  toEscapeSequenceUsingIfElse,
  toEscapeSequenceUsingSwitch,
} from "./index.js";

describe("toEscapeSequence関数", () => {
  describe.each([
    ["if else 版", toEscapeSequenceUsingIfElse],
    ["switch 版", toEscapeSequenceUsingSwitch],
  ])("%s", (_, toEscapeSequence) => {
    describe("文字列中の特殊文字をエスケープシーケンスに変換する", () => {
      it.each([
        ["a\0b", "a\\0b"],
        ["a\bb", "a\\bb"],
        ["a\tb", "a\\tb"],
        ["a\nb", "a\\nb"],
        ["a\vb", "a\\vb"],
        ["a\fb", "a\\fb"],
        ["a\rb", "a\\rb"],
        ['a"b', 'a\\"b'],
        ["a'b", "a\\'b"],
        ["a\\b", "a\\\\b"],
      ])("%j -> %j", (input, expected) => {
        expect(toEscapeSequence(input)).toBe(expected);
      });
    });

    describe("文字列中に特殊文字を含まない場合は変換しない", () => {
      it.each(["abc", ""])("%j はそのまま返す", (input) => {
        expect(toEscapeSequence(input)).toBe(input);
      });
    });
  });
});
