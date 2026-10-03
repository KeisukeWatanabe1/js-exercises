import { describe, it, expect } from "vitest";
import { parseJSON } from "./index.js";

describe("parseJSON関数", () => {
  describe("文字列がJSONとしてパースできる場合は、パースした結果を返す", () => {
    it.each([
      ['{"a": "b"}', { a: "b" }],
      ['{"a": "b", "c": "d"}', { a: "b", c: "d" }],
      ['{"a": "b", "list": ["c", "d"]}', { a: "b", list: ["c", "d"] }],
    ])("%s", (input, expected) => {
      expect(parseJSON(input)).toEqual({ success: true, data: expected });
    });
  });

  // it("文字列がJSONとしてパースできない場合はエラーを返す")
  describe("文字列がJSONとしてパースできない場合は、エラーを返す", () => {
    it.each(["{", "{a: b}", "{'a', 'b'}"])("%s", (input) => {
      expect(parseJSON(input)).toEqual({
        success: false,
        error: expect.anything(),
      });
    });
  });
});
