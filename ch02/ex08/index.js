import * as acron from "acorn";
import * as fs from "node:fs";
import * as path from "node:path";

const code1 = `let a
a
=
3
console.log(a)`;

const code2 = `let a; a = 3; console.log(a);`;

const ast1 = acron.parse(code1, { ecmaVersion: "latest" });
const ast2 = acron.parse(code2, { ecmaVersion: "latest" });

fs.writeFileSync(
  path.join(import.meta.dirname, "ast1.json"),
  JSON.stringify(ast1, null, 2),
);
fs.writeFileSync(
  path.join(import.meta.dirname, "ast2.json"),
  JSON.stringify(ast2, null, 2),
);
