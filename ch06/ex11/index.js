export function createPoint() {
  return {
    r: 0,
    theta: 0,

    get x() {
      return this.r * Math.cos(this.theta);
    },
    set x(newx) {
      if (isNaN(newx)) {
        throw Error("数値を設定してください");
      }
      const oldy = this.y;
      this.r = Math.hypot(newx, oldy);
      this.theta = Math.atan2(oldy, newx);
    },

    get y() {
      return this.r * Math.sin(this.theta);
    },
    set y(newy) {
      if (isNaN(newy)) {
        throw Error("数値を設定してください");
      }
      const oldx = this.x;
      this.r = Math.hypot(oldx, newy);
      this.theta = Math.atan2(newy, oldx);
    },
  };
}
