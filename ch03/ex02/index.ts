console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);

console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
/*
 * 上記がtrueになる理由：
 * MAX_SAFE_INTEGERを超えると、固定の仮数部（52bit）に収まりきらなくなる
 * よって、2刻みで増えることになるため、上記の右辺と左辺は同じ値となる
 */