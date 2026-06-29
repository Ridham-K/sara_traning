const person1 = {
    name: "Sara"
};

function greet() {
    console.log("Hello", this.name);
}

greet.call(person1);