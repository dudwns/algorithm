const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let dist = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

for(let i = 0; i < n; i++) {
    let min = cost[0];
    min = Math.min(min, cost[i]);
    cost[i] = min;
}

let answer = 0;
for(let i = 0; i < n - 1; i++) {
    answer += cost[i] * dist[i];
}
console.log(answer);