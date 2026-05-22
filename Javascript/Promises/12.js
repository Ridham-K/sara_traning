function getData(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve("User data");

        },2000);

    });

}
async function show(){

    let result = await getData();
    console.log(result);

}

show();