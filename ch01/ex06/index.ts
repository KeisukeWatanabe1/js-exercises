export function fib(x: number) {
  if (!Number.isInteger(x) || x < 1) {
    throw new Error("x must be a positive integer");
  }
  if (x === 1 || x === 2) {
    return 1;
  } else {
    let first = 1;
    let second = 1;
    for (let i = 3; i <= x; i++) {
      [first, second] = [second, first + second];
    }
    return second;
  }
}
