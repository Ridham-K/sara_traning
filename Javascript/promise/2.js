let promise = new Promise(
    function(resolve,reject){
        reject("Failed");
    }
);

promise.catch(
    result => {
        console.log(result);
    }
)

