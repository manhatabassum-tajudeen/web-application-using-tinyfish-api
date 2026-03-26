import { ArrowRight, BrainCircuit, Activity, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <BrainCircuit size={48} color="var(--accent-blue)" style={{ margin: '0 auto 1rem' }} />
        <h1 className="page-title text-gradient">About DeepFish AI</h1>
        <p className="page-subtitle" style={{ fontSize: '1.2rem' }}>Your autonomous web data monitoring agent.</p>
      </div>

      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#fff' }}>
          <Activity size={20} color="var(--accent-blue)" /> The Mission
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
          DeepFish AI was built to solve a critical problem for modern solopreneurs: the immense time cost of manual market research. By connecting multiple automated scrapers and integrating the powerful TinyFish API, we've created a "Set and Forget" utility that autonomously watches your competitors.
        </p>
        <p style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '1.1rem',  display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={20} color="var(--accent-gold)" /> Target Outcome: Reclaim 10+ hours per week.
        </p>
      </div>

      <h2 style={{ margin: '3rem 0 1.5rem', color: '#fff' }}>How to Use the Platform</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-blue)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>1. The Central Dashboard</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Upon logging in, you'll see your dashboard. This provides a high-level view of all active agents. It visualizes competitor price histories over time, tracks metric anomalies, and produces a live system log. Use this space for quick daily checks.
          </p>
        </div>

        <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-gold)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>2. Trigger Rules Engine</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            This is the brain of the operation. Navigate to the <strong>Trigger Rules</strong> page from the sidebar to set up your conditional logic. 
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: '1rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowRight size={14} color="var(--accent-blue)" /> <strong>IF:</strong> Set a tracker on a competitor URL and define the CSS or text element to monitor.</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowRight size={14} color="var(--accent-blue)" /> <strong>AND:</strong> Establish numerical or text conditions (e.g. price drops below $50).</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowRight size={14} color="var(--accent-blue)" /> <strong>THEN:</strong> Choose your notification action—email, SMS, or triggering another task.</li>
          </ul>
        </div>

        <div className="glass-panel" style={{ borderLeft: '4px solid var(--success)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>3. Intelligent API Integration</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Behind the scenes, the TinyFish API powers the data extraction to normalize messy HTML into structured data that the logic engine can reliably parse. To modify your configuration or change your API key, return to the Login portal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
