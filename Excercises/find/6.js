// Find the first negative number in the array.

const num = [9,8,-1,5,-7,-10];

const neg = num.find(n => n < 0);
console.log(neg);
