async function updateUser(){

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Jay Updated",
                age: 23
            })
        }
    );

    const result = await response.json();

    console.log(result);
}

updateUser();