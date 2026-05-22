let promise = new Promise(
    function(resolve,reject){
        let success = true;

        if(success){
            resolve("Completed");
        }
        else{
            reject("Failed");
        }
    }
);

console.log(promise)