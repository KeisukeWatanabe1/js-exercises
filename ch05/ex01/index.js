/**
 * 文ブロックを使って同じ関数内に
 * 同じ変数名の const を複数宣言する関数を書く
 */

function func() {
  /**
   * const はブロックスコープなので、
   * 別々の文ブロックに同じ名前の変数を宣言できる
   */
  {
    const str = "1つ目の文ブロック";
    console.log(str);
  }
  {
    const str = "2つ目の文ブロック";
    console.log(str);
  }
}

func();
