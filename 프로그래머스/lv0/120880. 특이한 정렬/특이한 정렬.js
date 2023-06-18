function solution(numlist, n) {
    var answer = [];
    answer = numlist.map((num) => [num, Math.abs(num - n)]).sort((a,b) => b[0] - a[0]).sort((a,b) => a[1] - b[1]);
    return answer.map((num) => num[0]);
}