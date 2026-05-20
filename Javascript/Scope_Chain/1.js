
let global_variable = 20;

function main_function() {
    let local_variable = 30;

    let nested_function = function () {
        console.log(local_variable);
    }

    let another_nested_function = function () {

        // Displays the value inside the global variable
        console.log(global_variable);
    }

    nested_function();
    another_nested_function();
}

main_function();