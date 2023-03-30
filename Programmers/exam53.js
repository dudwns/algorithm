function solution(age) {
  const alpha = "abcdefghij";
  return (age + "")
    .split("")
    .map((num) => alpha[num])
    .join("");
}
