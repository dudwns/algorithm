function solution(s) {
  let result = 0, x = 0, same = 0, differ = 0;
    
  for (let i = 0; i < s.length; i++) {
    s[x] === s[i] ? same++ : differ++;
    if (same === differ) {
      x = i + 1;
      result++;
    }
  }
    
  return same !== differ ? result + 1 : result;
}