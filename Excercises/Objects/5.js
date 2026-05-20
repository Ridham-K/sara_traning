//5. Loop through an object using for...in.

const student ={
    name: "Sara",
    age: 22,
    marks: 45
};

for(let key in student){
    console.log(key + " => " + student[key]);
}
