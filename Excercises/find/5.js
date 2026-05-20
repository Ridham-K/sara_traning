// Find a user whose age is above 18.

const user = [
    {name : "abc", age : 12},
    {name : "xyz" , age : 20},
    {name : "pqr" , age : 19}
];

const above = user.find(a => a.age > 18);
console.log(above);

