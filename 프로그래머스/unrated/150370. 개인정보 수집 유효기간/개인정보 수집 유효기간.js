// 개인정보는 유효기간이 정해져있다.
// 유효기간이 지나면 파기
// 모든 달은 28일까지 있다.
// 파기해야 할 개인정보의 번호를 오름차순을 통해 배열로 리턴

function solution(today, terms, privacies) {
    const afterArr = []; // 합산 된 날짜를 담는 배열
    const result = []; // 결과를 담는 배열
 
    // 약관 종류에 따른 유효 기간을 반환하는 함수
    const termCheck = (crtTerm) => {
        for(let i = 0; i < terms.length; i ++){
            const filterTerm = terms.filter((term) => crtTerm === term[0]);
            return Number(filterTerm.join("").slice(2));
        }
    }
    
    for(let i = 0; i < privacies.length; i ++){
        const privacy = privacies[i].split(" "); // 공백을 기준으로 나눔
        let [startDay, term] = privacy; // 수집 날짜와 약관 종류
        const expDay = termCheck(term); // 약관 종류를 전달하여 유효 기간 반환
       
        let year = Number(startDay.substr(0,4));
        let month = Number(startDay.substr(5,2));
        let day = Number(startDay.substr(8,2));
       
        // day가 1보다 작으면 28로 지정하고 month를 감소
        if(day - 1  < 1){
            day = 28;
            if(month - 1 < 1){
                month = 12;
                year--;
            }
            else month--;
        } else day--;
  

        // 수집 기간과 유효 기간을 더해서 12가 넘으면 연도 증가
        if(month + expDay >= 12){
            year+= Math.floor((month + expDay) / 12);
            if((month + expDay) % 12 === 0) {
                 year--;
                 month = 12;
            } else month = (month + expDay) % 12;
        } else month = month + expDay;
         
        // 한 글자면 앞에 0을 붙임
        afterArr.push(`${year}-${month.toString().padStart(2,"0")}-${day.toString().padStart(2,"0")}`);
    }
    
    const nowDay = new Date(today.split(".").join("-")) // .을 -로 구분하게 변경 후 Date 타입으로 변경
    
    // 합산된 날짜가 현재 날짜보다 작으면 유효 기간이 지났으니 result에 push
    afterArr.forEach((date, i) => {
        new Date(date) < nowDay ?  result.push(i+1) : null 
    })
    return result ;
}