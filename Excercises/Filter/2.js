// Filter students with marks greater than 50.

const student = [
    {name : "Sara", marks: 45},
    {name : "Siya", marks: 55},
    {name : "Janki", marks: 63}
];

const marks = student.filter(m => m.marks > 50);

console.log(marks);
