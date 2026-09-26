# 問題

古い JavaScript のコードでは `undefined` と比較を行う際に:

```js
if (foo === undefined) { ... }
```

ではなく以下のように書かれたコードを見ることがある (注: `void 0` は `undefined` を返す)。

```js
if (foo === void 0) { ... }
```

これにはどのような理由があるか、また今ではこのような書き方をしないのは何故か調べて回答しなさい。

# 回答

ES3までは、undefinedという識別子は書き換え可能であったため、undefinedという識別子がundefinedを返さない可能性があった。
一方、void 0 であれば確実にundefinedが返るため、この書き方が使われた。

ES5以降では、グローバルスコープのundefinedは書き換え可能ではないため、void 0 が使われなくなった。
なお、グローバルスコープ以外のスコープではundefinedを識別子として使えるが、ESLintの推奨設定である、no-shadow-restricted-namesによって、undefinedを識別子として使うことは禁止される
