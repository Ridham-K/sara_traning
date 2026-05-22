function task1(){

    return Promise.resolve(
        "Login done"
    );

}

function task2(){

    return Promise.resolve(
        "Profile loaded"
    );

}

async function process(){

    let a = await task1();
    console.log(a);

    let b = await task2();
    console.log(b);

}

process();