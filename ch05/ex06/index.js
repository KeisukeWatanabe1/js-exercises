/**
 * 問題5.6
 * try-catch-finally の実行順序が確認できるコードを書きなさい。
 */
{
  console.log("try節でエラーが発生する場合");
  try {
    console.log("  try節");
    throw new Error();
    console.log("ここは実行されない");
  } catch (e) {
    console.log("  catch節");
  } finally {
    console.log("  finally節");
  }
}

{
  console.log("try節でエラーが発生しない場合");
  try {
    console.log("  try節");
  } catch (e) {
    console.log("ここは実行されない");
  } finally {
    console.log("  finally節");
  }
}
