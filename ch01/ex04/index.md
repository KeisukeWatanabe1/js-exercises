# 問題

console.log()の挙動を知るために、下記の手順に沿って実験しなさい。

以下の内容を index.html に保存し、Web ブラウザで開きなさい。 開発者ツール (Chrome の場合 F12) のコンソール上に何が表示されるか予想し、結果が一致するか確認しなさい。 開発者ツールを開いた状態のタブで HTML を開く場合と、HTML を開いた状態のタブで開発者ツールを開く場合とで、結果を比較しなさい。 また、常に期待した結果を得るためにはどのようにコードを修正すべきか答えなさい。

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      let life = { answer: 42 };
      console.log(life);
      life.answer = 0;
      console.log(life);
    </script>
  </body>
</html>
```

# 回答

## 予想

以下の結果になると予想する。

```
answer: 42
answer: 0
```

## 結果と考察

index.html をブラウザで開いてから開発者ツールを開いた時のコンソールの表示を以下に示す。Objectを展開すると、プロパティ"answer: 0"が表示された。

これはlifeが参照するもの、つまり"Object"を表示するためである。Objectの中身を展開すると、そのときのlifeが参照するObjectのプロパティが表示されるため、0となる。

```
▼ Object
  answer: 0
▼ Object
  answer: 0
```

開発者ツールを開いた状態で index.html をブラウザで開いた時のコンソールの表示を以下に示す。開発者ツールを開いた状態では、開発者ツールの実装として、その時点でのプロパティが表示される。よって、index.html の5行目時点と7行目時点の life のプロパティが表示される。

```
▶ {answer: 42}
▶ {answer: 0}
```

## コードの修正

console.log()の部分を以下のように修正する。ObjectをJSON文字列に変換するJSON.sringify()メソッドを使って、life をJSON文字列に変換したものを、コンソールに出力することで、その時点での life のプロパティを表示するようにする。

```
console.log(JSON.stringify(life));
```
