const input = document.getElementById("name");
const count = document.getElementById("count");

input.addEventListener("input",(e)=>{
    count.textContent = e.target.value.length;
});