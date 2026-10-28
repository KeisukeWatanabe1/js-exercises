export function assign(target, ...sources) {
  if (target === undefined || target === null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  target = Object(target);
  for (let s of sources) {
    if (s === undefined || s === null) {
      continue;
    }
    s = Object(s);
    for (const key of Reflect.ownKeys(s)) {
      if (!s.propertyIsEnumerable(key)) {
        continue;
      }
      target[key] = s[key];
    }
  }
  return target;
}
