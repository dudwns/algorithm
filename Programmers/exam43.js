function solution(rsp) {
  let answer = "";
  for (let a of rsp) answer += a === "2" ? 0 : a === "0" ? 5 : 2;
  return answer;
}
