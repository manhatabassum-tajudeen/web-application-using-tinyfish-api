import { useState, useRef } from 'react';
import { PlusCircle, Search, Target, Bell, Settings2, Play } from 'lucide-react';

const TriggerRules = () => {
  const formRef = useRef(null);
  
  const [rules, setRules] = useState([
    {
      id: 1,
      target: 'Competitor Acme drops Price',
      condition: 'Price < $100',
      action: 'Send SMS Alert & Log Action',
      status: 'active',
      iconType: 'target'
    },
    {
      id: 2,
      target: 'Site B Product Launch',
      condition: 'Detect New Element',
      action: 'Trigger Full Site Scrape',
      status: 'inactive',
      iconType: 'search'
    }
  ]);

  const [formData, setFormData] = useState({
    url: '',
    selector: '',
    evaluation: 'Less Than',
    threshold: ''
  });

  const handleNewPipelineClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // add a brief highlight effect
      formRef.current.style.boxShadow = '0 0 20px var(--accent-blue)';
      setTimeout(() => {
        if (formRef.current) formRef.current.style.boxShadow = 'var(--shadow-card)';
      }, 1500);
    }
  };

  const handleDeploy = () => {
    if (!formData.url || !formData.selector) {
       alert("Please fill in the Data Source Target URL and Extracted Element Selector.");
       return;
    }

    const newRule = {
      id: Date.now(),
      target: `Monitor ${new URL(formData.url).hostname || formData.url}`,
      condition: `${formData.selector} ${formData.evaluation} ${formData.threshold}`,
      action: 'Send UI Alert & Log Action',
      status: 'active',
      iconType: 'target'
    };

    setRules([newRule, ...rules]);
    setFormData({ url: '', selector: '', evaluation: 'Less Than', threshold: '' }); // reset form
    
    // scroll back to top to see new rule
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderIcon = (type) => {
    if (type === 'search') return <Search size={16} color="var(--text-muted)" />;
    return <Target size={16} color="var(--text-muted)" />;
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Trigger Logic Engine</h1>
          <p className="page-subtitle">Configure "If-This-Then-That" parameters for automated responses to market shifts.</p>
        </div>
        <button className="btn-primary" onClick={handleNewPipelineClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <PlusCircle size={18} />
          <span>New Pipeline</span>
        </button>
      </div>

      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
          <Settings2 size={18} color="var(--accent-blue)" /> Active Operational Rules
        </h3>
        
        {rules.map((rule, idx) => (
          <div key={rule.id} className="rule-builder animate-fade-in" style={{ borderLeft: `3px solid ${rule.status === 'active' ? 'var(--accent-blue)' : 'var(--accent-gold)'}`, marginTop: idx > 0 ? '1rem' : '0' }}>
            <div style={{ flex: 1, display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-gold)' }}>IF</span>
                {renderIcon(rule.iconType)}
                <span>{rule.target}</span>
              </span>
              <span className="rule-connector">&gt;&gt;</span>
              <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-gold)' }}>AND</span>
                <span>{rule.condition}</span>
              </span>
              <span className="rule-connector">&gt;&gt;</span>
              <span className="rule-badge" style={{ background: 'var(--bg-surface-elevated)', padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--accent-blue-dim)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: rule.status === 'active' ? 'var(--accent-blue)' : '#fff' }}>
                <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>THEN</span>
                {rule.iconType === 'search' ? <Play size={16} color="var(--accent-blue)" /> : <Bell size={16} />}
                <span>{rule.action}</span>
              </span>
            </div>
            <div>
              <span className={`status-badge ${rule.status === 'active' ? 'active' : 'inactive'}`}>
                {rule.status === 'active' ? 'Active Worker' : 'Paused'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        <div className="glass-panel" ref={formRef} style={{ transition: 'box-shadow 0.3s ease' }}>
           <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Condition Parameters</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div className="form-group" style={{ marginBottom: 0 }}>
                 <label className="input-label">Data Source Target URL</label>
                 <input 
                   type="text" 
                   className="input-field" 
                   placeholder="https://competitor.com/product"
                   value={formData.url}
                   onChange={e => setFormData({...formData, url: e.target.value})}
                 />
               </div>
               <div className="form-group" style={{ marginBottom: 0 }}>
                 <label className="input-label">Extracted Element Selector (CSS/XPath)</label>
                 <input 
                   type="text" 
                   className="input-field" 
                   placeholder=".price-tag-value"
                   value={formData.selector}
                   onChange={e => setFormData({...formData, selector: e.target.value})}
                 />
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                 <div className="form-group" style={{ marginBottom: 0 }}>
                   <label className="input-label">Evaluation Logic</label>
                   <select 
                     className="input-field" 
                     style={{ appearance: 'none' }}
                     value={formData.evaluation}
                     onChange={e => setFormData({...formData, evaluation: e.target.value})}
                   >
                     <option value="Less Than">Less Than</option>
                     <option value="Greater Than">Greater Than</option>
                     <option value="Contains Text">Contains Text</option>
                     <option value="Equals">Equals</option>
                   </select>
                 </div>
                 <div className="form-group" style={{ marginBottom: 0 }}>
                   <label className="input-label">Threshold Value</label>
                   <input 
                     type="text" 
                     className="input-field" 
                     placeholder="99.99"
                     value={formData.threshold}
                     onChange={e => setFormData({...formData, threshold: e.target.value})}
                   />
                 </div>
               </div>
               <button className="btn-primary" onClick={handleDeploy} style={{ marginTop: '0.5rem', width: '100%' }}>
                 Deploy Pipeline Worker
               </button>
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
