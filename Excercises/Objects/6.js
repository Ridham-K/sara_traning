// 6. Create an object method that prints the full name.

let person = {
    firstName: "Sara",
    lastName: "Panchani",
    
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

person.fullName();