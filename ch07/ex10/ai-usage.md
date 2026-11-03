最初は、DynamicSizeArray クラスのメソッド、get, set, length, push それぞれに対してテストを書くべきかと考えたが、以下のようなAIに守りたい振舞（仕様）ごとに書くのが良いと教えてくれた。

- push した値を順番にgetで取出せ、lengthが増える
- set で既存要素を上書きでき、lengthは変わらない
- 範囲外のgetはエラーになる
- 範囲外のsetはエラーになる
- 新しい配列のlength()は0
