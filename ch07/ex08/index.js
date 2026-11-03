export function reverse(str) {
  // 文字列を分割する segmenter を用意する。grapheme は書記素の境界で分割する
  // 書記素は見た目上の一文字
  const segmenter = new Intl.Segmenter("ja-JP", { granularity: "grapheme" });

  // 文字列を書記素に分割する
  const segments = segmenter.segment(str);

  // 書記素を配列に入れる
  const arr = [];
  for (const s of segments) {
    arr.push(s.segment);
  }

  // 書記素が入った配列を反転して、区切り文字は空で、文字列に結合する
  return arr.reverse().join("");
}
