import { vi, test, expect } from "vitest";

const mock = vi.fn();

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

// ここに１行のコードを書く
obj.toJSON = () => ({ x: obj.x, y: obj.y, sum: obj.sum() });

test("JSON.stringify", () => {
  obj.x = 1;
  obj.y = 2;
  expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
  expect(mock).toHaveBeenCalled();
});
