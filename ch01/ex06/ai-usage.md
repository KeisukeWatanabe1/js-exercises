# AI活用ログ: フィボナッチ関数のコードレビュー

## お題

以下のTypeScript実装とそのvitestテストをAIにレビューしてもらった。

```typescript
export function fib(x: number) {
  if (x === 1 || x === 2) {
    return 1;
  } else {
    let first = 1;
    let second = 1;
    let result;
    for (let i = 3; i <= x; i++) {
      result = first + second;
      first = second;
      second = result;
    }
    return result;
  }
}
```

既存テスト: `fib(1)`, `fib(2)`, `fib(75)` の3ケースのみ。

## AIの指摘

### バグ

- `x <= 0`（0や負の数）を渡すと、forループが一度も回らず `result` が `undefined` のまま返る
- 小数（例: `fib(1.5)`）や負の数に対するガード（不正入力を弾く防御コード）が存在しない
- `result` の型が明示されておらず、TypeScript上 `number | undefined` になっている

### テストで不足していた観点

1. `fib(0)` や負の数 → バグを踏む未検証ケース
2. `fib(3)` → ループ本体が最低1回動く最小ケースの検証漏れ
3. `fib(4)`以降の連続値 → 漸化式（3, 5, 8, 13...）が正しいかの追跡
4. 大きい数値の精度問題 → `Number.MAX_SAFE_INTEGER`(2^53-1) を超えると精度が崩れる。`fib(75)`はギリ安全圏だが境界の認識が必要
5. 非整数・型がずれた入力への防御確認
