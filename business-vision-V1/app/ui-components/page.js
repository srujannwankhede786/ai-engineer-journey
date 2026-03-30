'use client';

import { useState } from 'react';
import Header from './ui-components/minimal-components/Header';
import Sidebar from './ui-components/minimal-components/Sidebar';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, background: '#080810' }}>
        <Header onMenuToggle={() => setSidebarOpen(o => !o)} />
        <Sidebar isOpen={sidebarOpen} />
        <main
          style={{
            marginTop: 56,
            marginLeft: sidebarOpen ? 220 : 0,
            transition: 'margin-left 0.25s cubic-bezier(0.4,0,0.2,1)',
            minHeight: 'calc(100vh - 56px)',
            overflowY: 'auto',
            padding: '32px 28px',
            boxSizing: 'border-box',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}