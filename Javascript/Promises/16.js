function getData(){

    return Promise.reject(
        "Network error"
    );

}

async function show(){

    try{

        let data = await getData();
        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

show();