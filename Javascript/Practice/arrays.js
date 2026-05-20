// let marks = [12,34,23,56,78];
// console.log(marks);

// console.log(marks.length);
// console.log(marks[0]);
// console.log(marks[2]=44);
// console.log(marks);


let products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Book", price: 50 }
];

// Add
products.push({ id: 3, name: "Pencil", price: 5 });

// Update
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 1) {
    products[i].price = 15;
  }
}

// Delete
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 2) {
    products.splice(i, 1);
    break;
  }
}

// Read
for (let p of products) {
  console.log(p);
}
