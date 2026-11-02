function fizzbuzz(n) {
  // [1, 2, ..., n] という配列を作る
  // length が n のオブジェクトに対して、map を適用することで、
  // 0, 1, ..., n - 1 とインデックスが取れるため、1を足すことで、
  // 1, 2, ..., n を得る
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const fizzbuzzarr = arr.map((i) =>
    i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i,
  );
  fizzbuzzarr.forEach((x) => console.log(x));
}

function sumOfSquaredDifference(f, g) {
  return f.reduce((result, x, i) => result + (x - g[i]) ** 2, 0);
}

function sumOfEvensIsLargerThan42(array) {
  return array.filter((x) => x % 2 === 0).reduce((sum, x) => sum + x, 0) >= 42;
}
