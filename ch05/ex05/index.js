export function copyEvenNumberPropertyFromObject(originalObj) {
  const obj = {};
  for (let p in originalObj) {
    if (originalObj[p] % 2 === 0) {
      obj[p] = originalObj[p];
    }
  }
  return obj;
}
