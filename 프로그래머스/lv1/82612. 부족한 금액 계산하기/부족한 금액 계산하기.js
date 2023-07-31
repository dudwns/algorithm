function solution(price, money, count) {
    let totalPrice = 0;
    for(let i = 1; i <= count; i ++){
        totalPrice += price * i;
    }
    const changes = money - totalPrice;
    return changes >= 0 ? 0 : Math.abs(changes);
}