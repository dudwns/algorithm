function solution(park, routes) {
  let answer = [];
  const height = park.length;
  const width = park[0].length;

  // 방향 선언
  const direction = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  // 시작 위치 구하기
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (park[i][j] === "S") {
        answer = [i, j];
        break;
      }
    }
    if (answer.length !== 0) break;
  }

  // 이동
  routes.forEach((s) => {
    let isMove = true;
    let [y, x] = answer;
    const [op, n] = s.split(" ");
    const [dy, dx] = direction[op];

    for (let i = 0; i < n; i++) {
      const newY = y + dy;
      const newX = x + dx;

      if (newX >= 0 && newX < width && newY >= 0 && newY < height && park[newY][newX] !== "X") {
        y = newY;
        x = newX;
      } else {
        isMove = false;
        break;
      }
    }
    if (isMove) answer = [y, x];
  });

  return answer;
}
