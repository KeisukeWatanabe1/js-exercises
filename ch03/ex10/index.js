// Symbol()の挙動確認
// 同じ文字列を渡しても生成されるSymbolは別物
let sym1 = Symbol("test");
let sym2 = Symbol("test");
let o = {};
o[sym1] = 1;
o[sym2] = 2;
console.log(o[sym1], o[sym2]);

// Symbol.for()の挙動確認
let sym3 = Symbol.for("shared");
// 既に"shared"を使って呼び出しているので、
// sym4にはsym3と同じSymbolが入る
let sym4 = Symbol.for("shared");
console.log(sym3 === sym4);
// sym3とsym4が同じ文字列に対して作られたSymbolであることを確認する
console.log(Symbol.keyFor(sym3), Symbol.keyFor(sym4));

// sym3とsym4は同じSymbolのため、
// sym3をキーにして値を入れると、sym4をキーにしても同じ値が取得できる
o[sym3] = 3;
console.log(o[sym3], o[sym4]);

// sym4をキーにして値を編集しても、sym3をキーにして同じ値が取得できる
o[sym4] = 4;
console.log(o[sym3], o[sym4]);
