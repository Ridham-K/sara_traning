function login(){

    return Promise.resolve(
        "Login success"
    );

}

function profile(){

    return Promise.resolve(
        "Profile loaded"
    );

}

function orders(){

    return Promise.resolve(
        "Orders loaded"
    );

}

login()

.then(result=>{

    console.log(result);

    return profile();

})

.then(result=>{

    console.log(result);

    return orders();

})

.then(result=>{

    console.log(result);

});