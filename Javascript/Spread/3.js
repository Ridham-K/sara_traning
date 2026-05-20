let person = {
    name : "Sara",
    college : "Nirma"
};

let copy = {...person};
console.log(copy);

copy.age = 25;
console.log(copy.age);
console.log(person.age);

let obj1 = {
    name : "Siya"
};

let obj2 = {
    age : 23
};

let comb = {
    ...obj1,
    ...obj2
};

console.log(comb);


let cart = ["Book","Pen"];
let newCart = [...cart];
newCart.push("Pencil");
console.log(cart);
console.log(newCart);