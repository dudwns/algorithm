// 15를 연속된 자연수의 합으로 표현하는 방법의 수는 15의 홀수인 약수의 갯수와 같다.
function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i == 0 && i % 2 != 0) answer++; 
    }
    return answer;
}