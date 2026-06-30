import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setUser(data);
    }
  }, []);
  return (
    <>
      <h1>Profile</h1>

      <div className="card">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Password:</strong> {user.password}</p>
        <p><strong>Email Address:</strong> {user.email}</p>
      </div>
    </>
  );
}

export default Profile;