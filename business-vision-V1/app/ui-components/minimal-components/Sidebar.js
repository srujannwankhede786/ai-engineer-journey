'use client';

import { useState } from 'react';

const NAV = [
  {
    group: 'MAIN',
    items: [
      { label: 'Dashboard', icon: '▦', href: '/' },
      { label: 'Analytics', icon: '◈', href: '/analytics' },
      { label: 'Projects', icon: '◧', href: '/projects', badge: '4' },
    ],
  },
  {
    group: 'MANAGE',
    items: [
      { label: 'Team', icon: '◉', href: '/team' },
      { label: 'Files', icon: '◫', href: '/files' },
      { label: 'Settings', icon: '◎', href: '/settings' },
    ],
  },
];

export default function Sidebar({ isOpen }) {
  const [active, setActive] = useState('/');

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav className="nav">
        {NAV.map(section => (
          <div key={section.group} className="section">
            <div className="group-label">{section.group}</div>
            {section.items.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-item ${active === item.href ? 'active' : ''}`}
                onClick={e => { e.preventDefault(); setActive(item.href); }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </a>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-pill">
          <div className="user-dot" />
          <span>akira.k</span>
        </div>
        <button className="logout-btn" aria-label="Logout">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 56px; left: 0; bottom: 0;
          width: 220px;
          background: #0a0a0e;
          border-right: 1px solid #1a1a22;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
          z-index: 90;
          font-family: 'DM Mono', 'Fira Code', monospace;
          overflow: hidden;
        }
        .sidebar.closed { transform: translateX(-100%); }
        .sidebar.open  { transform: translateX(0); }

        .nav { flex: 1; padding: 20px 12px; overflow-y: auto; }
        .section { margin-bottom: 28px; }
        .group-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          color: #333;
          padding: 0 10px;
          margin-bottom: 6px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 6px;
          color: #555;
          text-decoration: none;
          font-size: 12px;
          transition: background 0.15s, color 0.15s;
          position: relative;
          cursor: pointer;
        }
        .nav-item:hover { background: #13131a; color: #aaa; }
        .nav-item.active {
          background: #12121f;
          color: #9898ff;
        }
        .nav-item.active::before {
          content: '';
          position: absolute;
          left: 0; top: 25%; bottom: 25%;
          width: 2px;
          background: #4f4fff;
          border-radius: 0 2px 2px 0;
        }
        .nav-icon { font-size: 14px; line-height: 1; opacity: 0.9; }
        .nav-label { flex: 1; }
        .nav-badge {
          font-size: 9px;
          background: #1e1e30;
          color: #6666cc;
          border-radius: 4px;
          padding: 1px 5px;
          font-weight: 700;
        }

        .sidebar-footer {
          padding: 14px 16px;
          border-top: 1px solid #141420;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .user-pill {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          color: #444;
          font-family: 'DM Mono', monospace;
        }
        .user-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3a3;
          flex-shrink: 0;
        }
        .logout-btn {
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
          padding: 4px;
          transition: color 0.2s;
        }
        .logout-btn:hover { color: #888; }
      `}</style>
    </aside>
  );
}