/*
 * `Point` クラスに対し、引数として渡された
 * `Point` クラスのインスタンスの座標を
 * 自分の座標に加算するメソッド `add` を定義しなさい。
 */
export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(point) {
    this.x += point.x;
    this.y += point.y;
  }
}
