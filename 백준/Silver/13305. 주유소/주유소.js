const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let dist = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);
let min = cost[0];
for(let i = 1; i < n; i++){
    if(cost[i] > min) {
        cost[i] = min;
    } else {
        min = cost[i];
    }
}
let answer = 0;
for(let i = 0; i < n - 1; i++){
    answer += dist[i] * cost[i];
}
console.log(answer);