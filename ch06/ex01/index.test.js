import { describe, it, expect } from "vitest";
import { newHashTable, hash } from "./index.js";

describe("ハッシュテーブル", () => {
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

  it("要素を得ることができる", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    expect(hashTable.get("abc")).toEqual({
      key: "abc",
      value: 3,
      next: undefined,
    });
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

  it("ハッシュが衝突した時は、リンクリスト形式で保持する", () => {
    const hashTable = newHashTable(5);
    hashTable.put("a", 1);
    hashTable.put("abc", 3);
    hashTable.put("abcdef", 6);
    expect(hashTable.size).toEqual(2);
    expect(hashTable.entries).toEqual([
      undefined,
      { key: "a", value: 1, next: { key: "abcdef", value: 6 } },
      undefined,
      { key: "abc", value: 3, next: undefined },
      undefined,
    ]);
  });
});
