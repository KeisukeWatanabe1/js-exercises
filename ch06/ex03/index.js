{
  let o = {};
  let p = Object.create(o);
  let q = Object.create(p);

  // o を継承して、p を作り
  // その p を継承して q を作っているため、
  // o は p, q の prototype
  console.log(o.isPrototypeOf(p)); // true
  console.log(o.isPrototypeOf(q)); // true

  // q は p を継承して作っているため、
  // p は q の prototype
  console.log(p.isPrototypeOf(q)); // true

  // 逆にすると、false になる
  console.log(p.isPrototypeOf(o)); // false
  console.log(q.isPrototypeOf(o)); // false
  console.log(q.isPrototypeOf(p)); // false
}

{
  console.log(Object.prototype.isPrototypeOf(Array.prototype)); // true
  console.log(Object.prototype.isPrototypeOf(Date.prototype)); // true
  console.log(Object.prototype.isPrototypeOf(Map.prototype)); // true
  console.log(Object.prototype.isPrototypeOf({})); // true
  console.log(Array.prototype.isPrototypeOf([])); // true
  console.log(Date.prototype.isPrototypeOf(new Date())); // true
  console.log(Map.prototype.isPrototypeOf(new Map())); // true

  // Array, Date, Map 同士はお互いを継承していない
  console.log(Array.prototype.isPrototypeOf(Date.prototype)); // false
  console.log(Array.prototype.isPrototypeOf(Map.prototype)); // false
  console.log(Date.prototype.isPrototypeOf(Array.prototype)); // false
  console.log(Date.prototype.isPrototypeOf(Map.prototype)); // false
  console.log(Map.prototype.isPrototypeOf(Array.prototype)); // false
  console.log(Map.prototype.isPrototypeOf(Date.prototype)); // false
}
