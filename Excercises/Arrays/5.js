// 5. Find the largest number in an array.

let numbers = [1,67,43,2,96,44,23,32];
let temp=0;
for(let i=1; i <= numbers.length-1; i++){
    if(numbers[i]>temp){
        temp=numbers[i];
    }
}
console.log(temp);
