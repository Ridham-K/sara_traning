// 3. Find the maximum number using reduce.

const num = [5, 4, 2, 9, 7, 10];

const maxi = num.reduce((acc, curr) => Math.max(acc, curr));

console.log(maxi);

