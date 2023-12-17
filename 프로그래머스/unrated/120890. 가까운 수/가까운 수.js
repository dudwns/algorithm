function solution(array, n) {
    const subArray = array.sort().map((v) => Math.abs(n - v));
    return array[subArray.indexOf(Math.min(...subArray))];
}