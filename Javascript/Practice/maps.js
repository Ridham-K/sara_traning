const fruits = new Map();
fruits.set("apples",500);
fruits.set("kiwi",600);
console.log(fruits.get("apples"));
console.log(typeof fruits);
console.log(fruits instanceof Map);
console.log(fruits.size);
console.log(fruits.has("apples"));


let text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text);

// Create a WeakMap
let myMap = new WeakMap();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};



let numbers = [1, 2, 3, 4];
let result = numbers.map(num => num * 2);
console.log(result);


let names = ["sara", "panchani"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);


//Filters

const numberss = [1,2,3,4,5,6,7,8,9];
const even = numberss.filter(num => num % 2 === 0);
console.log(even);

//Find
const even1 = numberss.find(num => num % 2 === 0);
console.log(even1);

const products = [
  { id: 1, name: 'Product 1', price: 40 },
  { id: 2, name: 'Product 2', price: 60 },
  { id: 3, name: 'Product 3', price: 30 }
];
const expensiveProducts = products.filter(product => product.price > 50);
console.log(expensiveProducts);




//reduce
const productss = [
  { name: "Shirt", price: 20 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 15 }
];

const totalPriceReduce = productss.reduce((sum, product) => sum + product.price, 0);

console.log("Total price (reduce):", totalPriceReduce);

//Destructuring

const hobbies = ["Reading", "Coding", "Hiking"];
const [firstHobby, secondHobby, thirdHobby] = hobbies;
console.log(firstHobby); // Output: Reading
console.log(secondHobby); // Output: Coding
console.log(thirdHobby);

//Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined array:", combined); 



//to do-> shallow copy and deep copy


const user = new Object({
    name: "Sara",
    lname: "Panchani",
    training: "React js trainee"
});


console.log(user);

const users = {
    name: "Sara",
    lname: "Panchani",
    training: "React js trainee"
};

console.log(users.name);

const numm = [1,3,5,7,9];
const multt = numm.map(num1 => num1 * 2);
console.log(multt);