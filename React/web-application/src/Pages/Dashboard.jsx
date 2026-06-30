import { useEffect, useState } from "react";

function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUsername(user.username);
    }
  }, []);

  return (
    <>
      <h1>Dashboard</h1>

      <div className="card">
        <h2>Welcome, {username}!</h2>
        <p>This is your dashboard.</p>
      </div>
    </>
  );
}

export default Dashboard;