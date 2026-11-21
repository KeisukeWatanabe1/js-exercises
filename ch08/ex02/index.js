export function powRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent % 2 === 0) {
    return powRecursive(base, exponent / 2) * powRecursive(base, exponent / 2);
  } else {
    return base * powRecursive(base, exponent - 1);
  }
}

export function powLoop(base, exponent) {
  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 === 0) {
      base *= base;
      exponent /= 2;
    } else {
      result = base * result;
      exponent--;
    }
  }
  return result;
}
