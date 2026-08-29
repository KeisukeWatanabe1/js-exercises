# 問題

以下のプログラムを実行し、2つの出力結果とその理由を説明しなさい。

```ts
let a = 0,
  b = 0;

// prettier-ignore
const c
=
a;
// prettier-ignore
++
b

console.log(a, b, c);

// prettier-ignore
const e = a++;
b;

console.log(a, b, e);
```

# 回答

## 出力結果

```
0 1 0
1 1 0
```

# 理由

コードの前半部分を説明する。

```
const c
=
a
++
b

console.log(a, b, c);
```

コードを上から見ると、`const c = a`までは成り立つ。`++`を`a`の後置演算子とみると、`++`を後置演算子として使う場合は式と同じ行に記述するというルールに反するため、`++`は`b`の前置演算子と解釈できる。よって上記のコードは以下のように解釈でき、コンソールへの出力は`0 1 0`となる。

```
const c = a; // 0
++b; // 1

console.log(a, b, c); // 0 1 0
```

次にコードの後半について説明する。

```
const e = a++
b;

console.log(a, b, e);
```

`const e = a++`までで一つの式がでいていて、続きに`b`が来ると式が解釈できない。よって、上記のコードは以下のように解釈でき、コンソールへの出力は`1 1 0`となる。

```
const e = a++; // e = 0, a = 1
b;
console.log(a, b, e); // 1 1 0
```
