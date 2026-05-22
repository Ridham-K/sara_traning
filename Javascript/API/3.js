async function addUser() {

    const url = "https://jsonplaceholder.typicode.com/posts";

    try {

        const response = await fetch(url, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Jay",
                age: 22
            })
        });

        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        const result = await response.json();

        console.log(result);

    }
    catch (error) {
        console.log(error.message);
    }
}

addUser();