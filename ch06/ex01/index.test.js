import { describe, it, expect } from "vitest";
import { newHashTable, hash } from "./index.js";

describe("newHashTable", () => {
  it("要素を足せる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    hashTable.put("abcdefg", 7);
    expect(hashTable.size).toEqual(3);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: undefined },
      { key: "abcdefg", value: 7, next: undefined },
      { key: "abc", value: 3, next: undefined },
      undefined,
    ]);
  });

  it("インデックスが衝突した時はリンクリスト形式で保持する", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("ab", 2);
    hashTable.put("abcdefghijkl", 12);
    hashTable.put("abcdefg", 7);
    expect(hashTable.size).toEqual(4);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: undefined },
      {
        key: "ab",
        value: 2,
        next: {
          key: "abcdefghijkl",
          value: 12,
          next: { key: "abcdefg", value: 7, next: undefined },
        },
      },
      undefined,
      undefined,
    ]);
  });

  it("要素を得ることができる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    expect(hashTable.get("abc")).toEqual(3);
  });

  it("リンクリストにある要素を得ることができる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("ab", 2);
    hashTable.put("abcdefghijkl", 12);
    hashTable.put("abcdefg", 7);
    expect(hashTable.get("abcdefg")).toEqual(7);
  });

  it("要素を消せる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    expect(hashTable.size).toEqual(2);
    hashTable.remove("a");
    expect(hashTable.size).toEqual(1);
    expect(hashTable.entries).toEqual([
      undefined,
      undefined,
      undefined,
      { key: "abc", value: 3, next: undefined },
      undefined,
    ]);
  });

  it("リンクリストにある要素を消せる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("ab", 2);
    hashTable.put("abcdefghijkl", 12);
    hashTable.put("abcdefg", 7);
    hashTable.remove("abcdefghijkl");
    expect(hashTable.size).toEqual(3);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: undefined },
      {
        key: "ab",
        value: 2,
        next: {
          key: "abcdefg",
          value: 7,
          next: undefined,
        },
      },
      undefined,
      undefined,
    ]);
  });

  it("同じキーに要素を追加した時は上書きされる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    hashTable.put("a", 2);
    expect(hashTable.size).toEqual(2);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 2, next: undefined },
      undefined,
      { key: "abc", value: 3, next: undefined },
      undefined,
    ]);
  });

  it("存在しないキーを取得しようとするとundefinedが返る", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    expect(hashTable.get("xyz")).toEqual(undefined);
  });

  it("存在しないキーを消すと何も変わらない", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    hashTable.remove("abcdef");
    expect(hashTable.size).toEqual(2);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: undefined },
      undefined,
      { key: "abc", value: 3, next: undefined },
      undefined,
    ]);
  });

  it("リンクリストの途中のノードを上書きできる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("ab", 2);
    hashTable.put("abcdefghijkl", 12);
    hashTable.put("abcdefg", 7);
    hashTable.put("abcdefghijkl", 1000);
    expect(hashTable.size).toEqual(4);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: undefined },
      {
        key: "ab",
        value: 2,
        next: {
          key: "abcdefghijkl",
          value: 1000,
          next: { key: "abcdefg", value: 7, next: undefined },
        },
      },
      undefined,
      undefined,
    ]);
  });

  it("リンクリストの先頭を上書きしても、リンクリストが保持される", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("ab", 2);
    hashTable.put("abcdefghijkl", 12);
    hashTable.put("abcdefg", 7);
    hashTable.put("ab", 1000);
    expect(hashTable.size).toEqual(4);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: undefined },
      {
        key: "ab",
        value: 1000,
        next: {
          key: "abcdefghijkl",
          value: 12,
          next: { key: "abcdefg", value: 7, next: undefined },
        },
      },
      undefined,
      undefined,
    ]);
  });

  it("リンクリストの先頭を削除しても、それ以降が保持されてる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("ab", 2);
    hashTable.put("abcdefghijkl", 12);
    hashTable.put("abcdefg", 7);
    hashTable.remove("ab");
    expect(hashTable.size).toEqual(3);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: undefined },
      {
        key: "abcdefghijkl",
        value: 12,
        next: {
          key: "abcdefg",
          value: 7,
          next: undefined,
        },
      },
      undefined,
      undefined,
    ]);
  });
});
