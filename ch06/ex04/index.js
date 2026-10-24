"use strict";

{
  const object = {};
  Object.defineProperty(object, "w1e1c1", {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: true,
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
  console.log(object.hasOwnProperty("w1e1c1")); // true
  console.log(object.hasOwnProperty("w1e0c1")); // true
  console.log(object.propertyIsEnumerable("w1e1c1")); /// true
  console.log(object.propertyIsEnumerable("w1e0c1")); // false
}
