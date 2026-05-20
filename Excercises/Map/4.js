// 4. Convert prices into discounted prices.

const price = [100,200,300,400];
const dis = price.map(d => d - d * 10/100);
console.log(price);
console.log(dis);
