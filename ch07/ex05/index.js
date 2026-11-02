export function push(arr, ...element) {
  const result = [...arr];
  result.push(...element);
  return result;
}

export function pop(arr) {
  return arr.slice(0, -1);
}

export function shift(arr) {
  return arr.slice(1);
}

export function unshift(arr, ...element) {
  return [...element, ...arr];
}

export function sort(arr, compareFn) {
  const result = [...arr];
  return result.sort(compareFn);
}
