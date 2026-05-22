function getData(){
    return Promise.resolve("Hello");
}

async function showData(){
    let data = await getData();
    console.log(data);
}

showData();