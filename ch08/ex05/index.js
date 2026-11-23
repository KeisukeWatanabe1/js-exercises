export function sequenceToObject(...args) {
  if (args.length % 2 !== 0) {
    throw new Error("引数は偶数個で与えてください");
  }
  const o = {};
  for (let i = 0; i < args.length; i += 2) {
    if (typeof args[i] !== "string") {
      throw new Error("奇数番の引数は string で与えてください");
    }
    o[args[i]] = args[i + 1];
  }
  return o;
}
