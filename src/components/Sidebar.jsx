import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Zap, Info, LogOut, Activity } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { path: '/rules', label: 'Trigger Rules', icon: <Zap size={18} /> },
    { path: '/about', label: 'About Us', icon: <Info size={18} /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Activity size={24} color="var(--accent-blue)" />
        <span className="text-gradient">DeepFish AI</span>
      </div>
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
      <div className="sidebar-footer">
        <Link to="/login" className="nav-item text-danger">
          <LogOut size={18} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
