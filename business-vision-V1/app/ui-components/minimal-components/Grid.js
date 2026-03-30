'use client';

// Sample data — replace with your own props/fetch
const CARDS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Project ${String(i + 1).padStart(2, '0')}`,
  tag: ['Design', 'Dev', 'Data', 'Infra'][i % 4],
  status: ['active', 'review', 'done'][i % 3],
  progress: Math.round(20 + Math.random() * 75),
  updated: `${i + 1}d ago`,
}));

const STATUS_COLOR = { active: '#4f4fff', review: '#f5a623', done: '#3a9' };

export default function Grid() {
  return (
    <div className="grid-wrap">
      <div className="grid-header">
        <h2 className="grid-title">Projects</h2>
        <span className="grid-count">{CARDS.length} total</span>
      </div>

      <div className="grid">
        {CARDS.map(card => (
          <div key={card.id} className="card">
            <div className="card-top">
              <span className="card-tag">{card.tag}</span>
              <span className="card-status" style={{ color: STATUS_COLOR[card.status] }}>
                ● {card.status}
              </span>
            </div>
            <div className="card-title">{card.title}</div>
            <div className="progress-wrap">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${card.progress}%`, background: STATUS_COLOR[card.status] }} />
              </div>
              <span className="progress-pct">{card.progress}%</span>
            </div>
            <div className="card-footer">
              <span className="card-updated">Updated {card.updated}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .grid-wrap {
          font-family: 'DM Mono', 'Fira Code', monospace;
        }
        .grid-header {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 20px;
        }
        .grid-title {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #d0d0e0;
          margin: 0;
        }
        .grid-count {
          font-size: 10px;
          color: #333;
          letter-spacing: 0.1em;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }
        .card {
          background: #0d0d12;
          border: 1px solid #1c1c24;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .card:hover {
          border-color: #2e2e45;
          transform: translateY(-2px);
        }
        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .card-tag {
          font-size: 9px;
          letter-spacing: 0.15em;
          color: #444;
          background: #151520;
          padding: 2px 7px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .card-status {
          font-size: 9px;
          letter-spacing: 0.05em;
          text-transform: lowercase;
        }
        .card-title {
          font-size: 13px;
          font-weight: 600;
          color: #c8c8d8;
          letter-spacing: 0.05em;
        }
        .progress-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .progress-bar {
          flex: 1;
          height: 3px;
          background: #1a1a22;
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        .progress-pct {
          font-size: 10px;
          color: #444;
          min-width: 28px;
          text-align: right;
        }
        .card-footer { border-top: 1px solid #141420; padding-top: 10px; }
        .card-updated { font-size: 10px; color: #333; }
      `}</style>
    </div>
  );
}