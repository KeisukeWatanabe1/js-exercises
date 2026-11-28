# 問題

組み込み関数と自作関数の toString() の出力内容を確認しなさい

# 回答

組み込み関数の一つとして、isNaN の toString() の出力は以下のようになった。

toString() の出力内容：

```
function isNaN() { [native code] }
```

以下の自作の hello 関数の toString() の出力は、関数宣言の文字列でとなった。

```
function hello() {
  console.log("Hello World");
}
```

toString() の出力内容：

```
function hello() {
  console.log("Hello World");
}
```
