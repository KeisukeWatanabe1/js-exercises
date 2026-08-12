export function abs(num: number) {
  if (num >= 0) {
    return num;
  } else {
    return -num;
  }
}

export function sum(array: number[]) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}

export function factorial(num: number) {
  let i,
    product = 1;
  for (i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
