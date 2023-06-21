function solution(s) {
  const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for (let i = 0; i < 10; i++) {
    const str = numStr[i];
    const pattern = new RegExp(str, "g"); // 정규 표현식을 동적으로 사용하려면 RegExp 객체를 생성해야 한다.
    s = s.replace(pattern, i);
  }
    
  return +s;
}
