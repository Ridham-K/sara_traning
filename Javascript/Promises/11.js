let p1 = Promise.resolve(10);

let p2 = Promise.resolve(20);

let p3 = Promise.resolve(30);

Promise.all(
[p1,p2,p3]
)

.then(result=>{

console.log(result);

});