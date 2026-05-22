let dataPromise = new Promise(
    function(resolve,reject){
        console.log("Loading...");

        setTimeout(()=>{
            resolve("Data Received");
        },3000);
    }
);

dataPromise.then(
    result=>{
        console.log(result);
    }
)