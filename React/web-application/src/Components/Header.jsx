import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/");
  };

  return (

    <header>

      <h2>Admin Dashboard</h2>

      <button onClick={logout}>
        Logout
      </button>

    </header>

  );
}

export default Header;