let user = {
    name: "Sara",
    age: 22
};

let str = JSON.stringify(user);
console.log(str);

let obj = JSON.parse(str);
console.log(obj);