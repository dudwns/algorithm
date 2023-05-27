function solution(id_pw, db) {
  let answer = "";
  const id = id_pw[0];
  const pw = id_pw[1];
  const dbData = db.filter((data) => data[0] === id);

  if (dbData.length) {
    if (dbData[0][1] === pw) answer = "login";
    else answer = "wrong pw";
  } else {
    answer = "fail";
  }
  return answer;
}
