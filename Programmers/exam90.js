function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]); // 스택이 비어있거나, 이전 문자가 현재 문자와 다를 때 stack에 push
    } else {
      stack.pop(); // 이전 문자열이랑 같으면 pop
    }
  }

  return stack.length ? 0 : 1; // 스택이 비어있으면 성공했다는 뜻이므로 1을 리턴, 아니면 0을 리턴
}
