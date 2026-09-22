export function bitCount(num) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    // 末尾のビットが1ならcountをインクリメントする
    if ((num & 1) === 1) {
      count++;
    }
    // 判定済みの末尾のビットを右シフトして除去する
    num = num >>> 1;
  }
  return count;
}
