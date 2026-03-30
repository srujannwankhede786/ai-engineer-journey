const linkButtonLevels = [
  {
    level: "Primary CTA",
    useCase: "Start journaling flow or publish a new entry",
    style: "Solid/high-contrast button",
    expectedLatency: "40–90 ms interaction feedback",
  },
  {
    level: "Secondary Action",
    useCase: "Save draft, open templates, filter by topic",
    style: "Outline button or strong text link",
    expectedLatency: "50–120 ms feedback",
  },
  {
    level: "Tertiary / Utility",
    useCase: "Share, copy link, quick settings",
    style: "Low-emphasis text button/icon link",
    expectedLatency: "60–140 ms feedback",
  },
  {
    level: "Contextual Inline Link",
    useCase: "Cross-reference journal thoughts with tech notes",
    style: "Inline underlined link",
    expectedLatency: "80–180 ms route transition",
  },
];

const widgetComparison = [
  {
    widget: "Rich Text Editor",
    whyUsersLikeIt: "Feels expressive, supports long-form reflection",
    nextJsPattern: "Dynamic import + local autosave",
    latencyTarget: "Input <16 ms, autosave 300–800 ms",
  },
  {
    widget: "Reaction Buttons",
    whyUsersLikeIt: "Fast emotional feedback + community pulse",
    nextJsPattern: "Optimistic UI with server action",
    latencyTarget: "Tap response <100 ms, sync <1.2 s",
  },
  {
    widget: "Tag/Topic Chips",
    whyUsersLikeIt: "Quickly organizes entries by belief/theme",
    nextJsPattern: "Client component + cached suggestions",
    latencyTarget: "Selection response <80 ms",
  },
  {
    widget: "Timeline Feed",
    whyUsersLikeIt: "Shows growth over time and narrative momentum",
    nextJsPattern: "Streaming + incremental static regeneration",
    latencyTarget: "First contentful chunk 600–1500 ms",
  },
  {
    widget: "Search + Filters",
    whyUsersLikeIt: "Instant retrieval of old reflections",
    nextJsPattern: "Debounced query + edge caching",
    latencyTarget: "Perceived response <200 ms",
  },
];

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero panel">
        <p className="eyebrow">Use Your Art</p>
        <h1>Dismantle old beliefs. Build a new journaling language for tech.</h1>
        <p>
          A static Next.js homepage concept for creators, engineers, and thinkers
          who want to transform ideas into intentional action.
        </p>
        <div className="ctaRow">
          <a href="#start" className="btn btnPrimary">Start a Journal Sprint</a>
          <a href="#widgets" className="btn btnGhost">See Widget Stack</a>
        </div>
      </section>

      <section id="start" className="panel">
        <h2>UI link and button levels with latency comparison</h2>
        <p className="sectionLead">
          Keep interaction latency low so every action feels immediate and
          emotionally trustworthy.
        </p>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Best use</th>
                <th>UI pattern</th>
                <th>Latency target</th>
              </tr>
            </thead>
            <tbody>
              {linkButtonLevels.map((item) => (
                <tr key={item.level}>
                  <td>{item.level}</td>
                  <td>{item.useCase}</td>
                  <td>{item.style}</td>
                  <td>{item.expectedLatency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="widgets" className="panel">
        <h2>Most-liked web widgets for this product vision</h2>
        <p className="sectionLead">
          Prioritize familiar widgets that support reflection, continuity, and
          social resonance.
        </p>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Widget</th>
                <th>Why people like it</th>
                <th>Next.js implementation</th>
                <th>Latency guide</th>
              </tr>
            </thead>
            <tbody>
              {widgetComparison.map((item) => (
                <tr key={item.widget}>
                  <td>{item.widget}</td>
                  <td>{item.whyUsersLikeIt}</td>
                  <td>{item.nextJsPattern}</td>
                  <td>{item.latencyTarget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      <section className="panel">
        <h2>UI component showcase index</h2>
        <p className="sectionLead">
          Explore a dedicated page with polished static and interactive UI patterns.
        </p>
        <div className="ctaRow">
          <a href="/ui-components" className="btn btnPrimary">Open UI Components Page</a>
        </div>
      </section>

      <section className="panel manifesto">
        <h2>Homepage narrative</h2>
        <p>
          “Use your art to dismantle old beliefs” becomes a daily ritual: capture
          a thought, challenge it with evidence, and rewrite it into a principle
          you can build with.
        </p>
        <ul>
          <li>Morning prompt: What belief is blocking your next technical leap?</li>
          <li>Midday build log: What did your experiments prove or disprove?</li>
          <li>Evening synthesis: What new belief will you carry into tomorrow?</li>
        </ul>
      </section>
    </main>
  );
}
