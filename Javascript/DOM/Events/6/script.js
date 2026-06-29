const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", (e) => {
    //e.stopPropagation();
    console.log("Child");
});