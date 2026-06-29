let count = 0;
const button = document.getElementById("btn");
const p = document.getElementById("count");

button.addEventListener("click",()=>{
    count++;
    p.textContent=count;
});