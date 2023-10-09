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

let cnt = 1;
let curEnd = arr[0][1];
for(let i = 1; i < n; i++) {
    if(curEnd <= arr[i][0]) {
        curEnd = arr[i][1];
        cnt++;
    }
}
console.log(cnt);