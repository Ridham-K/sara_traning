console.log("Start");

let timer = setTimeout(() => {
    console.log("Task");
},3000);

console.log("End");

clearTimeout(timer);