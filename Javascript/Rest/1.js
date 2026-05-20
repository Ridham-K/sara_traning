function sum(...numbers){
    console.log(numbers);
}

sum(10,20,30,40,50);

function sum1(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num;
    }
    console.log(total);
}
sum1(10,20,30,40,50);
sum1(10,50);

function student(name, age, ...subjects){

    console.log(name);
    console.log(age);
    console.log(subjects);

}

student(
"Sarah",
22,
"Math",
"JS",
"React"
);

let numbers = [10,20,30,40,50];

let [a,b,...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);


let product = {
    id:1,
    title:"Laptop",
    price:50000,
    brand:"HP"
};

let {title,...details} = product;
console.log(details);
console.log(title);


let user = {
    id:1,
    name:"Sarah",
    password:"123",
    email:"abc@gmail.com"
};
let {password,...safeUser} = user;

console.log(safeUser);