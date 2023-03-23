function solution(numbers) {
  return (answer = numbers.reduce((a, c) => a + c) / numbers.length);
}
