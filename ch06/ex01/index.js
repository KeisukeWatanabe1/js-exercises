export function newHashTable(capacity) {
  return {
    size: 0,
    entries: new Array(capacity),
    get(key) {
      const index = hash(key) % capacity;
      return this.entries[index];
    },
    put(key, value) {
      // key, valueのマッピングを追加する
      // keyが存在する場合はvalueを上書きする
      const index = hash(key) % capacity;
      if (!this.entries[index]) {
        this.entries[index] = { key: key, value: value, next: undefined };
        this.size++;
      } else {
        if (this.entries[index].key === key) {
          this.entries[index] = { key: key, value: value, next: undefined };
        } else {
          this.entries[index].next = {
            key: key,
            value: value,
            next: undefined,
          };
        }
      }
    },
    remove(key) {
      // keyのマッピングを削除する
      const index = hash(key) % capacity;
      delete this.entries[index];
      this.size--;
    },
  };
}

export function hash(str) {
  return str.length;
}
