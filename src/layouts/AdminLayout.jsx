import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';


const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handlehideshowSidebar = () => {
    console.log("sidebarOpen",sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className="d-flex">
      {sidebarOpen && <Sidebar />}
      <div className="flex-grow-1">
        <Navbar toggleSidebar={() =>handlehideshowSidebar()} response={sidebarOpen} />
        <main className="p-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
