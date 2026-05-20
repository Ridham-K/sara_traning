// 5. Extract only usernames from user objects.

const user = [
    {username : "sara", city: "Ahmedabad"},
    {username : "Siya", city: "Surat"},
    {username : "Janki", city: "Bharuch"}
];

console.log(user);

const uname = user.map(name => name.username);
console.log(uname);