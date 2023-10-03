const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let result = '';
for (let i = 1; i <= n; i++){
    const arr = input[i].split(' ').map(Number);
    const len = arr[0];
    let sum = 0;
    let cnt = 0;
    for(let j = 1; j <= len; j++){
        sum += arr[j];
    }
    const avg = sum / len;
    for(let j = 1; j <= len; j++){
        if(arr[j] > avg) cnt++;
    }
    result += `${(cnt / len * 100).toFixed(3)}%\n`; 
}

console.log(result);