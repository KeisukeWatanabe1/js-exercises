# AI活用ログ: テストの英語表現レビュー

## Q1. テストを書いたんだけど、itの中に書いてる英語、テストの書き方として、英語の表現としてどう思う？

```typescript
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
```

### 回答

英語表現としてはちょっとぎこちない。

- `"length of emoji of X"` → 語順が不自然。正しくは`"length of the X emoji"`
- `"is emoji of"` → `"is the emoji for"`のほうが自然
- 冠詞(`the`)の抜け

また、3つの`it`が同じ`describe`にフラットに並んでいて、「lengthの検証」と「サロゲートペア/コードポイントエスケープが同じ文字になるかの検証」という性質の違う2種類のテストが混在している。`describe`を分けると意図が伝わりやすい。

```typescript
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
```

## Q2. あなたが言ってる「`it`の中身が2種類の主張を混在させてること。」がわかりづらい

### 回答

説明が不正確だった。正しくは「1つの`it`の中に2つの主張がある」のではなく、**3つの`it`全体を見たときに、性質の違う2種類のテストが同じ`describe`にフラットに並んでいる**ということ。

- **グループA**: 「lengthが2になる」という性質の検証(1個目の`it`)
- **グループB**: 「別の書き方でも同じ絵文字になる」という性質の検証(2〜3個目の`it`)

テーマの異なるAとBが`describe("escape sequence of emoji", ...)`の直下にフラットに並んでいるため、パッと見て「このdescribeは何をテストしているグループなのか」がわかりにくい。`describe`をネストして「lengthの話」と「表記の等価性の話」を分けることで、読んだ瞬間に構造が伝わるようにする、という提案だった。