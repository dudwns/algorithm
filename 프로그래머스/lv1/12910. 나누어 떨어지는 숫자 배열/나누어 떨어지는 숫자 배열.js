function solution(arr, divisor) {
    const result = [];
    arr.filter((n) => n % divisor ? null : result.push(n))
    return result.length ? result.sort((a, b) => a - b) : [-1];
}