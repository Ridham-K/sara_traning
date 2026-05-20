Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("Error")
])
.then(console.log);