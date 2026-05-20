// 3. Add "Mr." before every name in the array.

const names = ["Om","Mihir","Jayveer"];

const prev = names.map(n => "Mr. ".concat(n));
console.log(prev);
