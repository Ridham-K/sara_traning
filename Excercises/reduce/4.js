// 4. Count total marks of students.

let students = [
    { name: "Sara", marks: 45 },
    { name: "Siya", marks: 55 },
    { name: "Janki", marks: 60 }
];

let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);

console.log(totalMarks);
