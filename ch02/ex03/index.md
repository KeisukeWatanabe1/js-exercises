# 問題

濁音や半濁音を含むファイル名のファイルを作ったとき、Windows と macOS では NFC と NFD どちらの形式で保存されるかを調べて記述しなさい。

# 回答

WindowsではNFC形式で、macOSではNFD形式で保存される。

## WindowsでNFC形式で保存される理由：

- Windowsの標準ファイルシステムであるNTFS (New Technology File System) はファイル名として入力されたUnicode文字列に対してUnicode正規化を行わない
- キーボードの入力をひらがな、カタカナ、漢字の日本語に変換するIMEは濁音を濁点と文字を一文字、つまりNFC形式で表す

つまり、Windowsではファイル名として入力される文字列がNFC形式であり、そのまま保存されるため、NFC形式で保存される。

## macOSでNFD形式で保存される理由：

- macOSの標準ファイルシステムであるAPFS (Apple File System) はファイル名として入力されたUnicode文字列に対してUnicode正規化を行わない。
- macOSのファイル管理ソフトであるFinderはファイルの保存時やリネーム時にファイル名をNFD正規化する

つまり、Finderでファイルを保存した時はFinderによってファイル名がNFD形式となり、そのまま保存されるのでNFD形式で保存される。

## WindowsとmacOSで形式(NFC/NFD)が異なることによる問題

例えば、macOSで作成されたファイル名に濁音を含むファイルがGitリポジトリにプッシュされていたとする。このときファイル名はNFD形式となっている。それをWindows PCにクローンしたあとに、ファイル名で検索しても、検索文字列はNFC形式であるため、ヒットしない問題が発生し得る。

なお、上記の問題を防ぐためには、macOSのGitの設定で、core.precomposeunicodeをtrueにする。これにより、Gitがファイル名をNFC形式で扱うようになる。