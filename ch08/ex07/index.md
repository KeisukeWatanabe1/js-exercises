# 問題

https://www.ricoh.co.jp を開き、ロードされている js ファイル中で名前空間としての関数の即時実行関数式を使っている js ファイルを 1 つ以上見つけて URL を記載しなさい。

# 回答

関数の即時実行関数式を使っている js ファイルとして以下が見つかった

- https://www.ricoh.co.jp/-/Media/Ricoh/Common/cmn_g_header_footer/js/init.js
- https://www.ricoh.co.jp/-/Media/Ricoh/Common/cmn_g_header_footer/js/template.js

js ファイルの中身はそれぞれ次のようになっており、関数が定義された後にすぐに呼び出されている（即時実行関数式）ことが確認できた。

以下の init.js の関数内の req は、もしもグローバル変数に同名の req があっても衝突しない。

```js
((win, doc) => {
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    "/-/Media/Ricoh/Common/cmn_g_header_footer/js/initBase.js",
    false,
  );
  req.send();
  eval(req.responseText);
})(window, document);
```

以下の template.js の関数内の template も同様に、グローバル変数に同名の template があっても衝突しない

```js
((win, doc) => {
  var template = document.createElement("script");
  template.src = "/-/Media/Ricoh/Common/cmn_g_header_footer/js/templateBase";
  template.type = "module";
  document.body.appendChild(template);
})(window, document);
```
