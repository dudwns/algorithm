const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const prefixSum = [0];
let sum = 0;
const result = [];

for (const element of arr) {
  sum += element;
  prefixSum.push(sum);
}

for (let i = 2; i < 2 + m; i++) {
  const [left, right] = input[i].split(" ").map(Number);
  result.push(prefixSum[right] - prefixSum[left - 1]);
}
console.log(result.join('\n'));
