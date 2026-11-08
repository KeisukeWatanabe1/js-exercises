export function sumMatrix(a, b) {
  if (a.length !== b.length) {
    throw new Error("行列のサイズが違います");
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) {
      throw new Error("行列のサイズが違います");
    }
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

export function multiplyMatrix(a, b) {
  if (!possibleMultiply(a, b)) {
    throw new Error("行列のサイズが違います");
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

function possibleMultiply(a, b) {
  // 空配列は掛け算できない
  if (a.length === 0 || b.length === 0) {
    return false;
  }
  const rowA = a.length;
  const colA = a[0].length;
  const rowB = b.length;
  const colB = b[0].length;

  // 行列に欠けが無いかを確認する
  for (let i = 0; i < rowA; i++) {
    if (a[i].length !== colA) {
      return false;
    }
  }

  for (let i = 0; i < rowB; i++) {
    if (b[i].length !== colB) {
      return false;
    }
  }

  if (colA === rowB) {
    return true;
  } else {
    return false;
  }
}
