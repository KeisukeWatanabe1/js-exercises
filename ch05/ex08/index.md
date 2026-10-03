# 問題

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);
```

# 回答

## 予想

catch ブロックに break があるため、いつ finally ブロックに移動するか分からなかった。

そこで、仕様を調べたところ、finally ブロックに移動する条件の一つとして、「ブロックを出る制御フロー文（return、throw、break、continue）が try ブロックや catch ブロックの中で実行される直前」(*1)があることが分かった。

そのため、以下の処理が5回ループされることになるため、x には 5 が代入されていると予想した

```
// 1ループの処理

x に i を入れる
↓
try ブロックで、エラーが投げられる
↓
catch ブロックに移動する。breakが実行される前に、finally ブロックに移動する
↓
finally ブロックで、continue （次のループに移動）が実行される
```

### 参考

*1 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/try...catch#finally_%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF

## 結果

```
$ node index.js
5
```
