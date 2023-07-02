function solution(arr) {
    return arr.reduce((acc, n) =>  acc + n, 0) / arr.length;
}