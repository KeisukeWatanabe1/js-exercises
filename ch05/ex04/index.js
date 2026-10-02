export function fibonacciUsingDoWhile() {
  const fib = [1, 1];
  let length = fib.length;
  do {
    fib[length] = fib[length - 1] + fib[length - 2];
    length = fib.length;
  } while (length < 10);
  return fib;
}

export function fibonacciUsingFor() {
  const fib = [1, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
