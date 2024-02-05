const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let answer = [];

for (let i = 0; i < input.length; i++) {
  let stack = [];
  if (input[i].length === 1 && input[i] === ".") break;
  for (let s of input[i]) {
    if (s === "(" || s === "[" || s === ")" || s === "]") stack.push(s);
    if (
      (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") ||
      (stack[stack.length - 1] === "]" && stack[stack.length - 2] === "[")
    ) {
      stack.pop();
      stack.pop();
    }
  }
  answer.push(stack.length === 0 ? "yes" : "no");
}

console.log(answer.join("\n"));