function solution(s) {
    let arr = s.trim().split(' ').map(Number);
    return `${Math.min(...arr)} ${Math.max(...arr)}`
}