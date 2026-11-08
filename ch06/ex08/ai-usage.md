substractの以下の部分で、source[0] を書き換えてしまっていると指摘を受けた。

```
// 削除対象を一つにまとめる
const assignedSources = Object.assign(...sources);
```

そこで、第一引数を`{}`としてsource[0]を書き換えないようにした

```
// 削除対象を一つにまとめる
const assignedSources = Object.assign({}, ...sources);
```
