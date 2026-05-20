let num1 = 10;
let num2 = 0;

try{
    if(num2==0){
        throw("Cannot perform division");
    }
    console.log(num1/num2);
}
catch(error){
    console.log(error);
}