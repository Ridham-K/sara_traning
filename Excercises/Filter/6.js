// 6. Remove falsy values from an array.

let arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

let tvalue = arr.filter(value => value);

console.log(tvalue);
