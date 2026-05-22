function checkEven(num){
    return new Promise((resolve,reject)=>{
        if(num%2==0){
            resolve("Even");
        }
        else{
            reject("Odd");
        }
    })
}

checkEven(13)
.then(result=>{
    console.log(result);
})

.catch(error=>{
    console.log(error);
})
