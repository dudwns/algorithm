function solution(numbers) {
  let answer = "";

  // 각 숫자를 문자열로 변경 (숫자를 +연산자로 붙이기 위해서)
  const array = numbers.join(" ").split(" ");

  // a b를 더한 값과 역으로 더한 것을 비교해서 내림차순으로 정렬 후 연결 ex) 6,10 => 106 - 610
  answer = array.sort((a, b) => b + a - (a + b)).join("");

  // numbers 배열이 0으로 채워질 경우 "000000"인 경우가 있으니 이 때는 "0"을 리턴, 0이 아니면 계산한 값을 리턴
  return answer > 0 ? String(answer) : "0";
}
