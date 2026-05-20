

let arr = [1, [2, 3], [4, 5], 6];
let flat = arr.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);
console.log(flat);
