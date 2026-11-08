"use strict";

{
  const object = {};
  Object.defineProperty(object, "w1e1c1", {
    value: 0,
    writable: true, // 書き込み可能
    enumerable: true, // 列挙可能
    configurable: true, // 再定義（削除、属性の変更）が可能
  });

  Object.defineProperty(object, "w0e1c1", {
    value: 0,
    writable: false,
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(object, "w1e0c1", {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  Object.defineProperty(object, "w1e1c0", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: false,
  });

  console.log("=====書き込みの実験=====");
  console.log(object["w1e1c1"]); // 0
  object["w1e1c1"] = 1;
  console.log(object["w1e1c1"]); // 1

  console.log(object["w0e1c1"]); // 0
  try {
    object["w0e1c1"] = 1;
  } catch (e) {
    // Cannot assign to read only property 'w0e1c1' of object '#<Object>'
    console.log(e.message);
  }
  console.log(object["w0e1c1"]); // 0

  console.log("=====削除の実験=====");
  console.log("w1e1c1" in object); // true
  delete object["w1e1c1"];
  console.log("w1e1c1" in object); // false
  // "w1e1c1" を消しているので再定義
  Object.defineProperty(object, "w1e1c1", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  console.log("w1e1c0" in object); // true
  try {
    delete object["w1e1c0"];
  } catch (e) {
    // Cannot delete property 'w1e1c0' of #<Object>
    console.log(e.message);
  }
  console.log("w1e1c0" in object); // true

  console.log("=====列挙可の実験=====");
  // hasOwnProperty では属性に関わらず、自身のプロパティとして存在すれば true になる
  console.log(object.hasOwnProperty("w1e1c1")); // true
  console.log(object.hasOwnProperty("w1e0c1")); // true
  console.log(object.hasOwnProperty("w0e1c1")); // true
  console.log(object.hasOwnProperty("w1e1c0")); // true

  // propertyIsEnumerable では列挙可な自身のプロパティが true となる
  console.log(object.propertyIsEnumerable("w1e1c1")); // true
  console.log(object.propertyIsEnumerable("w1e0c1")); // false
  console.log(object.propertyIsEnumerable("w0e1c1")); // true
  console.log(object.propertyIsEnumerable("w1e1c0")); // true
}
