'use client';

import { useMemo, useState } from 'react';

const componentCards = [
  {
    title: 'Buttons',
    description: 'Primary, secondary, and subtle actions for high-clarity navigation.',
    type: 'Static',
  },
  {
    title: 'Stats + Cards',
    description: 'Quick visual hierarchy for metrics, milestones, and team updates.',
    type: 'Static',
  },
  {
    title: 'Tabs',
    description: 'Chunk content into digestible contexts without leaving the page.',
    type: 'Interactive',
  },
  {
    title: 'Accordion',
    description: 'Progressive disclosure for FAQs, setup guides, or onboarding notes.',
    type: 'Interactive',
  },
  {
    title: 'Modal',
    description: 'Focus user attention for critical actions and confirmations.',
    type: 'Interactive',
  },
  {
    title: 'Toast',
    description: 'Instant feedback when users save, publish, or update preferences.',
    type: 'Interactive',
  },
];

const tabContent = {
  dashboard: 'Use cards, charts, and quick actions to provide an at-a-glance command center.',
  workspace: 'Pair tabs with side panels and filters to keep collaborative workflows clear.',
  settings: 'Use forms, toggles, and confirmation toasts to build trust in preferences.',
};

const faqItems = [
  {
    question: 'What makes a component "best" for modern products?',
    answer:
      'It should be accessible, responsive, fast, and predictable under real usage patterns.',
  },
  {
    question: 'Should we use static and interactive blocks together?',
    answer:
      'Yes. Static components carry clarity while interactive components add control and speed.',
  },
  {
    question: 'How many variants should each component have?',
    answer:
      'Start with 2–3 purposeful variants and expand only when a clear user need emerges.',
  },
];

export default function UIComponentsPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [openFAQ, setOpenFAQ] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toastLabel = useMemo(
    () => (showToast ? 'Saved! Your component preset is now active.' : ''),
    [showToast],
  );

  const triggerToast = () => {
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <main className="componentPage">
      <header className="panel">
        <p className="eyebrow">UI Component Library</p>
        <h1>Interactive + Static Showcase</h1>
        <p>
          A single page that demonstrates foundational components for a polished,
          production-ready interface.
        </p>
        <a href="/" className="btn btnGhost">Back to Home</a>
      </header>

      <section className="panel">
        <h2>Static Components</h2>
        <div className="componentGrid">
          {componentCards.map((card) => (
            <article key={card.title} className="componentCard">
              <span className={`chip ${card.type === 'Interactive' ? 'chipInteractive' : 'chipStatic'}`}>
                {card.type}
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="buttonRow">
                <button type="button" className="btn btnPrimary">Primary</button>
                <button type="button" className="btn btnGhost">Secondary</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Interactive Components</h2>

        <div className="interactiveBlock">
          <h3>Tabs</h3>
          <div className="tabRow" role="tablist" aria-label="Component contexts">
            {Object.keys(tabContent).map((key) => (
              <button
                key={key}
                type="button"
                className={`tabBtn ${activeTab === key ? 'tabBtnActive' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {key}
              </button>
            ))}
          </div>
          <p className="tabPanel">{tabContent[activeTab]}</p>
        </div>

        <div className="interactiveBlock">
          <h3>Accordion</h3>
          {faqItems.map((item, idx) => (
            <div key={item.question} className="accordionItem">
              <button
                type="button"
                className="accordionBtn"
                onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
              >
                {item.question}
              </button>
              {openFAQ === idx && <p className="accordionContent">{item.answer}</p>}
            </div>
          ))}
        </div>

        <div className="interactiveBlock">
          <h3>Modal + Toast</h3>
          <div className="buttonRow">
            <button type="button" className="btn btnPrimary" onClick={() => setShowModal(true)}>
              Open Modal
            </button>
            <button type="button" className="btn btnGhost" onClick={triggerToast}>
              Trigger Toast
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modalOverlay" role="presentation" onClick={() => setShowModal(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Component setup confirmation"
            onClick={(event) => event.stopPropagation()}
          >
            <h3>Activate UI Preset?</h3>
            <p>This applies your selected component style guide to the workspace.</p>
            <div className="buttonRow">
              <button type="button" className="btn btnPrimary" onClick={() => setShowModal(false)}>
                Confirm
              </button>
              <button type="button" className="btn btnGhost" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showToast && <p className="toast" role="status">{toastLabel}</p>}
    </main>
  );
}
