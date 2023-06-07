function solution(s) {
  let open = 0;

  for (const value of s) {
    if (value === "(") {
      open++;
    } else {
      if (open === 0) return false;
      open--;
    }
  }

  return open ? false : true;
}
