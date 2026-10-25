index.js に2つの配列を重複無しでつなげる、mergeArray関数を実装した。この関数内で、ある要素が配列に既にあるかを確認するのに、最初は`element in array` としていたが、in 演算子はプロパティ名（配列の場合は、インデックス）が存在するかを見ているため、正しくなかった。AI と話して、配列にある要素が含まれるかは、`includes()`を使うとわかった。

テストで、継承した列挙不可 / Symbol のプロパティを取得していないことの確認を、`expect(actualProperty).not.toConatain("notEnumerable1")` のように明示的に書くべきとアドバイスをもらった。
