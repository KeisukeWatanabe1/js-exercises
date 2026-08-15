/*
 * `Point` クラスに対し、引数として渡された
 * `Point` クラスのインスタンスの座標を
 * 自分の座標に加算するメソッド `add` を定義しなさい。
 */
export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point) {
    this.x += point.x;
    this.y += point.y;
  }
}
