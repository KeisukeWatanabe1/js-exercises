function add(a, b) {
  const result = a + b;
  return result;
}

let total = 0;
for (let i = 1; i <= 3; i++) {
  debugger;
  total = add(total, i);
}
console.log(total);
