# 問題

問題 7.10 で作成した動的配列の push の平均時間計算量を説明しなさい。またその結果を用いて以下の関数 `copyA` と `copyB` に対し、`array.length` を `n` とした時の時間計算量を求めなさい。

```js
function copyA(array) {
  const result = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i];
  }
  return result;
}

// NOTE: copyB よりも copyA の方が効率的に見えるが計算量の観点ではどうだろうか
function copyB(array) {
  const result = [];
  for (const v of array) {
    result.push(v);
  }
  return result;
}
```

# 回答

## 問題 7.10 で作成した動的配列の push の平均時間計算量

問題7.10 で実装した push では、n = 5, 9, 17, ... の時に配列のサイズが2倍になりコピーが起こる。
n 回目の push で発生するコピーの回数は次の表のように表せる

| n     | n 回目の push で発生するコピーの回数 |
| ----- | ------------------------------------ |
| 5     | 4                                    |
| 9     | 8                                    |
| 17    | 16                                   |
| ...   | ...                                  |
| $`n`$ | $`4 \cdot 2^{log_2 \frac{n-1}{4}}`$  |

n 回の push で起こるコピー回数の合計は S は以下のように表せる。

$`S = 4 + 8 + 16 + \ldots + 4 \cdot 2^{log_2 \frac{n-1}{4}} = 4 \cdot 2^0 + 4 \cdot 2^1 + 4 \cdot 2^2 + \ldots + 4 \cdot 2^{log_2 \frac{n-1}{4}}`$

S を初項 4、公比 2、項数 $`{log_2 \frac{n-1}{4}} + 1`$ の等比数列の和と考えると、

$`S = \frac{\text{初項} \cdot (\text{公比}^{\text{項数}} - 1)}{\text{公比} - 1} = \frac{4 \cdot (\frac{n - 1}{4} \cdot 2 - 1)}{2 - 1} = 2n - 6`$

n 回の push で起こる書き込みコストは n である。よって、n 回 push した時の総コストは以下のように表せる。

$`2n - 6 + n = 3n - 6`$

平均時間計算量を求めるために、$`3n - 6`$ を $`n`$で割ると、$`3 - 6/n`$ であり、O記法で表すと O(1) と表せる。

## copyA と copyB の時間計算量

copyA では、n 回の書き込みが発生するため 時間計算量は O(n) である。

copyB では、前述の通り、push 1回あたりの時間計算量は O(1) であり、push が n回行われるため、時間計算量は O(n) である。

つまり、copyA, copyB ともに時間計算量は同じである。

しかし、厳密には、copyA のほうが効率的と考える。理由は、copyB では、配列のコピーと書き込みで、$`3n - 6`$ のコストがかかっており、copyAでは、書き込みで $`n`$ のコストがかかっているため、copyBのほうが定数倍がある分、処理量が多いためである。
