function solution(new_id) {
  var answer = "";
  answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "");
  if (answer === "") answer = "a";
  if (answer.length >= 16) answer = answer.substr(0, 15).replace(/^\.|\.$/g, "");
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }
  return answer;
}
