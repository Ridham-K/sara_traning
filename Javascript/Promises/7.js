function fileLoad(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("File Loaded");
        },2000);
    })
}

fileLoad()
.then(result=>{
    console.log(result);
})