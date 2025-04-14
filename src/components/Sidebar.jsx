import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState('');

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <div className="bg-dark text-white min-vh-100 p-3" style={{ width: '250px' }}>
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">

        <li className="nav-item">
          <Link to="/dashboard" className={`nav-link text-white ${location.pathname === "/dashboard" ? "active bg-secondary" : ""}`}>
          <i className="fa-solid fa-gauge"></i> &nbsp; Dashboard
          </Link>
        </li>

        {/* Users Menu */}
        <li className="nav-item">
          <button
            className="nav-link text-white w-100 text-start d-flex justify-content-between align-items-center"
            onClick={() => handleToggle('users')}
            aria-expanded={openMenu === 'users'}
          >
            Users
            <i className={`fa-solid fa-chevron-down transition ${openMenu === 'users' ? 'rotate-180' : ''}`}></i>
          </button>
          <ul className={`nav flex-column ms-3 collapse ${openMenu === 'users' ? 'show' : ''}`}>
            <li className="nav-item">
              <Link to="/dashboard/users" className={`nav-link text-white ${location.pathname === "/dashboard/users" ? "active bg-secondary" : ""}`}>
                <i className="fa-solid fa-circle-dot"></i> &nbsp; All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/users/create" className={`nav-link text-white ${location.pathname === "/dashboard/users/create" ? "active bg-secondary" : ""}`}>
                <i className="fa-solid fa-circle-dot"></i> &nbsp; Create User
              </Link>
            </li>
          </ul>
        </li>

        {/* Settings Menu */}
        <li className="nav-item">
          <button
            className="nav-link text-white w-100 text-start d-flex justify-content-between align-items-center"
            onClick={() => handleToggle('settings')}
            aria-expanded={openMenu === 'settings'}
          >
            Settings
            <i className={`fa-solid fa-chevron-down transition ${openMenu === 'settings' ? 'rotate-180' : ''}`}></i>
          </button>
          <ul className={`nav flex-column ms-3 collapse ${openMenu === 'settings' ? 'show' : ''}`}>
            <li className="nav-item">
              <Link to="/dashboard/settings/profile" className={`nav-link text-white ${location.pathname === "/dashboard/settings/profile" ? "active bg-secondary" : ""}`}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/settings/security" className={`nav-link text-white ${location.pathname === "/dashboard/settings/security" ? "active bg-secondary" : ""}`}>
                Security
              </Link>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
