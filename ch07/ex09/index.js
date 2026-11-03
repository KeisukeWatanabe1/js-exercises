console.log("𠮷野家"[0]);
console.log("👨‍👨‍👧‍👧"[0]);

// 書記素は見た目上の一文字
const segmenter = new Intl.Segmenter("ja-JP", { granularity: "grapheme" });

// 文字列を書記素に分割する
const segments = segmenter.segment("👨‍👨‍👧‍👧");

// 書記素を配列に入れる
const arr = [];
for (const s of segments) {
  arr.push(s.segment);
}

console.log(arr);
