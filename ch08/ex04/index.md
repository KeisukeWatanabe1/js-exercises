# 問題

以下の入れ子の関数とアロー関数のコード実行結果を予想してから実行し、結果を説明しなさい。

```js
const obj = {
  om: function () {
    const nest = {
      nm: function () {
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();
```

# 回答

予想

```
false true
true false
```

結果

```
false true
true false
```

## 結果の解説

nm() は function キーワードで定義されている。アロー関数以外の関数がオブジェクトのメソッドとして呼び出される場合は、関数を呼び出したオブジェクトが this となる。よって、nest.nm() とした時の this は nest を指すため、this === obj, this === nest はそれぞれ、false, true となる。

arrow() はアロー関数である。アロー関数は定義された時点で、this を親スコープから継承する*1。arrow() は om.function の this を継承することになるため、nest.arrow() の this は obj を指す。よって、this === obj, this === nest はそれぞれ、true, false となる。

## 参考

*1 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/this
