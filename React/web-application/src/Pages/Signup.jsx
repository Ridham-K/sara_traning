import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const showSnackbar = (msg, type) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Password Validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
      showSnackbar(
        "Password must be at least 8 characters and contain uppercase, lowercase, number and special character.",
        "error"
      );
      return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      showSnackbar("Passwords do not match.", "error");
      return;
    }

    // Fetch Existing Users
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    // Check Username
    const usernameExists = users.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase()
    );

    if (usernameExists) {
      showSnackbar("Username already exists.", "error");
      return;
    }

    // Check Email
    const emailExists = users.find(
      (user) =>
        user.email &&
        user.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      showSnackbar("Email already exists.", "error");
      return;
    }

    // Save User
    await fetch("http://localhost:3000/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });

    showSnackbar("Signup Successful!", "success");

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="login">
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

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
          minLength={8}
          required
        />

        <input
          type="password"
          placeholder="Re-type Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength={8}
          required
        />

        <button type="submit">Signup</button>

        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Signup;