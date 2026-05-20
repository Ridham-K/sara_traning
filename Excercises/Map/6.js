// 6. Convert temperatures from Celsius to Fahrenheit.

const cel = [12.34,34.67,45.01];
const fah = cel.map(temp => (temp * 9/5) + 32)
console.log(cel);
console.log(fah);
