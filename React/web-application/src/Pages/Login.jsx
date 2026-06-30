import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();

  const user = users.find(
    (u) =>
      u.username.trim() === username.trim() &&
      u.password.trim() === password.trim()
  );

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  } else {
    setError("Invalid Username or Password");
  }
};

  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;