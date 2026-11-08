export function newHashTable(capacity) {
  return {
    size: 0,
    entries: new Array(capacity),
    get(key) {
      const index = hash(key) % capacity;
      let entry = this.entries[index];
      // entry が存在する間、key が一致するノードを探し続ける
      while (entry) {
        if (entry.key === key) {
          return entry.value;
        }
        entry = entry.next;
      }
      return undefined;
    },
    put(key, value) {
      // key, valueのマッピングを追加する
      // keyが存在する場合はvalueを上書きする
      const index = hash(key) % capacity;
      // ハッシュから計算したインデックスにまだ、データが無ければ格納する
      if (!this.entries[index]) {
        this.entries[index] = { key: key, value: value, next: undefined };
        this.size++;
        return;
      } else {
        // インデックスが衝突した時は
        // リンクリスト形式で保存する
        let currentEntry = this.entries[index];
        let prevEntry;
        while (currentEntry) {
          // 与えられたkeyのデータが既にあれば上書きする
          if (currentEntry.key === key) {
            currentEntry.value = value;
            return;
          }
          prevEntry = currentEntry;
          currentEntry = currentEntry.next;
        }
        // 与えられたkeyのデータが無ければ、
        // リンクリストの末尾に保存する
        prevEntry.next = {
          key: key,
          value: value,
          next: undefined,
        };
        this.size++;
      }
    },
    remove(key) {
      // keyのマッピングを削除する
      const index = hash(key) % capacity;
      if (!this.entries[index]) {
        return;
      } else {
        let entry = this.entries[index];
        let prevEntry;
        // 削除対象がリンクリスト中にあるかを確認する
        while (entry) {
          if (entry.key === key) {
            // 削除対象がリンクリストの先頭の場合は、その先頭を消す
            if (!prevEntry) {
              if (entry.next) {
                entry.key = entry.next.key;
                entry.value = entry.next.value;
                entry.next = entry.next.next;
                this.size--;
                return;
              }
              this.entries[index] = undefined;
              this.size--;
              return;
            }
            // 削除対象がリンクリストの末尾にある場合は、
            // 1つ前のnextを削除する
            if (entry.next === undefined) {
              prevEntry.next = undefined;
              this.size--;
              return;
            }

            // 削除対象がリンクリストの途中にある場合は、
            // 削除対象の一つ後で上書きする
            entry.key = entry.next.key;
            entry.value = entry.next.value;
            entry.next = entry.next.next;
            this.size--;
            return;
          }
          prevEntry = entry;
          entry = entry.next;
        }
      }
    },
  };
}

// ハッシュテーブルの動作を確認しやすくするために
// あえて文字列の長さをハッシュ値にしている
export function hash(str) {
  return str.length;
}
