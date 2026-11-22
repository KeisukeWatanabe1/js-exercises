function factorial(n) {
  debugger;
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
factorial(3);

function factorialTailCall(n, accum) {
  debugger;
  if (n === 0) {
    return accum;
  }
  return factorialTailCall(n - 1, n * accum);
}
factorialTailCall(3, 1);
