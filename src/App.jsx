import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TriggerRules from './pages/TriggerRules';
import About from './pages/About';
import Login from './pages/Login';
import './App.css';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <Login />;
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <header className="top-bar">
          <div className="page-title-small text-gradient font-bold">DeepFish AI Monitor</div>
          <div className="user-profile">
            <span className="text-secondary text-sm">Welcome, Solopreneur</span>
            <div className="avatar">S</div>
          </div>
        </header>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/rules" element={<TriggerRules />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
