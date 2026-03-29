const papers = [
  {
    title: "SocialOmni",
    fullTitle:
      "SocialOmni: Benchmarking Audio-Visual Social Interactivity in Omni Models",
    year: "2026",
    venue: "arXiv:2603.16859",
    summary:
      "A benchmark for evaluating who speaks, when to interrupt, and how to respond in realistic multimodal dialogue.",
    image:
      "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2603.16859/gradient.png",
    stats: [
      { label: "Perception Samples", value: "2,000" },
      { label: "Diagnostic Set", value: "209" },
      { label: "Core Axes", value: "Who / When / How" },
    ],
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
    title: "Event-Anchored Frame Selection",
    fullTitle: "Event-Anchored Frame Selection for Effective Long-Video Understanding",
    year: "2026",
    venue: "arXiv:2603.00983",
    summary:
      "An event-aware frame selection method that improves query relevance, event coverage, and visual diversity for long-video understanding.",
    image: "",
    stats: [
      { label: "VideoMME", value: "+4.7%" },
      { label: "LongVideoBench", value: "+4.9%" },
      { label: "MLVU", value: "+8.8%" },
    ],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2603.00983" }],
  },
];

const directions = [
  {
    icon: "multimodal",
    title: "Multimodal Research",
    text: "Evaluation of social interaction, long-video understanding, and realistic model behavior.",
  },
  {
    icon: "quant",
    title: "Quantitative Methods",
    text: "Structured decision frameworks, market observation, and disciplined research workflows.",
  },
  {
    icon: "systems",
    title: "Software Systems",
    text: "Research tooling, data infrastructure, and dependable implementation from prototype to delivery.",
  },
];

const focus = [
  {
    icon: "signal",
    text: "Benchmarking multimodal systems under realistic interaction settings",
  },
  {
    icon: "market",
    text: "Studying structured approaches for cryptocurrency market research",
  },
  {
    icon: "stack",
    text: "Building lightweight tools that connect data, models, and evaluation",
  },
];

const quickFacts = [
  { label: "Selected Papers", value: "2" },
  { label: "Public Research Assets", value: "Scholar + Code + Dataset" },
  { label: "Theme", value: "Research x Systems x Quant" },
];

function Icon({ type }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (type) {
    case "multimodal":
      return (
        <svg {...props}>
          <rect x="3.5" y="5" width="7" height="14" rx="2" />
          <rect x="13.5" y="8" width="7" height="8" rx="2" />
          <path d="M10.5 12h3" />
        </svg>
      );
    case "quant":
      return (
        <svg {...props}>
          <path d="M4 18V6" />
          <path d="M9 18v-4" />
          <path d="M14 18V9" />
          <path d="M19 18v-7" />
          <path d="M3 18h18" />
        </svg>
      );
    case "systems":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="6" rx="2" />
          <rect x="4" y="14" width="16" height="6" rx="2" />
          <path d="M8 7h.01" />
          <path d="M8 17h.01" />
        </svg>
      );
    case "signal":
      return (
        <svg {...props}>
          <path d="M4 16l4-4 3 3 6-7" />
          <path d="M19 8h-4V4" />
        </svg>
      );
    case "market":
      return (
        <svg {...props}>
          <path d="M4 18h16" />
          <path d="M7 15V9" />
          <path d="M12 15V6" />
          <path d="M17 15v-3" />
        </svg>
      );
    case "stack":
      return (
        <svg {...props}>
          <path d="M12 4l8 4-8 4-8-4 8-4Z" />
          <path d="M4 12l8 4 8-4" />
          <path d="M4 16l8 4 8-4" />
        </svg>
      );
    case "scholar":
      return (
        <svg {...props}>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="M7 10v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4" />
        </svg>
      );
    case "github":
      return (
        <svg {...props}>
          <path d="M9 18c-4 1.2-4-2-6-2" />
          <path d="M15 22v-3.1c0-1 .1-1.4-.5-2 2.2-.2 4.5-1.1 4.5-5A3.9 3.9 0 0 0 18 9.2 3.6 3.6 0 0 0 18 6.5S17.2 6.3 15 7.8a7.5 7.5 0 0 0-6 0C6.8 6.3 6 6.5 6 6.5a3.6 3.6 0 0 0 0 2.7A3.9 3.9 0 0 0 5 12c0 3.9 2.3 4.8 4.5 5-.6.6-.6 1.1-.5 2V22" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
}

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
            <div className="hero-orbit hero-orbit-blue" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-red" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-yellow" aria-hidden="true" />
            <div className="panel-card">
              <p className="panel-label">Current orientation</p>
              <p className="panel-value">Researcher · Builder · Independent</p>
            </div>
            <div className="panel-card">
              <p className="panel-label">Primary themes</p>
              <p className="panel-value">
                Multimodal evaluation · Quant methods · Infrastructure
              </p>
            </div>
          </div>
        </div>

        <div className="fact-strip">
          {quickFacts.map((item) => (
            <div key={item.label} className="fact-item">
              <span className="fact-label">{item.label}</span>
              <span className="fact-value">{item.value}</span>
            </div>
          ))}
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
                <div className="direction-icon">
                  <Icon type={item.icon} />
                </div>
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
            {papers.map((paper, index) => (
              <article key={paper.title} className="paper-item">
                <div className="paper-visual">
                  {paper.image ? (
                    <img src={paper.image} alt={paper.title} className="paper-image" />
                  ) : (
                    <div className="paper-graphic" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  )}
                </div>
                <div className="paper-body">
                  <div className="paper-meta">
                    <span>{paper.year}</span>
                    <span>{paper.venue}</span>
                  </div>
                  <h3>{paper.fullTitle}</h3>
                  <p>{paper.summary}</p>
                  <div className="paper-stats">
                    {paper.stats.map((item) => (
                      <div key={item.label} className="paper-stat">
                        <span>{item.value}</span>
                        <small>{item.label}</small>
                      </div>
                    ))}
                  </div>
                  <div className="paper-links">
                    {paper.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className={`paper-accent paper-accent-${index + 1}`} aria-hidden="true" />
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
              <div key={item.text} className="focus-item">
                <span className="focus-icon">
                  <Icon type={item.icon} />
                </span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-connect">
          <div className="section-heading">
            <p className="section-kicker">Connect</p>
            <h2>Open channels for research and collaboration.</h2>
          </div>
          <div className="connect-grid">
            <a
              className="connect-item"
              href="https://scholar.google.com/citations?user=_vZWAnkAAAAJ&hl=zh-CN"
              target="_blank"
              rel="noreferrer"
            >
              <span className="connect-icon">
                <Icon type="scholar" />
              </span>
              <div>
                <strong>Google Scholar</strong>
                <p>Publications, citations, and research record.</p>
              </div>
            </a>
            <a
              className="connect-item"
              href="https://github.com/Alexisxty"
              target="_blank"
              rel="noreferrer"
            >
              <span className="connect-icon">
                <Icon type="github" />
              </span>
              <div>
                <strong>GitHub</strong>
                <p>Code, experiments, and implementation artifacts.</p>
              </div>
            </a>
            <a className="connect-item" href="mailto:alexisty233@gmail.com">
              <span className="connect-icon">
                <Icon type="mail" />
              </span>
              <div>
                <strong>Email</strong>
                <p>Direct contact for research, projects, and collaboration.</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
