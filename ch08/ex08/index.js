export function counterGroup() {
  let numberOfCounters = 0; // counter の個数
  let sum = 0; // 全 counter の合計
  let sumOfSquares = 0; // 各 counter の二乗の合計
  return {
    newCounter: function () {
      let n = 0;
      numberOfCounters++;
      return {
        count: function () {
          // 全 counter の合計と各 counter の二乗の合計を更新する
          sum++;
          sumOfSquares -= n ** 2;
          sumOfSquares += (n + 1) ** 2;
          return n++;
        },
        reset: function () {
          // 全 counter の合計と各 counter の二乗の合計を更新する
          sum -= n;
          sumOfSquares -= n ** 2;
          n = 0;
        },
      };
    },

    total: function () {
      return sum;
    },

    average: function () {
      if (numberOfCounters === 0) {
        throw new TypeError("counter が 1 個もないため平均を計算できません");
      }
      return sum / numberOfCounters;
    },

    variance: function () {
      if (numberOfCounters < 2) {
        throw new TypeError("counter が 2 個未満のため分散を計算できません");
      }
      // 分散を E(X^2) - E(X)^2 から求める
      return sumOfSquares / numberOfCounters - this.average() ** 2;
    },
  };
}
