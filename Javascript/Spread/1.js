const num1 = [1,2,3];
const num2 = [4,5,6];
const combine = [...num1,...num2];
console.log(combine);


const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;


let arr = [2,3,4];
let newArr = [1, ...arr];
console.log(newArr);



function add(a,b,c){
    return a+b+c;
}
let nums = [10,20,30];
console.log(add(...nums));

function subtract(a,b,c){
    return a-b-c;
}
console.log(subtract(...nums));

console.log(Math.max(...nums));

