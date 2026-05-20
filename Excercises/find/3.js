// Find a product by ID.

const product = [
    {id : 101 , name : "Watch"},
    {id : 201 , name : "Shoes"},
]

const prod = product.find(i => i.id == 101);
console.log(prod);

