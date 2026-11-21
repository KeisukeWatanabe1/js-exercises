import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { arrow1, arrow2, arrow3 } from "./index.js";

// beforeEach には各テストが実行前に呼び出される
// コールバック関数を登録する
beforeEach(() => {
  vi.useFakeTimers(); // 日時のモックを有効にする
});

// afterEach には各テストが完了した後に呼び出される
// コールバック関数を登録する
afterEach(() => {
  // arrow1 のテストで console.log を
  // spyOn で差し替えるので元に戻す
  vi.resetAllMocks();
  vi.restoreAllMocks();

  vi.useRealTimers(); // 実際の日時に戻す
});

describe("arrow1 関数", () => {
  it("文字が n 個含む配列が返る", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = arrow1(3, "a");
    expect(spy).toHaveBeenCalledTimes(3);
    // console.log が arrow1 に渡された文字を引数として実行したことを確認する
    // spy.mock.calls は全呼び出しの引数を表す。配列の各要素は、各呼び出しの引数の配列となっている
    expect(spy.mock.calls).toEqual([["a"], ["a"], ["a"]]);
    expect(result).toEqual(["a", "a", "a"]);
  });

  it("空文字が n 個含む配列が返る", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = arrow1(3, "");
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy.mock.calls).toEqual([[""], [""], [""]]);
    expect(result).toEqual(["", "", ""]);
  });

  it("文字が 0 個含む配列が返る", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = arrow1(0, "a");
    expect(spy).toHaveBeenCalledTimes(0);
    expect(spy.mock.calls).toEqual([]);
    expect(result).toEqual([]);
  });
});

describe("arrow2 関数", () => {
  it("正の整数の二乗を返す", () => {
    expect(arrow2(3)).toBe(9);
  });

  it("負の整数の二乗を返す", () => {
    expect(arrow2(-4)).toBe(16);
  });

  it("0を与えると0を返す", () => {
    expect(arrow2(0)).toBe(0);
  });
});

describe("arrow3 関数", () => {
  it("現在時刻を表す now プロパティを含むオブジェクトが返る", () => {
    vi.setSystemTime(new Date(2026, 11, 21, 20, 0, 0));
    expect(arrow3().now).toBe(Date.now());
  });
});
