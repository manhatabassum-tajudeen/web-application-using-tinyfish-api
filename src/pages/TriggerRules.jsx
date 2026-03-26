import { PlusCircle, Search, Target, Bell, Settings2, Play } from 'lucide-react';

const TriggerRules = () => {
  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Trigger Logic Engine</h1>
          <p className="page-subtitle">Configure "If-This-Then-That" parameters for automated responses to market shifts.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <PlusCircle size={18} />
          <span>New Pipeline</span>
        </button>
      </div>

      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
          <Settings2 size={18} color="var(--accent-blue)" /> Active Operational Rules
        </h3>
        
        <div className="rule-builder" style={{ borderLeft: '3px solid var(--accent-blue)' }}>
           <div style={{ flex: 1, display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
             <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ color: 'var(--accent-gold)' }}>IF</span>
               <Target size={16} color="var(--text-muted)" />
               <span>Competitor Acme drops Price</span>
             </span>
             <span className="rule-connector">&gt;&gt;</span>
             <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ color: 'var(--accent-gold)' }}>AND</span>
               <span>Price &lt; $100</span>
             </span>
             <span className="rule-connector">&gt;&gt;</span>
             <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--accent-blue-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)' }}>
               <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>THEN</span>
               <Bell size={16} />
               <span>Send SMS Alert & Log Action</span>
             </span>
           </div>
           <div>
             <span className="status-badge active">Active Worker</span>
           </div>
        </div>

        <div className="rule-builder" style={{ borderLeft: '3px solid var(--accent-gold)' }}>
           <div style={{ flex: 1, display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
             <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <span style={{ color: 'var(--accent-gold)' }}>IF</span>
               <Search size={16} color="var(--text-muted)" />
               <span>Site B Product Launch</span>
             </span>
             <span className="rule-connector">&gt;&gt;</span>
             <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--accent-blue-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
               <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>THEN</span>
               <Play size={16} color="var(--accent-blue)" />
               <span>Trigger Full Site Scrape</span>
             </span>
           </div>
           <div>
             <span className="status-badge inactive">Paused</span>
           </div>
        </div>

      </div>

      <div className="grid-2">
        <div className="glass-panel">
           <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Condition Parameters</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div className="form-group" style={{ marginBottom: 0 }}>
                 <label className="input-label">Data Source Target URL</label>
                 <input type="text" className="input-field" placeholder="https://competitor.com/product" />
               </div>
               <div className="form-group" style={{ marginBottom: 0 }}>
                 <label className="input-label">Extracted Element Selector (CSS/XPath)</label>
                 <input type="text" className="input-field" placeholder=".price-tag-value" />
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                 <div className="form-group" style={{ marginBottom: 0 }}>
                   <label className="input-label">Evaluation Logic</label>
                   <select className="input-field" style={{ appearance: 'none' }}>
                     <option>Less Than</option>
                     <option>Greater Than</option>
                     <option>Contains Text</option>
                   </select>
                 </div>
                 <div className="form-group" style={{ marginBottom: 0 }}>
                   <label className="input-label">Threshold Value</label>
                   <input type="number" className="input-field" placeholder="99.99" />
                 </div>
               </div>
           </div>
        </div>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1rem', borderStyle: 'dashed', background: 'transparent' }}>
            <Settings2 size={48} color="var(--border-color)" />
            <div>
              <h3 style={{ color: 'var(--text-secondary)' }}>Advanced Neural Connectors</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem', maxWidth: '300px', margin: '0.5rem auto 0' }}>Connect TinyFish LLMs to parse unstructured web data automatically before evaluating trigger conditions.</p>
            </div>
            <button className="btn-secondary" style={{ marginTop: '1rem' }}>Enable A.I. Parsing Engine</button>
        </div>
      </div>
    </div>
  );
};

export default TriggerRules;
