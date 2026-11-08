最初、y のセッターを以下のように実装していたが、theta を計算する時の this.x は 新しい、this.r から計算されるため正しくないという指摘を AI から受けたため、更新前の x を保持するようにした

```
  set y(newY) {
    if (isNaN(newY)) {
      throw Error("数値を設定してください");
    }
    this.r = Math.hypot(this.x, newY);
    this.theta = Math.atan2(newY, this.x);
  },
```

オブジェクトを返す関数を用意して、テスト毎にオブジェクトを作ることで、テスト間でオブジェクトを共有しないようにするアドバイスをもらった

x (y) を変えても、y (x) が変わらないことを確かめると良いとアドバイスをもらった

toEqualだと浮動小数点の誤差でテストが失敗するため、toBeCloseToに変えることを提案された
