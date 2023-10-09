const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let pibo = [];
pibo.push(0);
pibo.push(1);
while(pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1])

for(let i = 1; i <= n; i++) {
    let data = Number(input[i]);
    let result = [];
    let maxIdx = pibo.length - 1;
    while(data > 0) {
        if(data >= pibo[maxIdx]) {
            data -= pibo[maxIdx];
            result.push(pibo[maxIdx]);
        }
        maxIdx--;
    }
    let answer = '';
    result.sort((a, b) => a - b);
    for(let j = 0; j < result.length; j++){
            answer += result[j] + ' ';
    }
    console.log(answer);
}
