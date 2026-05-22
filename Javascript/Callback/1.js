function greet(name, callback){

    console.log("Hello " + name );

    callback();

}

function message(){

    console.log("Welcome");

}

greet("Sara",message);