function solution(board) {
    const n = board.length;
    const direction = [[-1, -1],[-1, 0],[0, -1],[-1, 1], [1, -1], [1, 0], [0, 1], [1, 1]] // 방향 정의
    
    for(let y = 0; y < n; y ++){
        for(let x = 0; x < n; x++){
            if(board[y][x] === 1){
                direction.forEach((d) => {
                    let [dy, dx] = d;
                    let ny = y + dy;
                    let nx = x + dx;
                    if(ny >= 0 && nx >= 0 && ny < n && nx < n && board[ny][nx] === 0 ){
                        board[ny][nx] = 2;
                    }
                })
            }
        }
    }
    return board.flat().filter(n => n === 0).length;
}