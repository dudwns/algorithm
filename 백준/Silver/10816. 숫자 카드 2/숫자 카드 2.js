const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]);
let query = input[3].split(' ').map(Number);

arr.sort((a, b) => a - b);

const lowerBound = (arr, target, start, end) => {
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

const upperBound = (arr, target, start, end) => {
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

const countByRange = (arr, leftValue, rightValue) => {
    let rightIndex = upperBound(arr, rightValue, 0, arr.length);
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
}

let result = [];

for (let i = 0; i < m; i++) {
    result.push(countByRange(arr, query[i], query[i]));
}

console.log(result.join(' '));