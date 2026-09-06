const obj1 = {x: 1};
obj1.y = 2;
console.log(obj1);
const obj2 = {x: 1, y: 2};
// オブジェクトは参照である
// 同じオブジェクトを参照しているわけではないので、falseになる
console.log(obj1 === obj2);

export function equals(o1, o2) {
    // 厳密等価なら true
    if (o1 === o2)
        return true;

    // null または object以外なら false
    if (o1 === null || typeof o1 !== "object" || o2 === null || typeof o2 !== "object")
        return false;

    // プロパティの数・名前が一致しているか確認する
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    let hasSameProperties;
    if (keys1.length !== keys2.length) {
        return false;
    } else {
        hasSameProperties = keys1.every(key => keys2.includes(key));
    }

    // プロパティの数・名前が一致すれば、
    // プロパティの各値を equals で再帰的に比較する
    if (!hasSameProperties) {
        return false;
    } else {
        return keys1.every(key => equals(o1[key], o2[key]));
    }
}

