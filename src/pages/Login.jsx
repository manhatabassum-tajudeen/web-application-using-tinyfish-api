import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Key } from 'lucide-react';

const Login = () => {
  const [apiKey, setApiKey] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (apiKey) {
      // In a real app we would validate the key. For this demo, just navigate.
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-bg-glow"></div>
      <div className="glass-panel login-box animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>DeepFish AI</h1>
          <p className="text-secondary">Autonomous Data Monitoring</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="input-label">TinyFish API Key</label>
            <div style={{ position: 'relative' }}>
               <Key size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
               <input
                 type="password"
                 className="input-field"
                 placeholder="sk-tinyfish-..."
                 value={apiKey}
                 onChange={(e) => setApiKey(e.target.value)}
                 style={{ paddingLeft: '2.5rem' }}
                 required
               />
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Authenticate & Override
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
