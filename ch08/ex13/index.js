function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

f("Watanabe");
// 出力：
// ReferenceError: Watanabe is not defined

// 無限ループとなる
f("function() {while (true) {1 + 1} } ()");
