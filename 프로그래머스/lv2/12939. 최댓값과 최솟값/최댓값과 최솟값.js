function solution(s) {
    var answer = "";
    const num = s.split(" ").map((n) => +n);
    answer += Math.min(...num);
    answer += " "+Math.max(...num);
    return answer;
}