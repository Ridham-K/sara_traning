let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from ...";

let divs = document.querySelectorAll(".box");
divs[0].innerText = "1";
divs[1].innerHTML = "2";
divs[2].innerHTML = "3";