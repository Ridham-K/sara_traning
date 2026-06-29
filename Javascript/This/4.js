function greet(city, country) {
    console.log(this.name, city, country);
}

const person = {
    name: "Sara"
};

greet.apply(person, ["Surat", "India"]);