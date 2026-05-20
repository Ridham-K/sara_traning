// 4. Filter products with price above 1000.

const products = [
    {name : "Shirt" , price: 1200},
    {name : "Toys" , price: 700},
    {name : "Trousers" , price: 2000}
];

const price = products.filter(p => p.price > 1000);
console.log(products);
console.log(price);
