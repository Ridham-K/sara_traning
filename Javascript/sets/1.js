const letter = new Set(["a","b","c","a"]);
console.log(letter);

let text = "";
for(const x of letter){
    text += x;
}
console.log(text);
console.log(typeof letter);

letter.add("d");
console.log(letter);

console.log(letter.size);

answer = letter.has("d");
console.log(answer);