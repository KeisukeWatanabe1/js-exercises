{
  // 元のコード

  const args = [];
  function call() {
    args.push(Array.from(arguments));
  }

  call(1, 2, 3);
  call("A", "B");

  console.log(args[0]); // [1, 2, 3]
  console.log(args[1]); // ["A", "B"]
}

{
  // arguments を使わないように修正したコード

  const args = [];
  function call(...a) {
    args.push(a);
  }
  call(1, 2, 3);
  call("A", "B");

  console.log(args[0]); // [1, 2, 3]
  console.log(args[1]); // ["A", "B"]
}
