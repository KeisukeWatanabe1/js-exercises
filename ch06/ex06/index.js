export function getPropertyOf(o) {
  let p = Reflect.ownKeys(o);
  o = Object.getPrototypeOf(o);

  // 与えられたオブジェクトのプロトタイプがある限り
  // プロパティを取得し続ける
  while (o) {
    const propertyOfPrototype = Object.keys(o);
    p = mergeArray(p, propertyOfPrototype);
    o = Object.getPrototypeOf(o);
  }

  return p;
}

function mergeArray(arr1, arr2) {
  for (let element of arr2) {
    if (element in arr1) {
      continue;
    }
    arr1.push(element);
  }
  return arr1;
}
