import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const socialOmniImage = "/Alexisxty/assets/socialomni-gradient.png";

const papers = [
  {
    title: "SocialOmni",
    fullTitle:
      "SocialOmni: Benchmarking Audio-Visual Social Interactivity in Omni Models",
    year: "2026",
    venue: "arXiv:2603.16859",
    summary:
      "A benchmark for evaluating who speaks, when to interrupt, and how to respond in realistic multimodal dialogue.",
    image: socialOmniImage,
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
    image: "/Alexisxty/assets/efs-paper-page1.png",
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
    title: { zh: "多模态研究", en: "Multimodal Research" },
    text: {
      zh: "关注社交交互 benchmark、长视频理解，以及更贴近真实世界的模型行为评测。",
      en: "Evaluation of social interaction, long-video understanding, and realistic model behavior.",
    },
  },
  {
    icon: "quant",
    title: { zh: "量化方法", en: "Quantitative Methods" },
    text: {
      zh: "强调结构化决策框架、市场观察方法与更有纪律性的研究流程。",
      en: "Structured decision frameworks, market observation, and disciplined research workflows.",
    },
  },
  {
    icon: "systems",
    title: { zh: "软件系统", en: "Software Systems" },
    text: {
      zh: "覆盖研究工具、数据基础设施，以及从原型到交付的稳定实现。",
      en: "Research tooling, data infrastructure, and dependable implementation from prototype to delivery.",
    },
  },
];

const focus = [
  {
    icon: "signal",
    text: {
      zh: "在更真实的交互场景下评测多模态系统",
      en: "Benchmarking multimodal systems under realistic interaction settings",
    },
  },
  {
    icon: "market",
    text: {
      zh: "研究面向加密货币市场的结构化研究方法",
      en: "Studying structured approaches for cryptocurrency market research",
    },
  },
  {
    icon: "stack",
    text: {
      zh: "构建连接数据、模型与评测流程的轻量工具",
      en: "Building lightweight tools that connect data, models, and evaluation",
    },
  },
];

const quickFacts = [
  { label: "Selected Papers", value: "2" },
  { label: "Public Research Assets", value: "Scholar + Code + Dataset" },
  { label: "Theme", value: "Research x Systems x Quant" },
];

const heroCollage = [
  {
    className: "collage-social",
    src: socialOmniImage,
    alt: "SocialOmni preview",
    tag: "SocialOmni",
    meta: "Benchmark Surface",
  },
  {
    className: "collage-efs",
    src: "/Alexisxty/assets/efs-paper-page1.png",
    alt: "Event-Anchored Frame Selection preview",
    tag: "Event-Anchored Frame Selection",
    meta: "Long-Video Study",
  },
  {
    className: "collage-who",
    label: "WHO",
    text: "Speaker Identity",
  },
  {
    className: "collage-when",
    label: "WHEN",
    text: "Turn Timing",
  },
  {
    className: "collage-how",
    label: "HOW",
    text: "Response Strategy",
  },
];

const copy = {
  zh: {
    nav: { scholar: "学术主页", email: "邮箱", lang: "EN" },
    eyebrow: "研究、系统与可执行方法",
    heroTitle: "为多模态系统、量化方法与可用软件设计研究界面。",
    heroLead:
      "我主要研究模型评测、量化研究与软件基础设施，强调问题定义清晰、实验可复现，以及能够真正落地的实现方式。",
    heroNote1: "评测设计聚焦真实交互，而不是孤立的静态准确率。",
    heroNote2: "研究成果和代码、数据集、实现路径保持连通。",
    viewPublications: "查看论文",
    openGitHub: "打开 GitHub",
    orientation: "当前定位",
    orientationValue: "研究者 · 建设者 · 独立从业者",
    themes: "核心主题",
    themesValue: "多模态评测 · 量化方法 · 软件基础设施",
    factLabels: ["代表论文", "公开研究资产", "主题方向"],
    directions: "研究方向",
    directionsTitle: "当前工作主要由三条主线构成。",
    papers: "代表成果",
    papersTitle: "近期工作与公开研究资产。",
    researchHighlight: "重点项目",
    highlightMetrics: ["感知样本", "诊断案例", "社交交互维度"],
    currentFocus: "当前关注",
    currentFocusTitle: "我最近在推进的工作。",
    connect: "联系与入口",
    connectTitle: "研究记录、代码与直接联系。",
    scholarDesc: "论文、引用与研究记录。",
    githubDesc: "代码、实验与实现产物。",
    emailDesc: "项目合作、研究交流与直接联系。",
    spreadLabel: "主视觉论文",
    spreadTitle: "SocialOmni",
    spreadBody: "Benchmarking audio-visual social interactivity in omni models.",
    spreadNote: "公开资产",
    spreadNoteValue: "Paper / Code / Dataset",
    secondaryLabel: "延展研究",
    storyLead: "Long-video understanding with event-anchored frame selection.",
    captionAxis: "研究轴线",
    captionAxisText: "Who · When · How",
    captionFrame: "方法关键词",
    captionFrameText: "Benchmark · Dataset · Reproducibility",
    captionStory: "补充论文",
    captionStoryText: "Event-aware selection · Query relevance · Diversity",
  },
  en: {
    nav: { scholar: "Scholar", email: "Email", lang: "中文" },
    eyebrow: "Research, systems, and disciplined execution",
    heroTitle: "Research interfaces for multimodal systems, quantitative methods, and usable software.",
    heroLead:
      "I work on model evaluation, quantitative research, and software infrastructure with an emphasis on clarity, reproducibility, and real deployment constraints.",
    heroNote1: "Benchmarks designed for realistic interaction instead of isolated accuracy.",
    heroNote2: "Research outputs connected to code, datasets, and implementation pathways.",
    viewPublications: "View Publications",
    openGitHub: "Open GitHub",
    orientation: "Current orientation",
    orientationValue: "Researcher · Builder · Independent",
    themes: "Primary themes",
    themesValue: "Multimodal evaluation · Quant methods · Infrastructure",
    factLabels: ["Selected Papers", "Public Research Assets", "Theme"],
    directions: "Directions",
    directionsTitle: "Three threads define the work.",
    papers: "Selected Publications",
    papersTitle: "Recent work and public research artifacts.",
    researchHighlight: "Research Highlight",
    highlightMetrics: ["Perception Samples", "Diagnostic Cases", "Interaction Axes"],
    currentFocus: "Current Focus",
    currentFocusTitle: "What I am working on now.",
    connect: "Connect",
    connectTitle: "Open channels for research and collaboration.",
    scholarDesc: "Publications, citations, and research record.",
    githubDesc: "Code, experiments, and implementation artifacts.",
    emailDesc: "Direct contact for research, projects, and collaboration.",
    spreadLabel: "Lead Publication",
    spreadTitle: "SocialOmni",
    spreadBody: "Benchmarking audio-visual social interactivity in omni models.",
    spreadNote: "Public Assets",
    spreadNoteValue: "Paper / Code / Dataset",
    secondaryLabel: "Follow-up Study",
    storyLead: "Long-video understanding with event-anchored frame selection.",
    captionAxis: "Research Axis",
    captionAxisText: "Who · When · How",
    captionFrame: "Method Keywords",
    captionFrameText: "Benchmark · Dataset · Reproducibility",
    captionStory: "Secondary Story",
    captionStoryText: "Event-aware selection · Query relevance · Diversity",
  },
};

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
  const [lang, setLang] = useState("zh");
  const heroPanelRef = useRef(null);
  const papersRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const t = copy[lang];
  const factValues = quickFacts.map((item) => item.value);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroPanelRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: papersScroll } = useScroll({
    target: papersRef,
    offset: ["start end", "end start"],
  });
  const socialY = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [0, 0] : [18, -30]);
  const socialRotate = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [-6, -6] : [-8, -3]);
  const efsY = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [0, 0] : [-14, 34]);
  const efsRotate = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [5, 5] : [8, 2]);
  const whoY = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [0, 0] : [8, -18]);
  const whenY = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [0, 0] : [-10, 16]);
  const howY = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [0, 0] : [14, -12]);
  const hazeY = useTransform(heroScroll, [0, 1], shouldReduceMotion ? [0, 0] : [0, -40]);
  const hazeOpacity = useTransform(heroScroll, [0, 1], [0.55, 0.9]);
  const spreadY = useTransform(papersScroll, [0, 1], shouldReduceMotion ? [0, 0] : [30, -24]);
  const spreadCaptionY = useTransform(papersScroll, [0, 1], shouldReduceMotion ? [0, 0] : [0, -14]);
  const storyY = useTransform(papersScroll, [0, 1], shouldReduceMotion ? [0, 0] : [40, -18]);
  const collageMotion = {
    "collage-social": { y: socialY, rotate: socialRotate },
    "collage-efs": { y: efsY, rotate: efsRotate },
    "collage-who": { y: whoY },
    "collage-when": { y: whenY },
    "collage-how": { y: howY },
  };

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
              {t.nav.scholar}
            </a>
            <a href="mailto:alexisty233@gmail.com">{t.nav.email}</a>
            <button
              type="button"
              className="lang-toggle"
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            >
              {t.nav.lang}
            </button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="hero-inline-notes">
              <div className="hero-note">
                <span className="hero-note-dot hero-note-blue" />
                <p>{t.heroNote1}</p>
              </div>
              <div className="hero-note">
                <span className="hero-note-dot hero-note-green" />
                <p>{t.heroNote2}</p>
              </div>
            </div>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://scholar.google.com/citations?user=_vZWAnkAAAAJ&hl=zh-CN"
                target="_blank"
                rel="noreferrer"
              >
                {t.viewPublications}
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Alexisxty"
                target="_blank"
                rel="noreferrer"
              >
                {t.openGitHub}
              </a>
            </div>
          </div>

          <div className="hero-panel" ref={heroPanelRef}>
            <motion.div className="hero-haze hero-haze-sun" style={{ y: hazeY, opacity: hazeOpacity }} aria-hidden="true" />
            <motion.div className="hero-haze hero-haze-mist" style={{ y: socialY, opacity: hazeOpacity }} aria-hidden="true" />
            <div className="hero-grain" aria-hidden="true" />
            <div className="hero-collage" aria-hidden="true">
              {heroCollage.map((item) => (
                <motion.div
                  key={item.className}
                  className={`collage-piece ${item.className} ${item.src ? "collage-image" : "collage-label"}`}
                  style={collageMotion[item.className]}
                >
                  {item.src ? (
                    <>
                      <img src={item.src} alt={item.alt} />
                      <div className="collage-meta">
                        <span>{item.meta}</span>
                        <strong>{item.tag}</strong>
                      </div>
                    </>
                  ) : (
                    <div className="collage-label-body">
                      <strong>{item.label}</strong>
                      <span>{item.text}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="hero-panel-notes">
              <div className="panel-card">
                <p className="panel-label">{t.orientation}</p>
                <p className="panel-value">{t.orientationValue}</p>
              </div>
              <div className="panel-card">
                <p className="panel-label">{t.themes}</p>
                <p className="panel-value">{t.themesValue}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fact-strip">
          {factValues.map((value, index) => (
            <div key={`${value}-${index}`} className="fact-item">
              <span className="fact-label">{t.factLabels[index]}</span>
              <span className="fact-value">{value}</span>
            </div>
          ))}
        </div>
      </header>

      <main>
        <section className="section section-directions">
          <div className="section-heading">
            <p className="section-kicker">{t.directions}</p>
            <h2>{t.directionsTitle}</h2>
          </div>
          <div className="direction-list">
            {directions.map((item) => (
              <article key={item.title.en} className="direction-item">
                <div className="direction-icon">
                  <Icon type={item.icon} />
                </div>
                <div>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.text[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-papers" ref={papersRef}>
          <div className="paper-editorial">
            <div className="section-heading paper-heading">
              <p className="section-kicker">{t.papers}</p>
              <h2>{t.papersTitle}</h2>
            </div>
            <div className="paper-editorial-grid">
              <aside className="paper-editorial-copy">
                <p className="section-kicker">{t.researchHighlight}</p>
                <h3>{t.spreadTitle}</h3>
                <p>{t.spreadBody}</p>
                <div className="paper-editorial-note">
                  <span>{t.spreadNote}</span>
                  <strong>{t.spreadNoteValue}</strong>
                </div>
              </aside>

              <motion.article className="paper-spread" style={{ y: spreadY }}>
                <div className="paper-spread-visual">
                  <img src={papers[0].image} alt={papers[0].title} className="paper-image" />
                  <div className="paper-spread-badge">
                    <span>{t.spreadLabel}</span>
                    <strong>{papers[0].year}</strong>
                  </div>
                </div>
                <div className="paper-spread-body">
                  <motion.div className="paper-caption-rail" style={{ y: spreadCaptionY }}>
                    <div className="paper-caption-card">
                      <span>{t.captionAxis}</span>
                      <p>{t.captionAxisText}</p>
                    </div>
                    <div className="paper-caption-card">
                      <span>{t.captionFrame}</span>
                      <p>{t.captionFrameText}</p>
                    </div>
                  </motion.div>
                  <div className="paper-meta">
                    <span>{papers[0].year}</span>
                    <span>{papers[0].venue}</span>
                  </div>
                  <h3>{papers[0].fullTitle}</h3>
                  <p>{papers[0].summary}</p>
                  <div className="paper-feature-metrics">
                    <div>
                      <strong>2,000</strong>
                      <span>{t.highlightMetrics[0]}</span>
                    </div>
                    <div>
                      <strong>209</strong>
                      <span>{t.highlightMetrics[1]}</span>
                    </div>
                    <div>
                      <strong>3</strong>
                      <span>{t.highlightMetrics[2]}</span>
                    </div>
                  </div>
                  <div className="paper-links">
                    {papers[0].links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          </div>

          <motion.article className="paper-story" style={{ y: storyY }}>
            <div className="paper-story-head">
              <p className="section-kicker">{t.secondaryLabel}</p>
              <h3>{papers[1].fullTitle}</h3>
              <p>{t.storyLead}</p>
              <div className="paper-caption-card paper-caption-card-story">
                <span>{t.captionStory}</span>
                <p>{t.captionStoryText}</p>
              </div>
            </div>
            <div className="paper-story-card">
              <div className="paper-story-visual">
                <img src={papers[1].image} alt={papers[1].title} className="paper-image" />
              </div>
              <div className="paper-body">
                <div className="paper-meta">
                  <span>{papers[1].year}</span>
                  <span>{papers[1].venue}</span>
                </div>
                <p>{papers[1].summary}</p>
                <div className="paper-stats">
                  {papers[1].stats.map((item) => (
                    <div key={item.label} className="paper-stat">
                      <span>{item.value}</span>
                      <small>{item.label}</small>
                    </div>
                  ))}
                </div>
                <div className="paper-links">
                  {papers[1].links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="paper-list paper-list-hidden" aria-hidden="true">
            {papers.map((paper, index) => (
              <article key={paper.title} className="paper-item">
                <div className={`paper-accent paper-accent-${index + 1}`} />
              </article>
            ))}
          </div>
        </section>

        <section className="section section-focus">
          <div className="section-heading">
            <p className="section-kicker">{t.currentFocus}</p>
            <h2>{t.currentFocusTitle}</h2>
          </div>
          <div className="focus-list">
            {focus.map((item) => (
              <div key={item.text.en} className="focus-item">
                <span className="focus-icon">
                  <Icon type={item.icon} />
                </span>
                <p>{item.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-connect">
          <div className="section-heading">
            <p className="section-kicker">{t.connect}</p>
            <h2>{t.connectTitle}</h2>
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
                <p>{t.scholarDesc}</p>
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
                <p>{t.githubDesc}</p>
              </div>
            </a>
            <a className="connect-item" href="mailto:alexisty233@gmail.com">
              <span className="connect-icon">
                <Icon type="mail" />
              </span>
              <div>
                <strong>{t.nav.email}</strong>
                <p>{t.emailDesc}</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
