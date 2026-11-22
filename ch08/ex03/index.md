# 問題

書籍 8.2.1 の 「再帰関数とスタック」には、関数が自身を数千回呼び出した場合はエラーが発生すると書かれている。

1. プログラミング言語や処理系によっては、再帰呼び出しを関数の処理の末尾にする(末尾再帰)ことで、スタックオーバーフローが起こらないよう最適化できるものがある。末尾再帰は何故そのような最適化ができるのか答えなさい。

2. JavaScript で末尾再帰最適化を実装している処理系を答えなさい。 利用できる環境があれば、実際に以下の URL を表示・実行してエラーが発生しないことを確認しなさい。https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMAhtOAnGKA2AKMALkTBAFsAjAUwwEpEBvAWAChFlxp4kYoa8ADhjgATENGKlKNADSIIccHwyTy1Oo1bt2MYIjwKlNRAD4S9Zm23sMVKCAxIho8VADcW7QF9PNuw55lQWExaEQAKnlFMGU5QxjjAGpEAEZaDysfK1t7R0RefhS5NIys1gUwAGc4HCoAOhw4AHM8VHQsXDwUgAZe3tp01iA

出題範囲: 8.2.1

# 回答

## 問題 1 の回答

### 末尾再帰

末尾再帰とは、再帰関数で、自身の関数を return する部分で、自身の関数を返すことだけを行っていることを末尾再帰という。

末尾再帰の例

```js
function recursive (foo) {
    ...
    return recursive(bar);
}
```

以下は、return で自身の関数を返すのではなく、乗算の処理を行うため、末尾再帰とは言わない。

```js
function factorial(n) {
    ...
    return n * factorial(n - 1);
}
```

### コールスタック

関数が実行されると、関数内のローカル変数や戻り先が保持されるスタックフレームが生成されて、スタックにpushされる。このスタックをコールスタックという。

以下のコードを例にする。

```js
function factorial(n) {
  debugger;
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1); // ★
}
factorial(3);
```

factorial() が 3 回呼び出されるため、以下のようなコールスタックができる。

```
factorial, n = 1
factorial, n = 2, 再開位置: ★の行
factorial, n = 3, 再開位置: ★の行
```

### 末尾再帰による最適化

前述の factorial() を、以下の factorialTailCall() に書き換えたとする。前述の factorial() の場合、★の行で、n と 関数の返り値を乗算するため、n の値を保持するためにコールスタックを積む必要があった。

一方で、factorialTailCall() では、再帰呼び出しをしている、★★の行で呼び出し以外の処理がないため、途中の n の状態と再開位置を保存しておく必要がない。よって、スタックフレームを積まずに、再帰関数を処理することができる。

```js
function factorialTailCall(n, accum) {
  debugger;
  if (n === 0) {
    return accum;
  }
  return factorialTailCall(n - 1, n * accum); // ★★
}
```

## 問題 2 の回答

JavaScriptエンジンの一つである、JavaScriptCore は末尾再帰最適化に対応している。JavaScriptCore を使っているブラウザの一つに、Safari がある。

Safari で以下リンク先のコードを実行したところ、実行でき結果が表示された

https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMAhtOAnGKA2AKMALkTBAFsAjAUwwEpEBvAWAChFlxp4kYoa8ADhjgATENGKlKNADSIIccHwyTy1Oo1bt2MYIjwKlNRAD4S9Zm23sMVKCAxIho8VADcW7QF9PNuw55lQWExaEQAKnlFMGU5QxjjAGpEAEZaDysfK1t7R0RefhS5NIys1gUwAGc4HCoAOhw4AHM8VHQsXDwUgAZe3tp01iA

結果

```
[LOG]: Infinity
```
