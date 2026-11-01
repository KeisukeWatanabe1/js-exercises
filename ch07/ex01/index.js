export function sumMatrix(a, b) {
  if (a.length === b.length) {
    let sameSize = true;
    for (let i = 0; i < a.length; i++) {
      if (a[i].length !== b[i].length) {
        sameSize = false;
      }
    }
    if (!sameSize) {
      throw Error("行列のサイズが違います");
    }
  } else {
    throw Error("行列のサイズが違います");
  }

  const sum = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    sum[i] = new Array(a[i].length);
    for (let j = 0; j < a[i].length; j++) {
      sum[i][j] = a[i][j] + b[i][j];
    }
  }
  return sum;
}

export function multipleMatrix(a, b) {
  if (a[0].length !== b.length) {
    throw Error("行列のサイズが違います");
  }
  const multiple = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    multiple[i] = new Array(b[0].length);
    for (let j = 0; j < b[0].length; j++) {
      multiple[i][j] = 0;
      for (let k = 0; k < b.length; k++) {
        multiple[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return multiple;
}

const a = [
  [1, 5, 7],
  [2, 3, 8],
];
const b = [
  [4, 9],
  [7, 2],
  [1, 0],
];
console.log(multipleMatrix(a, b));
