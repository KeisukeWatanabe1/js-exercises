引数が与えられなかった時に対応するために、デフォルト引数を設定するアドバイスをもらった

every/some の真偽値を以下のように、積(*)/加算(+) で求めていた。condition が true/false を返せば問題ないが、condition が、truthy/falsy な値を返す場合、意図通りにならないと指摘された。

```
// every
(judge, elem, index, arr) => judge * condition(elem, index, arr)

// some
(judge, elem, index, arr) => judge + condition(elem, index, arr)
```
