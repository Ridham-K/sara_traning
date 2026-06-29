let users = [
    {id:1, name:"Jayesh"},
    {id:2, name:"Raj"}
];

localStorage.setItem(
    "users",
    JSON.stringify(users)
);

let usersData =
    JSON.parse(localStorage.getItem("users"));

console.log(usersData);