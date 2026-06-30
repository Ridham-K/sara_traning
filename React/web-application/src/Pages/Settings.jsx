import { useEffect, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Settings() {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setId(user.id);
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const showSnackbar = (msg, type) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
      showSnackbar(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.",
        "error"
      );
      return;
    }

    // Update password in db.json
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,
        email,
        username,
        password,
      }),
    });

    if (response.ok) {
      // Update localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          id,
          email,
          username,
          password,
        })
      );

      showSnackbar("Password Updated Successfully!", "success");
    } else {
      showSnackbar("Failed to update password.", "error");
    }
  };

  return (
    <>
      <h1>Settings</h1>

      <div className="card">
        <form onSubmit={handleSubmit}>

          <label>Username</label>

          <input
            type="text"
            value={username}
            readOnly
          />

          <label>New Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Update Password
          </button>

        </form>
      </div>

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
    </>
  );
}

export default Settings;