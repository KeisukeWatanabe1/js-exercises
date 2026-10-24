const parent = {
  1: "parent[1]",
  A: 'parent["A"]',
};
Object.defineProperty(parent, "C", {
  value: 'parent["C"]',
  enumerable: true,
});

const child = Object.create(parent);

child[1] = "child[1]";
child[2] = "child[2]";
child["A"] = 'child["A"]';
child["B"] = 'child["B"]';
Object.defineProperty(child, "C", {
  value: 'child["C"]',
  enumerable: false,
});

for (const p in child) {
  console.log(child[p]);
}

// 結果
// child[1]
// child[2]
// child["A"]
// child["B"]
