function solution(n) {
    let row = 0;
    let col = 0;
    let value = 1;
    const arr = [];
    for(let i = 0 ; i < n ; i ++) arr.push([]);
    
    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;
    
    
    
    while(value <= n * n){
        for(let i = startCol; i <= endCol; i++){
            arr[startRow][i] = value++;
        }
        startRow++;
        
        for(let i = startRow; i <= endRow; i++){
            arr[i][endCol] = value++;
        }
        endCol--;
        
        for(let i = endCol; i >= startCol; i--){
            arr[endRow][i] = value++;
        }
        endRow--;
        
        for(let i = endRow; i >= startRow; i--){
            arr[i][startCol] = value++;
        }
        startCol++;
    }
    return arr;
}