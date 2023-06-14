// 각 성격유형을 0으로 초기화
// survey를 반복해서 사용자가 선택한 순서(choices)에 따라 해당하는 유형에 점수를 추가
// 최종 점수를 계산해서 mbti를 리턴

function solution(survey, choices) {
  let answer = "";
  let mbti = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.filter((proposal, i) => {
    let score = 0; // 점수를 0으로 초기화
    if (choices[i] !== 4) score = Math.abs(choices[i] - 4); //  ex) Math.abs(4 - 7) = 2 더해줄 점수를 구한다.
    if (choices[i] < 4) mbti[proposal[0]] += score; // 설문 조사의 결과가 4보다 작으면 앞 mbti에 점수를 줌
    else if (choices[i] > 4)
      mbti[proposal[1]] += score; // 설문 조사의 결과를 4보다 크면 뒤 mbti에 점수를 줌
    
  });

  answer += mbti.R >= mbti.T ? "R" : "T"; // 더 큰 값을 리턴하지만 같으면 사전 순으로 빠른 것을 리턴
  answer += mbti.C >= mbti.F ? "C" : "F";
  answer += mbti.J >= mbti.M ? "J" : "M";
  answer += mbti.A >= mbti.N ? "A" : "N";

  return answer;
}
