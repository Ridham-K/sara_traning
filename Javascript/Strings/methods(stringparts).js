let str1 = "Good afternoon, everybody";

console.log(str1.slice(4,19));
console.log(str1.substring(2,14));
console.log(str1.substr(5,3));

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

let result = str1.isWellFormed();
console.log(result);

let text = "Hello World \uD800";
let result1 = str1.isWellFormed();
console.log(result1);

