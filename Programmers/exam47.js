function solution(box, n) {
  return box.reduce((a, b) => a * ~~(b / n), 1);
}
