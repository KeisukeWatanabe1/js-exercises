class DefaultMap extends Map {
  defaultValue;

  constructor(defaultValue) {
    super(); // 親クラスのコンストラクタを呼び出す。
    this.defaultValue = defaultValue; // デフォルト値を記録する。
  }

  get(key) {
    if (this.has(key)) {
      // マップ中にキーが存在すれば、
      return super.get(key); // 親クラス中の値を返す。
    } else {
      return this.defaultValue; // 存在しなければ、デフォルト値を返す。
    }
  }
}

// このクラスは、単語の出現頻度ヒストグラムを計算し、表示する。
class WordHistogram {
  constructor() {
    this.wordCounts = new DefaultMap(0);
    this.totalWords = 0;
  }

  // この関数は、text中の単語でヒストグラムを更新する。
  add(text) {
    
    const matches = text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
    const words = [...matches].map((r) => r[0]);

    // テキスト中の単語をループする。
    for (let word of words) {
      let count = this.wordCounts.get(word); // 直前の値を取得する。
      this.wordCounts.set(word, count + 1); // 1増やす。
      this.totalWords++;
    }
  }

  // ヒストグラムを文字列に変換して、ASCIIグラフィックとして表示する。
  toString() {
    // マップを、[キー、文字数]配列に変換する
    let entries = [...this.wordCounts];

    // 文字数順にソートする。文字数が同じ場合は、アルファベット順でソートする。
    entries.sort((a, b) => {
      // ソート順を定義する関数。
      if (a[1] === b[1]) {
        // 文字数が同じ場合は、
        return a[0] < b[0] ? -1 : 1; // アルファベット順でソートする
      } else {
        // 文字数が異なる場合は、
        return b[1] - a[1];
      }
    });

    // 文字数をパーセントに変換する。
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalWords) * 100;
    }

    // 出現頻度 0.5% 以上を取得
    entries = entries.filter((entry) => entry[1] >= 0.5);
    // padStart で表示幅を揃える / # の数を n ではなく 10 * n に変更
    const lines = entries.map(
    ([l, n]) =>
        `${l.padStart(10)}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`,
    );

    // 各行を改行文字で区切って結合し、結合した文字列を返す。
    return lines.join("\n");
  }
}

// このasync関数（Promiseを返す関数）は、Histogramオブジェクトを生成する。
// 標準入力からテキストを非同期に読み出し、読みだしたテキストをヒストグラムに
// 追加する。テキストを最後まで読みだしたら、ヒストグラムを返す。
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // バイト列ではなく、Unicode文字列を読む。
  let histogram = new WordHistogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// この最後の一行がこのプログラムのメイン部分。
// 標準入力からHistogramオブジェクトを生成、ヒストグラムを表示する。
histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});
