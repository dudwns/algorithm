function solution(keyinput, board) {
    const answer = [0, 0] // 시작 위치
    const direction = {
        "up": [0, 1],
        "down": [0, -1],
        "left": [-1, 0],
        "right": [1, 0]
    }
    
    const width = Math.floor(board[0] / 2); //board의 width값
    const height = Math.floor(board[1] / 2); // board의 height값
    
   keyinput.forEach((key) => {
       const [dx, dy] = direction[key];
       const newX =  answer[0] + dx;
       const newY = answer[1] + dy;
       if(newX >= -width && newX <= width && newY >= -height && newY <= height ){
           answer[0] = newX;
           answer[1] = newY;
       }
   })
    
    return answer
}