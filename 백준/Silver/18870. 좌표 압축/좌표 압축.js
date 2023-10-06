const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const data = input[1].split(' ').map(Number);

const setArr = [...new Set(data)];
setArr.sort((a, b) => a - b);

const mapArr = new Map();
for (let i = 0; i < setArr.length; i++) {
    mapArr.set(setArr[i], i);
}

let answer = '';
for (const x of data) answer += mapArr.get(x) + ' ';
console.log(answer);