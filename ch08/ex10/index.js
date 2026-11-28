export function addMyCall(func) {
  func["myCall"] = function (o, ...args) {
    const bindedFunc = func.bind(o);
    return bindedFunc(...args);
  };
}
