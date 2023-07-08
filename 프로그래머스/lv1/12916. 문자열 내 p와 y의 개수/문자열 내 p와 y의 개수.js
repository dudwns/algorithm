function solution(s) {
  s = s.toLowerCase();
  let p = 0;
  let y = 0;

  for (let str of s) {
    if (str === "p") {
      p++;
    } else if (str === "y") {
      y++;
    }
  }

  return p === y || p + y === 0 ? true : false;
}
