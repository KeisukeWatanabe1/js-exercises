export function sum(arr = []) {
  return arr.reduce((sum, element) => sum + element, 0);
}

export function join(arr, separator = ",") {
  if (arr.length === 0) {
    return "";
  }
  const stringArr = arr.map((x) => [x].toString());
  console.log(stringArr);
  return stringArr.reduce((joined, x) => joined + separator + x);
}

export function reverse(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  const len = arr.length;
  const reversed = new Array(len);
  arr.forEach((x, i) => {
    reversed[len - (i + 1)] = x;
  });
  return reversed;
}

export function every(arr, condition) {
  if (arr.length === 0) {
    return true;
  }
  return arr.reduce(
    (judge, elem, index, arr) => judge * condition(elem, index, arr),
    true,
  );
}

export function some(arr, condition) {
  if (arr.length === 0) {
    return false;
  }
  return (
    arr.reduce(
      (judge, elem, index, arr) => judge + condition(elem, index, arr),
      0,
    ) > 0
  );
}
