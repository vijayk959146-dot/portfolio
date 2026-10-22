import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowDownRight, ArrowUpRight, Asterisk, Code2, ExternalLink, GitBranch, Github, Layers, Linkedin, Terminal, CheckCircle2, Cpu } from 'lucide-react'
import { portfolio } from '../data'

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentProject = portfolio.projects[activeIndex]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % portfolio.projects.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + portfolio.projects.length) % portfolio.projects.length)
  }

  return (
    <section className="work section-pad" id="work">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div className="section-label"><span>02</span> / ENGINEERING REPOSITORY INSPECTOR</div>
          <p>Single-slide terminal.<br />Inspect architectures & systems.</p>
          <a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">
            All Repositories <Github size={14} style={{ display: 'inline', marginLeft: 4 }} /> <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Unified Slide Workbench Container */}
        <div className="slide-inspector-container" data-reveal>
          {/* Top Bar / Navigation Toolbar */}
          <div className="inspector-toolbar">
            <div className="repo-pill-tabs" role="tablist" aria-label="Repository Slides">
              {portfolio.projects.map((project, idx) => (
                <button
                  key={project.number}
                  role="tab"
                  aria-selected={idx === activeIndex}
                  className={`repo-tab-btn ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="tab-idx">0{idx + 1}</span>
                  <span className="tab-name">{project.repoName}</span>
                </button>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="inspector-nav-controls">
              <span className="slide-counter-badge">
                <span className="curr-count">0{activeIndex + 1}</span>
                <span className="sep">/</span>
                <span className="total-count">0{portfolio.projects.length}</span>
              </span>
              <div className="nav-arrow-btns">
                <button
                  className="slide-arrow-btn"
                  onClick={prevSlide}
                  aria-label="Previous repository slide"
                  title="Previous repo"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  className="slide-arrow-btn"
                  onClick={nextSlide}
                  aria-label="Next repository slide"
                  title="Next repo"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Active Single Slide Body */}
          <div className="active-slide-workbench" key={currentProject.number}>
            {/* Slide Header */}
            <div className="slide-meta-header">
              <div className="meta-left">
                <div className="repo-badge-indicator">
                  <GitBranch size={14} />
                  <span>{currentProject.repoName}</span>
                </div>
                <span className="slide-category-tag">{currentProject.category}</span>
              </div>
              <div
                className="tech-status-badge"
                style={{ '--badge-accent': currentProject.badgeColor } as React.CSSProperties}
              >
                <span className="status-indicator-dot" />
                {currentProject.status}
              </div>
            </div>

            {/* Slide Main Content Grid */}
            <div className="slide-content-layout">
              <div className="slide-primary-col">
                <h3 className="slide-project-title">{currentProject.name}</h3>

                <div className="slide-arch-callout">
                  <div className="arch-header-tag">
                    <Layers size={13} />
                    <span>SYSTEM ARCHITECTURE PATTERN</span>
                  </div>
                  <p className="arch-summary">{currentProject.architecture}</p>
                </div>

                <p className="slide-narrative">{currentProject.description}</p>

                <div className="slide-spec-strip">
                  <Cpu size={13} />
                  <span>{currentProject.systemSpec}</span>
                </div>
              </div>

              {/* Slide Secondary / Inspect Column */}
              <div className="slide-inspect-col">
                <div className="slide-box capability-box">
                  <div className="box-header">
                    <Terminal size={13} />
                    <span>CORE CAPABILITIES & EXECUTION</span>
                  </div>
                  <ul className="capability-items">
                    {currentProject.keyFeatures.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="slide-box stack-box">
                  <div className="box-header">
                    <Code2 size={13} />
                    <span>TECHNOLOGY STACK</span>
                  </div>
                  <div className="slide-stack-pills">
                    {currentProject.techStack.map((tech) => (
                      <span className="slide-pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Action Bar */}
            <div className="slide-action-bar">
              <div className="slide-action-links">
                <a
                  className="tech-btn primary"
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={15} />
                  <span>Inspect Code on GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
                {currentProject.liveDemoUrl && (
                  <a
                    className="tech-btn secondary"
                    href={currentProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    <span>Live Deployment URL</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              <div className="slide-dots-indicator">
                {portfolio.projects.map((p, idx) => (
                  <button
                    key={p.number}
                    className={`dot-indicator ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to repository slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="work-foot">
          <span>Synced live with github.com/vijayk959146-dot · 5 public repositories indexed</span>
          <Asterisk size={19} />
        </div>
      </div>
    </section>
  )
}

export function LearningSection() {
  return <section className="capabilities section-pad" id="learning"><div className="wrap cap-grid"><div><div className="section-label" data-reveal><span>03</span> / CURRENTLY LEARNING</div><h2 data-reveal>Curiosity<br />with a <em>toolkit.</em></h2><p className="body-copy" data-reveal>I’m building a strong foundation through coursework, personal projects, and regular problem solving.</p></div><div className="skill-list" data-reveal>{portfolio.learning.map((item, i) => <div className="skill" key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowDownRight size={17} /></div>)}</div></div></section>
}

export function TimelineSection() {
  return <section className="timeline section-pad" id="journal"><div className="wrap timeline-grid"><div><div className="section-label" data-reveal><span>04</span> / THE PATH HERE</div><h2 data-reveal>A few<br />chapters<span>.</span></h2><p className="body-copy" data-reveal>A learning journey in engineering, problem solving, and building useful things.</p></div><div className="timeline-list">{portfolio.timeline.map((item, i) => <article className="timeline-item" key={item.year} data-reveal><div className="timeline-dot">0{i + 1}</div><div><span className="eyebrow">{item.year}</span><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.text}</p></div></article>)}</div></div></section>
}

export function ContactSection() {
  return <section className="contact section-pad" id="contact"><div className="wrap contact-inner" data-reveal><div className="section-label"><span>05</span> / YOUR TURN</div><p className="contact-overline">Open to internships and collaboration</p><h2>let’s <em>connect.</em></h2><div className="contact-links"><a className="email-link" href={`mailto:${portfolio.email}`}>Email me<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.leetcode} target="_blank" rel="noopener noreferrer">LeetCode<ArrowUpRight size={23} /></a></div><div className="contact-bottom"><p>{portfolio.availability}.<br />{portfolio.college} · {portfolio.location}.</p><div className="socials"><a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github /></a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin /></a><a href={portfolio.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile"><Code2 /></a></div></div><div className="contact-decoration" aria-hidden="true">✳</div></div></section>
}
