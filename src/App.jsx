const papers = [
  {
    title: "SocialOmni: Benchmarking Audio-Visual Social Interactivity in Omni Models",
    year: "2026",
    venue: "arXiv:2603.16859",
    summary:
      "A benchmark for evaluating who speaks, when to interrupt, and how to respond in realistic multimodal dialogue.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2603.16859" },
      { label: "Code", href: "https://github.com/MAC-AutoML/SocialOmni" },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/alexisty/SocialOmni",
      },
    ],
  },
  {
    title: "Event-Anchored Frame Selection for Effective Long-Video Understanding",
    year: "2026",
    venue: "arXiv:2603.00983",
    summary:
      "An event-aware frame selection method that improves query relevance, event coverage, and visual diversity for long-video understanding.",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2603.00983" }],
  },
];

const directions = [
  {
    icon: "MM",
    title: "Multimodal Research",
    text: "Evaluation of social interaction, long-video understanding, and realistic model behavior.",
  },
  {
    icon: "QR",
    title: "Quantitative Methods",
    text: "Structured decision frameworks, market observation, and disciplined research workflows.",
  },
  {
    icon: "SS",
    title: "Software Systems",
    text: "Research tooling, data infrastructure, and dependable implementation from prototype to delivery.",
  },
];

const focus = [
  "Benchmarking multimodal systems under realistic interaction settings",
  "Studying structured approaches for cryptocurrency market research",
  "Building lightweight tools that connect data, models, and evaluation",
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">Teery Xie</div>
          <div className="nav-links">
            <a href="https://github.com/Alexisxty" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?user=_vZWAnkAAAAJ&hl=zh-CN"
              target="_blank"
              rel="noreferrer"
            >
              Scholar
            </a>
            <a href="mailto:alexisty233@gmail.com">Email</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Research, systems, and disciplined execution</p>
            <h1>
              Multimodal research and quantitative methods, translated into usable
              software.
            </h1>
            <p className="lead">
              I work on model evaluation, quantitative research, and software
              infrastructure with an emphasis on clarity, reproducibility, and
              real deployment constraints.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://scholar.google.com/citations?user=_vZWAnkAAAAJ&hl=zh-CN"
                target="_blank"
                rel="noreferrer"
              >
                View Publications
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Alexisxty"
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="signal-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="panel-card">
              <p className="panel-label">Current orientation</p>
              <p className="panel-value">Researcher · Builder · Independent</p>
            </div>
            <div className="panel-card">
              <p className="panel-label">Primary themes</p>
              <p className="panel-value">Multimodal evaluation · Quant methods · Infrastructure</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-directions">
          <div className="section-heading">
            <p className="section-kicker">Directions</p>
            <h2>Three threads define the work.</h2>
          </div>
          <div className="direction-list">
            {directions.map((item) => (
              <article key={item.title} className="direction-item">
                <div className="direction-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-papers">
          <div className="section-heading">
            <p className="section-kicker">Selected Publications</p>
            <h2>Recent work and public research artifacts.</h2>
          </div>
          <div className="paper-list">
            {papers.map((paper) => (
              <article key={paper.title} className="paper-item">
                <div className="paper-meta">
                  <span>{paper.year}</span>
                  <span>{paper.venue}</span>
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.summary}</p>
                <div className="paper-links">
                  {paper.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-focus">
          <div className="section-heading">
            <p className="section-kicker">Current Focus</p>
            <h2>What I am working on now.</h2>
          </div>
          <div className="focus-list">
            {focus.map((item) => (
              <div key={item} className="focus-item">
                <span className="focus-mark" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
