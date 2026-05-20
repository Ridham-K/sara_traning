function sayHello() {
  return "Hello World";
}

let message = sayHello();
console.log(message);


function multiply(a,b){
  return a*b;
}
let num = multiply(5,5);
console.log(num);



function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = console.log(toCelsius(100));

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = console.log(fullName("abc", "xyz"));

function sum(...args){
  let sum = 0;
  for (let arg of args){
    sum += arg;
  }
  return sum;
}

let x = sum(4,7,43,12,67);
console.log("Sum: " + x);

//Function expression
const mult = function (a,b) {return a*b};
console.log(mult(4,5));

//Arrow functions
const mul = (a,b) => a * b;
console.log(mul(5,5));

const add = (a,b,c) => a + b + c;
console.log(add(4,5,8));

const hello = (val) => "Hello " + val;
console.log(hello("Sara"));

const person = {
  name: "John",
  greet: function(){
    return this.name;
  }
}

let a = person.greet();
console.log(a);


//Objects
// const per = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// Create an Object
const per = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullname : function(){
    return this.firstName + " " + this.lastName;
  }
});

let ab = per.lastName;

let cd = per["age"];
console.log(ab);
console.log(cd);


myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car2);
console.log(myObj.myCars["car2"]);

const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value ;
}
console.log(text);


function Personn(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Personn("John", "Doe", 50, "blue");
const myMother = new Personn("Sally", "Rally", 48, "green");

console.log(myFather);