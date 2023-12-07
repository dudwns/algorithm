function solution(my_string) {
    let answer = "";
  for( let a of my_string) answer += a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase(); 
    return answer;
}