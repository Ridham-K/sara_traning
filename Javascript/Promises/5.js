Promise.resolve("Done")

.then(x=>console.log(x))

.finally(()=>{

    console.log(
        "Finished"
    );

});