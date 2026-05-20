
let promise = new Promise(
    function(resolve,reject){
        resolve("Login");
    }
);

promise.then(
    result => {
        console.log(result);
    }
)