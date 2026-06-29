import { useEffect, useState } from "react";

function Settings() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUsername(user.username);
      setPassword(user.password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        username,
        password,
      })
    );

    alert("Profile Updated Successfully");
  };

  return (
    <>
      <h1>Settings</h1>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>Username</label>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Update</button>
        </form>
      </div>
    </>
  );
}

export default Settings;