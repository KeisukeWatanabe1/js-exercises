function resize(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}

/**
 * if を利用せず && や || を用いて
 * maxWidth, maxHeight を設定する関数 resize1
 *
 * &&
 * 左辺がtrueに変換される場合、右辺を返す
 * 左辺がfalseに変換される場合、左辺を返す
 *
 * ||
 * 左辺がtrueに変換される場合、左辺を返す
 * 左辺がfalseに変換される場合、右辺を返す
 */

function resize1(params) {
  // paramsが与えられていて、params.maxWidth/maxHeightが存在する場合、&&の右辺が返されるようにする
  // paramsが与えられていない場合は、定数を返す
  const maxWidth = (params && params.maxWidth) || 600;
  const maxHeight = (params && params.maxHeight) || 480;
  console.log({ maxWidth, maxHeight });
}

/**
 * if を利用せず ?. や ?? を用いて
 * maxWidth, maxHeight を設定する関数 resize2
 *
 * ?.
 * a?.b は、a が null か undefined なら undefined となる
 * a が何らか値を持つ場合 a.b として評価される（もしも a が b を持たない場合はundefinedとなる）
 *
 * ??
 * 左辺の値がnullかundefinedなら右辺を返す
 * 左辺が何らかの値を持つならば左辺の値を返す
 */

function resize2(params) {
  // paramsが与えられていて、params.maxWidth/maxHeightが存在する場合、それを返すようにする
  // paramsが与えられていない場合は、定数を返す
  const maxWidth = params?.maxWidth ?? 600;
  const maxHeight = params?.maxHeight ?? 480;
  console.log({ maxWidth, maxHeight });
}
