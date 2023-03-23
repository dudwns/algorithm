function solution(array, height) {
  var answer = array.filter((num) => num > height);
  return answer.length;
}
