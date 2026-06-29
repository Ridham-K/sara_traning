import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside>

      <NavLink to="/dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/dashboard/profile">
        Profile
      </NavLink>

      <NavLink to="/dashboard/reports">
        Reports
      </NavLink>

      <NavLink to="/dashboard/settings">
        Settings
      </NavLink>

    </aside>
  );
}

export default Sidebar;