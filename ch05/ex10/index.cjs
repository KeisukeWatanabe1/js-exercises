console.log("-----1つ目-----");
{
  let a = 1;
  let b = 2;
  let obj = { a: 3, b: 4 };
  with (obj) {
    a = b; // obj.a = obj.b と同じ意味
  }
  console.log({ a, b, obj });
  // 出力：{ a: 1, b: 2, obj: { a: 4, b: 4 } }
}
{
  // with を使わない場合
  let a = 1;
  let b = 2;
  let obj = { a: 3, b: 4 };
  obj.a = obj.b;
  console.log({ a, b, obj });
  // 出力：{ a: 1, b: 2, obj: { a: 4, b: 4 } }
}

console.log("-----2つ目-----");
{
  let a = 1;
  let b = 2;
  let obj = { b: 4 };
  with (obj) {
    a = b; // a = obj.b と同じ意味
  }
  console.log({ a, b, obj });
  // 出力：{ a: 4, b: 2, obj: { b: 4 } }
}
{
  // with を使わない場合
  let a = 1;
  let b = 2;
  let obj = { b: 4 };
  a = obj.b;
  console.log({ a, b, obj });
  // 出力：{ a: 4, b: 2, obj: { b: 4 } }
}

console.log("-----3つ目-----");
{
  let a = 1;
  let b = 2;
  let obj = { a: 3 };
  with (obj) {
    a = b; // obj.a = b と同じ意味
  }
  console.log({ a, b, obj });
  // 出力：{ a: 1, b: 2, obj: {a: 2}}
}
{
  // with を使わない場合
  let a = 1;
  let b = 2;
  let obj = { a: 3 };
  obj.a = b;
  console.log({ a, b, obj });
  // 出力：{ a: 1, b: 2, obj: {a: 2}}
}

console.log("-----4つ目-----");
{
  let a = 1;
  let b = 2;
  let obj = {};
  with (obj) {
    // obj の中に a, b プロパティはないため
    // with 文の前で宣言された a, b である
    a = b;
  }
  console.log({ a, b, obj });
  // 出力：{ a: 2, b: 2, obj: {}}
}
{
  // with を使わない場合
  let a = 1;
  let b = 2;
  let obj = {};
  a = b;
  console.log({ a, b, obj });
  // 出力：{ a: 2, b: 2, obj: {}}
}
