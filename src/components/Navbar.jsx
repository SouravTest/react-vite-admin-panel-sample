// components/Navbar.jsx
const Navbar = ({ toggleSidebar , response }) => {  
  console.log(response);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-3 d-flex justify-content-between align-items-center">
      {/* Sidebar Toggle (Left) */}
      <button className="btn btn-outline-light me-2" onClick={toggleSidebar}>
        {!response ?  <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>  }
        
      </button>

      {/* Center: Admin name */}
      <div className="text-white fw-bold text-center flex-grow-1">
        Welcome, <span className="text-warning">Admin</span>
      </div>

      {/* Right Side: Notifications + Dropdown */}
      <div className="d-flex align-items-center gap-3">
        {/* Notifications */}
        <button className="btn btn-outline-light position-relative">
          <i className="fa-solid fa-bell"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
        </button>

        {/* Mail */}
        <button className="btn btn-outline-light position-relative">
          <i className="fa-solid fa-envelope"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
        </button>

        {/* Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-outline-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="/dashboard/settings">
                <i className="fa-solid fa-gear me-2"></i>Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
