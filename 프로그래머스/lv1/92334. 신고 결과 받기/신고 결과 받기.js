function solution(id_list, report, k) {
    var answer = [];
    const users = new Map();
    const mails = new Map();
    // 중복 제거 후 각각 배열로 만듦
    const reports = [...new Set(report)].map(report => report.split(" "));

    // Map 객체에 id별로 0으로 초기화
    for( let id of id_list){
        users.set(id, 0);
        mails.set(id, 0);
    }
 
    // reports를 순회하면서 신고 횟수를 증가
    for (let report of reports){
        users.set(report[1], users.get(report[1]) + 1);
    }
    
    // reports를 순회하면서 k 이상 신고한 사람을 신고했으면 mails의 count를 증가
    for (let report of reports){
        if(users.get(report[1]) >= k) {
            mails.set(report[0], mails.get(report[0]) + 1);
        }
    }

    return [...mails.values()];
}