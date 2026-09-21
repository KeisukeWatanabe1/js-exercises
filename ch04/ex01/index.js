export const add = function (a, b) {
  return {
    re: a.re + b.re,
    im: a.im + b.im,
  };
};

export const sub = function (a, b) {
  return {
    re: a.re - b.re,
    im: a.im - b.im,
  };
};

export const mul = function (a, b) {
  return {
    re: a.re * b.re - a.im * b.im,
    im: a.re * b.im + a.im * b.re,
  };
};

export const div = function (a, b) {
  const norm2 = b.re ** 2 + b.im ** 2; // bの大きさの二乗
  if (norm2 === 0) {
    throw new Error("第二引数に0は指定できません");
  }
  return {
    re: (a.re * b.re + a.im * b.im) / norm2,
    im: (a.im * b.re - a.re * b.im) / norm2,
  };
};
