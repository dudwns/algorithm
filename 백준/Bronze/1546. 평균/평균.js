const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const max = Math.max(...scores);
const updateScores = [];
for(let i = 0; i < n; i++){
    updateScores.push(scores[i] / max * 100);
}

console.log(updateScores.reduce((a, b) => a + b) / n);