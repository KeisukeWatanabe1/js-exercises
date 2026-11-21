// 自然数 n と英数文字 c を引数にとり、
// 文字 c を n 回コンソール出力してから文字 c を n 個含む配列を返す
export const arrow1 = (n, c) => {
  // 引数が 2 個以上のため () が必要
  // 関数本体が複数行のため、{} が必要
  const arr = [];
  for (let i = 0; i < n; i++) {
    console.log(c);
    arr.push(c);
  }
  return arr;
};

// 数値 x を引数にとり、x の二乗の数値を返す
// 引数が 1 個のため、引数を囲む () は不要
// 関数本体が return 文のみの場合は {} は不要

// prettier-ignore
export const arrow2 = x => x * x;

// 引数なしで、現在時刻のプロパティ now を含むオブジェクトを返す
export const arrow3 = () => {
  const obj = { now: Date.now() };
  return obj;
};
