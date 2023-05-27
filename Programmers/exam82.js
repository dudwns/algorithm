function solution(keyinput, board) {
  const width = Math.floor(board[0] / 2);
  const height = Math.floor(board[1] / 2);
  let x = 0;
  let y = 0;
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-width < x) x--;
        break;
      case "right":
        if (width > x) x++;
        break;
      case "up":
        if (height > y) y++;
        break;
      case "down":
        if (-height < y) y--;
        break;
    }
  }
  return [x, y];
}
