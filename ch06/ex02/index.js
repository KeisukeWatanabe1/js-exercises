const parent = { x: 1, y: 2 };

const child = Object.create(parent);

console.log(Object.getPrototypeOf(child)); // { x: 1, y: 2 }
console.log(Object.getPrototypeOf(child) === parent); // true
