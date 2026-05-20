let age = 18;

if(age >= 18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

let num=15;
if(num % 2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}


if(age < 18){
    console.log("Junior");
}
else if(age > 60){
    console.log("senior");
}
else{
    console.log("teen");
}

console.log(age > 18 ? "Vote" : "not vote");


switch (3) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

let num1 = prompt("Enter a number");
if(num1 % 5 == 0){
    console.log("Multiple of 5");
}
else{
    console.log("Not multiple of 5");
}



