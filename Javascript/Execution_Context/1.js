var x = 10;

function first(){
    var y = 20;

    function second(){
        var z = 30;

        console.log(x+y+z);
    }

    second();
}

first();