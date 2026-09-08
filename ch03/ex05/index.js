export function LFtoCRLF(str) {
  // 直前が"\r"の"\n"は既にCRLFであるため変換対象から除外する
  return str.replace(/(?<!\r)\n/g, "\r\n");
}

export function CRLFtoLF(str) {
  return str.replace(/\r\n/g, "\n");
}
