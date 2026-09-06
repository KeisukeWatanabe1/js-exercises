## 問題

以下のコードを実行するとどのように表示されるか予想した後で実行しなさい。なぜそのような実行結果になったのか説明しなさい。

また、コード内の全ての `let` を `var` に変えた場合と、全ての `let` を消した場合 (非 `strict` モードでのみ実行可能) ではどうなるでしょうか。それら結果の理由についても説明しなさい。

```js
/* eslint-disable */
for (let i = 0; i < 10; i++) {
  (function () {
    let i = 100;
  })();
  console.log(i);
}
console.log(i);
```

## 回答

### コードを実行した時の結果予想

実行結果の予想を以下に示す。

```
0
1
2
3
4
5
6
7
8
9
[iが宣言されていないというエラー]
```

### 実際の結果と解説

実際の実行結果を示す。

```
$ node ch03/ex14/index.js
0
1
2
3
4
5
6
7
8
9
file:///C:/Users/r00000877/projects/js-exercises/ch03/ex14/index.js:8
console.log(i);
            ^

ReferenceError: i is not defined
    at file:///C:/Users/r00000877/projects/js-exercises/ch03/ex14/index.js:
8:13
    at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loa
der:681:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_mai
n:117:5)

Node.js v22.22.3
```

この結果となる理由を解説する。
1つ目の`console.log(i)`の`i`の参照範囲はforループ内であり、
無名関数内の`i`のスコープはこの関数のみである。
よって、0から9までインクリメントされる`i`が表示される。
2つ目の`console.log(i)`の`i`では、グローバル変数の`i`を参照しに行く。
しかし、上記のようにこのコードで登場する`i`はグローバル変数ではないため、
`ReferenceError: i is not defined`とエラーが出る。

### `let`を`var`に変えた場合の結果と解説

コードの`let`を`var`に変えて実行した時の結果を以下に示す。

```
$ node ch03/ex14/index.js
0
1
2
3
4
5
6
7
8
9
10
```

この結果の理由を解説する。
forループの最初で、varを使って宣言した`i`はグローバルスコープとなる。
そのため、2つ目の`console.log(i)`でも`i`を参照できるため、
forループを抜けた時の`i`の値である`10`が表示される。

### 全ての`let`を消した場合の結果と解説

全ての`let`を消して実行した時の結果を以下に示す。

```
$ node ch03/ex14/index.js
100
101
```

この結果の理由を解説する。
`let`, `const`, `var`で宣言していない変数に値を代入した場合、
その変数（今回は`i`）はグローバル変数になる。
`i`はforループ、関数内を含むどこからでも参照可能になる。
よって1ループ目に無名関数が実行されて`i`に`100`が代入されて、
次に`i`がインクリメントされて`101`になった所でループを抜けて、
2つ目の`console.log(i)`で`101`が表示される。

#### 補足：全ての`let`を消して実行する方法

全ての`let`を消して実行するには、非strictモードで実行する必要がある。
そのためには、`package.json`の`"type": "module"`を消してから実行する。

`"type": "module"`があるとESモジュールとして解釈され、
ESモジュールでは常にstrinctモードである。
よって、`"type": "module"`を消すことで、非strictモードで実行できる。