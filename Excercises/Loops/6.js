// 6. Create a star pattern using nested loops.

//Simple
for(let i=1;i<=5;i++){
    row = "";
    for(let j=1;j<=5;j++){
        row += "* "
    }
    console.log(row);
}
console.log();

//Triangle
for(let i=1;i<=5;i++){
    row = "";
    for(let j=1;j<=i;j++){
        row += "* ";
    }
    console.log(row);
}
console.log();

//Inverted Triangle
for(let i=5;i>=1;i--){
    row = "";
    for(let j=1;j<=i;j++){
        row += "* ";
    }
    console.log(row);
}
console.log();


let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }

    console.log(row);
}