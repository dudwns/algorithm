const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

let arr = [];
for(let i = 1; i <= n; i++) {
    arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b) => {
    if(a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
})

let answer = 1;
let cur = 0;
for(let i = 1; i < n; i++){
    let currentEnd = arr[cur][1];
    let nextStart = arr[i][0];
    if(currentEnd <= nextStart) {
        answer++;
        cur = i;
    }
}
console.log(answer);