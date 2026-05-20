const letters = new Set(["a","b","c"]);

let text = "";
letters.forEach (function(value){
    text += value;
})
console.log(text);

let text1 = "";
for (const entry of letters.values()) {
  text1 += entry;
}
console.log(text1);


let text2 = "";
for (const entry of letters.entries()) {
  text2 += entry;
}
console.log(text2);
