export function restrict(target, template) {
  // 空のオブジェクトはそのまま返す
  // 削除するプロパティが無いため
  if (Object.keys(target).length === 0) {
    return target;
  }

  // target の独自プロパティを1つずつ
  // template の独自プロパティに存在するか確認する
  // 存在しなければ、target の独自プロパティを削除する
  for (let key of Object.getOwnPropertyNames(target)) {
    const ownPropertyOfTemplate = Object.getOwnPropertyNames(template);
    let exist = false;
    for (const p of ownPropertyOfTemplate) {
      if (key === p) {
        exist = true;
      }
    }
    if (exist) {
      continue;
    }
    delete target[key];
  }
  return target;
}

export function substract(target, ...sources) {
  // sources が1つで、空のオブジェクトの場合、
  // 削除対象が無いため、target をそのまま返す
  if (sources.length === 1 && Object.keys(sources[0]).length === 0) {
    return target;
  }

  // 削除対象を一つにまとめる
  const assignedSources = Object.assign(...sources);

  // target の独自プロパティを1つずつ
  // sources の独自プロパティに存在するか確認する
  // 存在すれば、target の独自プロパティを削除する
  for (let key of Object.getOwnPropertyNames(target)) {
    const ownPropertyOfSources = Object.getOwnPropertyNames(assignedSources);
    let exist = false;
    for (const p of ownPropertyOfSources) {
      if (key === p) {
        exist = true;
      }
    }
    if (!exist) {
      continue;
    }
    delete target[key];
  }
  return target;
}
