
async function getData(){
    const url = "https://jsonplaceholder.typicode.com/users?id=1";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    }
    catch(error){
        console.error(error.message);
    }
}

getData();