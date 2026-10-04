# 問題

Node で debugger 文を使ってデバッグする方法を調べなさい。

# 回答

## ソースコード上での準備

コード上で、一時停止したい箇所に、`debugger` 文を入れる。
例えば、以下のサンプルコードのようにループの中に書くことで、ループが回るごとに変数の値がどう変化するかが確かめられる。

```
function add(a, b) {
  const result = a + b;
  return result;
}

let total = 0;
for (let i = 1; i <= 3; i++) {
  debugger;
  total = add(total, i);
}
console.log(total);

```

## デバッグする時の方法

デバッグする時は、inspect オプションを付けて実行する。

```
node inspect index.js
```

実行すると、まず最初の行で停止する。

結果①

```
$ node inspect index.js
< Debugger listening on ws://127.0.0.1:9229/46e1d975-c57d-422c-95ae-4f484982dbdb
< For help, see: https://nodejs.org/learn/getting-started/debugging
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
Break on start in index.js:1
> 1 function add(a, b) {
  2   const result = a + b;
  3   return result;
debug>
```

以降はコマンドを打って操作する。

- `cont`, `c`: 次の`debugger;`まで進む
- `next`, `n`: 1行進む
- `step`, `s`: 現在実行しようとする行にある関数の中に入る
- `out`, `o`: 関数の呼び出し元に戻る
- `repl`: その時点での変数の値を確認できる

例えば、結果①から、`cont`を送ると結果②のように、`debugger;`で停止する。

結果②

```
debug> cont
break in index.js:8
  6 let total = 0;
  7 for (let i = 1; i <= 3; i++) {
> 8   debugger;
  9   total = add(total, i);
 10 }
debug>
```

`next`を送ると次の行に進むことができる。ただし、関数の中には入らない。
関数の中に入りたい時は、以下のように関数を実行する行で停止している時に`step`を送る。
関数の中から抜けたい時は、`out`を送る。`out`を送ると関数の残りの処理が実行されて呼び出し元に戻る。

```
step in index.js:9
  7 for (let i = 1; i <= 3; i++) {
  8   debugger;
> 9   total = add(total, i);
 10 }
 11 console.log(total);
debug> step
step in index.js:2
  1 function add(a, b) {
> 2   const result = a + b;
  3   return result;
  4 }
debug>
```

変数の値を確認したい時は、`repl`でreplに入って確認できる。
以下は、`total`と`i`の値を確認する例である。

```
break in index.js:8
  6 let total = 0;
  7 for (let i = 1; i <= 3; i++) {
> 8   debugger;
  9   total = add(total, i);
 10 }
debug> repl
Press Ctrl+C to leave debug repl
> total
1
> i
2
```

replに入らずに、以下のように`exec`を使うことで値を確認することもできる。

```
debug> exec total
1
debug> exec i
2
```

## 参考情報

https://nodejs.org/api/debugger.html
