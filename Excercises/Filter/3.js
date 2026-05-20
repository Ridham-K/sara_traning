// 3. Filter words longer than 5 characters.

const characters = ["abcd","pqrstu","wxyzab"];

const char = characters.filter(w => w.length > 5);
console.log(characters);
console.log(char);
