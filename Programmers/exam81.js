function solution(dots) {
  dots.sort();
  const x = Math.abs(dots[0][0] - dots[2][0]);
  const y = Math.abs(dots[0][1] - dots[1][1]);
  return x * y;
}
