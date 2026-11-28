最初、エラーメッセージを以下のように全文で比べていたが、エラーメッセージは JavaScript エンジンが決めるため、壊れやすいという指摘を受けた

```
expect(catchingFunc("{Invalid Json}")).toEqual({
    error:
    "SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)",
});
```

テストで確かめたいのは、例外が errorHandler に渡されて、その戻り値が返ることであるため、エラーメッセージを一字一句同じであることを確かめる必要はなく、expect.stringContaining を使って、SyntaxError を含むことを確かめると良いと教えてもらった

https://vitest.dev/api/expect.html#expect-stringcontaining
