// Filter active users from object array.

const users = [
    {id : 1, status: "active"},
    {id : 2, status: "not active"},
    {id : 3, status: "active"}
]

const active = users.filter(a => a.status == "active");
console.log(active);
