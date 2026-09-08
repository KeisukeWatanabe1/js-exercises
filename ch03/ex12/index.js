class Example {
  valueOf() {
    return 1;
  }

  toString() {
    return "example";
  }
}

let obj = new Example();

console.log(obj - 0); // 数値演算と解釈させ、valueOfが呼ばれるようにする
console.log(`${obj}`); // テンプレートリテラルでtoStringが呼ばれるようにする
