function solution(numbers, k) {
    var answer = 1;
    for (let i = 1; i < k; i ++){
        answer += 2;
        if(answer === numbers.length + 1) answer = 1;
        else if (answer === numbers.length + 2) answer = 2;
    }
    return answer;
}