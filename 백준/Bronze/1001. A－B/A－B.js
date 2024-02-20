const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a - b);