# 問題

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());
```

# 回答

## 予想

finallyブロックが最後に実行されるため、falseが返る

## 結果

```
$ node index.js
false
```
