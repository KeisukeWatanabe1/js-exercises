export function toEscapeSequenceUsingIfElse(str) {
  let transformedStr = "";
  for (let s of str) {
    if (s === "\0") {
      transformedStr += "\\0";
    } else if (s === "\b") {
      transformedStr += "\\b";
    } else if (s === "\t") {
      transformedStr += "\\t";
    } else if (s === "\n") {
      transformedStr += "\\n";
    } else if (s === "\v") {
      transformedStr += "\\v";
    } else if (s === "\f") {
      transformedStr += "\\f";
    } else if (s === "\r") {
      transformedStr += "\\r";
    } else if (s === '"') {
      transformedStr += '\\"';
    } else if (s === "'") {
      transformedStr += "\\'";
    } else if (s === "\\") {
      transformedStr += "\\\\";
    } else {
      transformedStr += s;
    }
  }
  return transformedStr;
}

export function toEscapeSequenceUsingSwitch(str) {
  let transformedStr = "";
  for (let s of str) {
    switch (s) {
      case "\0":
        transformedStr += "\\0";
        break;
      case "\b":
        transformedStr += "\\b";
        break;
      case "\t":
        transformedStr += "\\t";
        break;
      case "\n":
        transformedStr += "\\n";
        break;
      case "\v":
        transformedStr += "\\v";
        break;
      case "\f":
        transformedStr += "\\f";
        break;
      case "\r":
        transformedStr += "\\r";
        break;
      case '"':
        transformedStr += '\\"';
        break;
      case "'":
        transformedStr += "\\'";
        break;
      case "\\":
        transformedStr += "\\\\";
        break;
      default:
        transformedStr += s;
    }
  }
  return transformedStr;
}
