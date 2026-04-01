'use client';

import { useState } from 'react';

export default function Header({ onMenuToggle }) {
  const [search, setSearch] = useState('');

  return (
    <header className="header">
      <button className="menu-btn" onClick={onMenuToggle} aria-label="Toggle sidebar">
        <span /><span /><span />
      </button>

      <div className="wordmark">NEXUS</div>

      <div className="search-wrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
      </div>

      <div className="header-actions">
        <button className="icon-btn" aria-label="Notifications">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="badge" />
        </button>
        <div className="avatar">AK</div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 56px;
          background: #0e0e11;
          border-bottom: 1px solid #1e1e24;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 20px;
          z-index: 100;
          font-family: 'DM Mono', 'Fira Code', monospace;
        }
        .menu-btn {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .menu-btn span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #888;
          transition: background 0.2s;
        }
        .menu-btn:hover span { background: #fff; }

        .wordmark {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: #e8e8f0;
          white-space: nowrap;
        }
        .search-wrap {
          flex: 1;
          max-width: 320px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #16161b;
          border: 1px solid #252530;
          border-radius: 6px;
          padding: 0 12px;
          color: #555;
          transition: border-color 0.2s;
        }
        .search-wrap:focus-within {
          border-color: #4f4fff;
          color: #888;
        }
        .search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: #c8c8d8;
          font-size: 12px;
          font-family: inherit;
          height: 32px;
        }
        .search-input::placeholder { color: #444; }

        .header-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          padding: 4px;
          transition: color 0.2s;
        }
        .icon-btn:hover { color: #ccc; }
        .badge {
          position: absolute;
          top: 2px; right: 2px;
          width: 6px; height: 6px;
          background: #4f4fff;
          border-radius: 50%;
          border: 1.5px solid #0e0e11;
        }
        .avatar {
          width: 30px; height: 30px;
          border-radius: 6px;
          background: #1e1e30;
          border: 1px solid #2e2e40;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #8888cc;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}