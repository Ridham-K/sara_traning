// Find a student with a specific roll number.

const student = [
    {id : 1 , name : "Sara"},
    {id : 2 , name : "Om"},
]

const roll = student.find(i => i.id == 2);
console.log(roll);
