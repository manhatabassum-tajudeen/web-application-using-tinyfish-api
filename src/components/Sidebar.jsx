import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Zap, Info, LogOut, Activity, X } from 'lucide-react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { path: '/rules', label: 'Trigger Rules', icon: <Zap size={18} /> },
    { path: '/about', label: 'About Us', icon: <Info size={18} /> },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Activity size={24} color="var(--accent-blue)" />
          <span className="text-gradient">DeepFish AI</span>
        </div>
        <button className="close-sidebar-btn" onClick={closeSidebar}>
          <X size={24} color="var(--text-secondary)" />
        </button>
      </div>
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={closeSidebar}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
      <div className="sidebar-footer">
        <Link to="/login" className="nav-item text-danger" onClick={closeSidebar}>
          <LogOut size={18} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
