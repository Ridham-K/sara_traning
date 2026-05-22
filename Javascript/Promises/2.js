let ageCheck = new Promise(
    function(resolve,reject){
        let age = 9;
        if(age > 18){
            resolve("Allowed");
        }
        else{
            reject("Not allowed");
        }
    }
);
console.log(ageCheck)