export function LFtoCRLF(str: string) {
    // 直前が"\r"の"\n"は既にCRLFであるため変換対象から除外する
    return str.replace(/(?<!\r)\n/g, "\r\n");
}

export function CRLFtoLF(str: string) {
    return str.replace(/\r\n/g, "\n");
}