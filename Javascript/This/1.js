const person = {
    name: "Sara",

    greet: function() {
        console.log(this.name);
    }
};

person.greet();