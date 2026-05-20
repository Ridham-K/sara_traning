
Promise.reject(
    "Error"
)
.finally(
    () => {
        console.log("Finished");
    }
)
.catch(
    () => {
        console.log("Error");
    }
);