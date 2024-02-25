function toBinary(n, arr){
    const returnArr = [];
    for(let i = 0; i < arr.length; i ++){
        let temp = arr[i].toString(2);
        while(temp.length < n){
            temp = "0"+temp;
        }
        returnArr.push(temp)
    }
    return returnArr;
}

function solution(n, arr1, arr2) {
    const result = [];
    const binaryArr1 = toBinary(n, arr1);
    const binaryArr2 = toBinary(n, arr2);
    
    for(let i = 0; i < n; i ++){
        let temp = "";
        for(let j = 0; j < n; j ++){
            binaryArr1[i][j] === "0" && binaryArr2[i][j] === "0" ? temp +=" " : temp += "#";
        }
        result.push(temp);
    }
    
    return result;
}