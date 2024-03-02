// 인형을 최상단에서 하나씩 뽑는다.
// 같은 인형이 바구니에 들어오면 터진다.
// 인형이 없으면 아무 일도 일어나지 않는다.
// 사라진 인형의 개수를 리턴

function solution(board, moves) {
  let count = 0;
  const basket = [];

  for (let i = 0; i < moves.length; i++) {
    let h = 0;
    let doll = 0;

      // 뽑은 인형이 0이 아니거나 최대 행까지 탐색할 때까지 반복
    while (doll === 0 && h < board.length) {
      doll = board[h][moves[i] - 1];
      
        // 스택이 비어있으면 비교하지 않고 push
      if(doll !== 0 && basket.length === 0 ){
        basket.push(doll);
        board[h][moves[i] - 1] = 0;
      }
        
        // 스택이 비어있지 않고 뽑은 인형이 0이 아니고 바구니의 최상단 값과 다르면 바구니에 담는다.
      else if (doll !== 0 && basket[basket.length - 1] !== doll) {
        basket.push(doll);
        board[h][moves[i] - 1] = 0; // 뽑은 후 빈 곳이라는 것을 0으로 표시
      } 
    
        // 스택이 비어있지 않고 뽑은 인형이 0이 아니고 바구니의 최상단 값과 같으면 바구니에 push하지 않고 pop을 한다.
      else if (doll !== 0 && basket[basket.length - 1] === doll) { 
        basket.pop();
        board[h][moves[i] - 1] = 0; // 뽑은 후 빈 곳이라는 것을 0으로 표시
        count += 2; // 두 인형이 만나서 사라졌으니 2 증가
      }
      h++;
    }
  }
  return count;
}