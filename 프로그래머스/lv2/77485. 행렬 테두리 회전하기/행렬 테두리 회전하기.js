// rows * columns의 행렬이 있음
// x1 y1부터 x2 y2까지 해당하는 테두리를 시계방향으로 회전
// 쿼리를 수행한 후 제일 최솟값을 리턴


const rotation = ([x1, y1, x2, y2], arr) => {
    x1--; y1--; x2--; y2--; // 0이 아닌 1이 시작점이니까 1씩 감소
    const newArr = arr.map((row) => [...row]);
    let min = arr[x1][y1]; // 최솟값 초기화
    
    for(let i = y1; i < y2; i++){
        newArr[x1][i+1] = arr[x1][i]; // 오른쪽으로 회전
        if(arr[x1][i] < min) min = arr[x1][i];
    }
    
    for(let i = x1; i < x2; i++){
        newArr[i+1][y2] = arr[i][y2]; // 아래로 회전
        if(arr[i][y2] < min) min = arr[i][y2];
    }
    
    for(let i = y2; i > y1; i--){
        newArr[x2][i-1] = arr[x2][i]; // 왼쪽으로 회전
        if(arr[x2][i] < min) min = arr[x2][i];
    }
    for(let i = x2; i > x1; i--){
        newArr[i-1][y1] = arr[i][y1];
        if(arr[i][y1] < min) min = arr[i][y1];
    }
    
    return [newArr, min]
}

function solution(rows, columns, queries) {
    let arr = [];
    const answer = [];
    let count = 1;
    
    // 행렬을 만든다.
    for(let x = 0; x < rows; x++){
        const row = [];
        for(let y = 0; y < columns; y++){
            row.push(count++);
        }
        arr.push(row);
    }

    for(let i = 0; i < queries.length; i ++){
       const [rotateArr, minVal] = rotation(queries[i], arr);
    
        arr = rotateArr.map((row) => [...row]);
        answer.push(minVal);
    }
    
    return answer;
}

