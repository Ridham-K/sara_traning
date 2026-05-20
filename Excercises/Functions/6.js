// 6. Create a calculator function using a switch case.

function calculator(num1,num2){
    let operation='/';
    switch(operation){
        case '+':
            operation=num1+num2;
            break;
        case '-':
            operation=num1-num2;
            break;
        case '*':
            operation=num1*num2;
            break;
        case '/':
            if (num2 === 0){
                console.log("Can't perform division");
                return;
            }

            operation=num1/num2;
            break;
            
    }
    console.log(operation);
}

calculator(5,0);
