const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = [];
for(let i = 1; i <= n; i++) {
    const [age, name] = input[i].split(' ');
    arr.push({ age: Number(age), name });
}

arr.sort((a, b) => a.age - b.age);

let answer = '';
for(let i = 0; i < n; i++){
    answer += arr[i].age + ' ' + arr[i].name + '\n';
}
console.log(answer);
