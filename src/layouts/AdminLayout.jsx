import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';


const AdminLayout = () => {
  return (
    <div className="admin-container" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: '1rem' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
