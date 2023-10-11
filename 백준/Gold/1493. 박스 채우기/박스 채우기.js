const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// x보다 작거나 같은 가장 가까운 2의 제곱을 찾음
function nearestSquare(x) {
    let i = 1;
    while(2 ** i <= x) i++;
    return i - 1;
}

// 길이 너비 높이를 받음
let [length, width, height] = input[0].split(' ').map(Number);

// 큐브 종류의 개수를 받음
let n = Number(input[1]);

// 큐브의 종류는 최대 0~19로, 20개의 개수를 0으로 초기화
let cubes = Array(20).fill(0);

// 각 큐브와 길이를 받아서 cubes 배열에 넣음
for(let i = 2; i <= n + 1; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    cubes[a] = b;
}

let size = 19;
// 가장 짧은 것을 기준으로 2의 제곱을 찾음 (해당 크기부터 큐브를 채워넣을 수 있음)
size = Math.min(nearestSquare(length), nearestSquare(width), nearestSquare(height));

let res = 0;
let used = 0;

// 큰 것부터 작은 것 까지 채워줌
for(let i = size; i >= 0; i--) {
    used *= 8; // 길이, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
    let cur = (2 ** i) // 현재 정육면체 큐브의 길이
    
    // 채워 넣어야 할 큐브의 개수 계산
    let required = parseInt(length / cur) *
        parseInt(width / cur) *
        parseInt(height / cur) - used;
    
    let usage = Math.min(required, cubes[i]); // 채워 넣을 수 있는 큐브의 개수와 실제 큐브의 개수를 비교
    res += usage;
    used += usage;
}

if(used === length * width * height) console.log(res);
else console.log(-1);