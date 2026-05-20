// let num = "Hello";
let num = 5
try{
    if(isNaN(num)){
        console.log("Numbers are only allowed");
    }
}
catch(error){
    console.log(error);
}
finally{
    console.log("Executed!!");
}