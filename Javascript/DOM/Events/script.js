let btn = document.getElementById("btn");

// btn.onclick = function(){
//     alert("Clicked")
// }

btn.addEventListener("click",function(){
    console.log("Clicked");
});

let box = document.getElementById("title");

box.addEventListener("mouseover",function(){
    box.style.color="blue";
});

box.addEventListener("mouseout",function(){
    box.style.color="red";
})