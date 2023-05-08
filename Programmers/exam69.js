function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j] && i !== j) count++;
    }
    if (count === 0) answer.push(s[i]);
  }
  return answer.sort().join("");
}
