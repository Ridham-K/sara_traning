import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/", { replace: true });
  };

  return (

    <header>

      <h2>Dashboard</h2>

      <button onClick={logout}>
        Logout
      </button>

    </header>

  );
}

export default Header;