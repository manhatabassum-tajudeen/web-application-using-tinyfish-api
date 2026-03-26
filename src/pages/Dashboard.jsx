import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown, Activity, Users, AlertCircle } from 'lucide-react';

const data = [
  { time: '10:00', price: 120, baseline: 110 },
  { time: '11:00', price: 118, baseline: 110 },
  { time: '12:00', price: 115, baseline: 110 },
  { time: '13:00', price: 105, baseline: 110 },
  { time: '14:00', price: 95,  baseline: 110 },
  { time: '15:00', price: 92,  baseline: 110 },
];

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Monitoring Dashboard</h1>
        <p className="page-subtitle">Real-time surveillance of competitor activities and system anomalies.</p>
      </div>

      <div className="grid-3">
         <div className="glass-panel stat-card">
           <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span className="stat-label">Active Agents</span>
              <Activity size={18} color="var(--accent-blue)" />
           </div>
           <div className="stat-value">24</div>
           <div style={{ color: 'var(--success)', fontSize: '0.875rem' }}>↑ 12 online in last hr</div>
         </div>
         <div className="glass-panel stat-card">
           <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span className="stat-label">Price Shifts Detected</span>
              <TrendingDown size={18} color="var(--warning)" />
           </div>
           <div className="stat-value">134</div>
           <div style={{ color: 'var(--danger)', fontSize: '0.875rem' }}>Competitor average dropping</div>
         </div>
         <div className="glass-panel stat-card">
           <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span className="stat-label">Data Points Extracted</span>
              <Users size={18} color="var(--accent-gold)" />
           </div>
           <div className="stat-value">8,342</div>
           <div style={{ color: 'var(--success)', fontSize: '0.875rem' }}>Automated fetch healthy</div>
         </div>
      </div>

      <div className="grid-2" style={{ marginTop: '1.5rem' }}>
        <div className="glass-panel">
          <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Competitor Price Trend (Acme Corp)</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="time" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-surface-elevated)', border: '1px solid var(--border-color)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="price" stroke="var(--accent-blue)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="baseline" stroke="var(--accent-gold)" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel">
          <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Recent System Logs</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'var(--bg-base)', borderRadius: '8px', borderLeft: '3px solid var(--accent-blue)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Rule Triggered: Price Undercut</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>10 mins ago</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Competitor X lowered price below threshold. Email alert dispatched.</p>
            </div>
            <div style={{ padding: '0.75rem', background: 'var(--bg-base)', borderRadius: '8px', borderLeft: '3px solid var(--warning)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Warning: Web Scrape Timeout</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>45 mins ago</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Retry mechanism engaged for Target Site B. Attempt 2/3.</p>
            </div>
            <div style={{ padding: '0.75rem', background: 'var(--bg-base)', borderRadius: '8px', borderLeft: '3px solid var(--success)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Agent Cluster Sync Complete</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2 hrs ago</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>All worker nodes updated with latest extraction templates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
