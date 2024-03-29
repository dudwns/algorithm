const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

const arr = [];
for(let i = 1; i <= n; i++){
    let [x, y] = input[i].split(' ').map(Number);
    arr.push({x, y});
}

function compare (a, b) {
    if(a.x !== b.x) return a.x - b.x;
    else return a.y - b.y;
}
arr.sort(compare);

let result = '';
for(let i = 0; i < n; i++) {
    result += arr[i].x + ' ' + arr[i].y + '\n';
}
console.log(result);