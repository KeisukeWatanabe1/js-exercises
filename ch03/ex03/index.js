export function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    let diff = Math.abs(a - b);
    return diff < 10 ** -10 ? true : false;
  }
}
