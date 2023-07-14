// (0,0) 위치에서 시작
// 캐릭터가 처음 걸어본 길의 길이를 리턴
// 좌표평면의 경계를 넘어가는 명령어는 무시

function solution(dirs) {
    const direction = {
        L: [0, -1],
        R: [0, 1],
        D: [-1, 0],
        U: [1, 0]                  
    };
    let location = [0, 0];
    const move = [];
    
    for (const dir of dirs){
        let [dy, dx] = direction[dir];
        let [cy, cx] = location;
        let [ny, nx] = [cy + dy, cx + dx];
        if(ny >= -5 && ny <= 5 && nx >= -5 && nx <= 5){
            move.push(`${ny}${nx}${location[0]}${location[1]}`);
            move.push(`${location[0]}${location[1]}${ny}${nx}`);
            location[0] = ny;
            location[1] = nx;
        }
    } 
    return new Set(move).size / 2;
}