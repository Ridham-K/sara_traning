async function getData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response Status: ${response.status}`);
        }
        const result = await response.json();
        
        result.forEach(user => {
            console.log(user.name);
            
        });

        const names = result.map(user => user.name);
        console.log(names);
    }
    catch(error){
        console.log(error);
    }
}

getData();