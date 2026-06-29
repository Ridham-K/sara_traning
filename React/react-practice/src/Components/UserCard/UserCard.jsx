// function UserCard(props) {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <p>{props.role}</p>
//     </div>
//   );
// }

// export default UserCard;

function UserCard({
  name,
  role = "Member",
  isActive = false
}) {
  return (
    <div className="user-card">
      <span>
        {isActive ? " Active" : "Inactive"}
      </span>

      <h3>{name}</h3>

      <p>{role}</p>
    </div>
  );
}

export default UserCard;