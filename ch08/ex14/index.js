export function any(...funcs) {
  return function (arg) {
    for (let i = 0; i < funcs.length; i++) {
      if (funcs[i](arg) === true) {
        return true;
      }
    }
    return false;
  };
}

export function catching(func, errorHandler) {
  return function (arg) {
    try {
      const result = func(arg);
      return result;
    } catch (err) {
      return errorHandler(err);
    }
  };
}
