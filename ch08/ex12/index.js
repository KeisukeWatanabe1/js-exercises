export function f(text) {
  const args = ["$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9", "$10"];
  if (text[0] == "{") {
    return new Function(...args, text);
  }
  return new Function(...args, `return ${text};`);
}
