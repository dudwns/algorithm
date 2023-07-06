function solution(intStrs, k, s, l) {
    let answer = [];
    return answer = intStrs.map((str) => parseInt(str.substr(s, l))).filter((num) => num > k);
}