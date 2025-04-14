// components/Sidebar.jsx

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Admin Panel</div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
            Dashboard
          </Link>
        </li>

        <li>
          <button onClick={() => toggleMenu("users")} className="submenu-toggle">
            Users
          </button>
          <ul className={`submenu ${openMenu === "users" ? "open" : ""}`}>
            <li>
              <Link to="/dashboard/users" className={location.pathname === "/dashboard/users" ? "active" : ""}>
                All Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users/create" className={location.pathname === "/dashboard/users/create" ? "active" : ""}>
                Create User
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <button onClick={() => toggleMenu("settings")} className="submenu-toggle">
            Settings
          </button>
          <ul className={`submenu ${openMenu === "settings" ? "open" : ""}`}>
            <li>
              <Link to="/dashboard/settings/profile" className={location.pathname === "/dashboard/settings/profile" ? "active" : ""}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings/security" className={location.pathname === "/dashboard/settings/security" ? "active" : ""}>
                Security
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;






// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div style={{ width: '200px', background: '#343a40', color: '#fff', height: '100vh' }}>
//       <h2 style={{ padding: '1rem' }}>Admin Panel</h2>
//       <nav style={{ display: 'flex', flexDirection: 'column', padding: '0 1rem' }}>
//         <Link to="/dashboard" style={{ color: '#fff', padding: '0.5rem 0' }}>Dashboard</Link>
//         <Link to="/dashboard/users" style={{ color: '#fff', padding: '0.5rem 0' }}>Users</Link>
//         <Link to="/dashboard/settings" style={{ color: '#fff', padding: '0.5rem 0' }}>Settings</Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
