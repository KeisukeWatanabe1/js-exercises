export function eq(a, b) {
  // TODO: ここを実装しなさい

  if (typeof a === typeof b) {
    if (a === b) return true;
    else return false;
  } else {
    // 一方のオペランドが null または undefined の場合、
    // もう一方も null または undefined であれば、ture を返す。そうでなければ false を返す
    if (a === null || a === undefined || b === null || b === undefined) {
      if ((a === null && b === undefined) || (a === undefined && b === null)) {
        return true;
      } else {
        return false;
      }
    }
    //　一方がオブジェクトで、もう一方が基本型値の場合は、優先度なしアルゴリズムでオブジェクトを基本型に変換する
    if (
      (typeof a === "object" && typeof b !== "object") ||
      (typeof a !== "object" && typeof b === "object")
    ) {
    }
  }
  return false;
}

export function lte(a, b) {
  // TODO: ここを実装しなさい
  return false;
}
