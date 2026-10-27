import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Asterisk, Code2, ExternalLink, GitBranch, Github, Layers, Linkedin, Terminal, CheckCircle2, Cpu, Eye, ShieldCheck, Activity, MessageSquare, Compass, Monitor } from 'lucide-react'
import { portfolio } from '../data'

export function ProjectsSection() {
  const [selectedRepoIdx, setSelectedRepoIdx] = useState(0)
  const activeRepo = portfolio.projects[selectedRepoIdx]

  const getRepoIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ShieldCheck size={16} />
      case 1: return <Activity size={16} />
      case 2: return <MessageSquare size={16} />
      case 3: return <Compass size={16} />
      default: return <Monitor size={16} />
    }
  }

  return (
    <section className="work section-pad" id="work">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div className="section-label"><span>02</span> / REPOSITORY SYSTEM SLIDE</div>
          <p>Single slide.<br />All 5 engineering repositories.</p>
          <a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">
            GitHub Hub <Github size={14} style={{ display: 'inline', marginLeft: 4 }} /> <ArrowUpRight size={15} />
          </a>
        </div>

        {/* The Entire Repository Ecosystem in a Single Slide */}
        <div className="single-slide-workbench" data-reveal>
          {/* Slide Top Meta Bar */}
          <div className="workbench-top-bar">
            <div className="workbench-branding">
              <span className="pulse-indicator" />
              <span className="workbench-title">SYSTEM REPOSITORY RUNTIME & INSPECTOR</span>
              <span className="workbench-badge">5 REPOSITORIES LOADED</span>
            </div>
            <div className="workbench-meta-right">
              <span className="mono-status-text">HOST: GITHUB / VIJAYK959146-DOT</span>
            </div>
          </div>

          {/* Workbench Split View: All Repos on Left, Deep Inspection on Right */}
          <div className="workbench-split-grid">
            {/* Left Rail: All 5 Repositories Visible Simultaneously */}
            <div className="repos-rail-pane">
              <div className="pane-section-heading">
                <span>SELECT REPOSITORY TO INSPECT</span>
                <span className="repo-count-pill">{selectedRepoIdx + 1} of 5 Active</span>
              </div>

              <div className="repo-items-list" role="tablist">
                {portfolio.projects.map((proj, idx) => {
                  const isSelected = idx === selectedRepoIdx
                  return (
                    <button
                      key={proj.number}
                      role="tab"
                      aria-selected={isSelected}
                      className={`repo-strip-item ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedRepoIdx(idx)}
                    >
                      <div className="strip-top">
                        <div className="strip-identity">
                          <span className="strip-idx">0{idx + 1}</span>
                          <span className="strip-icon">{getRepoIcon(idx)}</span>
                          <strong className="strip-name">{proj.repoName}</strong>
                        </div>
                        <span
                          className="strip-status-dot"
                          style={{ background: proj.badgeColor }}
                          title={proj.status}
                        />
                      </div>

                      <div className="strip-title">{proj.name}</div>

                      <div className="strip-footer-tags">
                        <span className="strip-cat">{proj.category}</span>
                        {isSelected && <span className="inspecting-label"><Eye size={11} /> INSPECTING</span>}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Pane: Deep Real-Time Inspection of Selected Repo */}
            <div className="repo-inspect-pane" key={activeRepo.number}>
              <div className="inspect-header">
                <div>
                  <div className="inspect-eyebrow">
                    <span className="inspect-idx-tag">REPO #{activeRepo.number}</span>
                    <span className="inspect-category-badge">{activeRepo.category}</span>
                  </div>
                  <h3 className="inspect-main-title">{activeRepo.name}</h3>
                </div>

                <div className="inspect-status-box" style={{ '--accent-color': activeRepo.badgeColor } as React.CSSProperties}>
                  <span className="status-dot" />
                  <span className="status-label">{activeRepo.status}</span>
                </div>
              </div>

              {/* Architecture Blueprint Block */}
              <div className="inspect-arch-box">
                <div className="arch-header">
                  <Layers size={13} />
                  <span>ARCHITECTURE BLUEPRINT</span>
                </div>
                <div className="arch-body">{activeRepo.architecture}</div>
              </div>

              {/* Narrative Description */}
              <p className="inspect-narrative">{activeRepo.description}</p>

              {/* System Spec / Deployment Tag */}
              <div className="inspect-spec-row">
                <Cpu size={14} className="spec-icon" />
                <span>{activeRepo.systemSpec}</span>
              </div>

              {/* Key Capabilities Terminal Module */}
              <div className="inspect-capabilities-module">
                <div className="module-title">
                  <Terminal size={13} />
                  <span>CORE SYSTEM CAPABILITIES</span>
                </div>
                <div className="capabilities-grid">
                  {activeRepo.keyFeatures.map((feat, i) => (
                    <div className="cap-item" key={i}>
                      <CheckCircle2 size={13} className="cap-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Badges */}
              <div className="inspect-stack-module">
                <div className="module-title">
                  <Code2 size={13} />
                  <span>TECHNOLOGY STACK & PROTOCOLS</span>
                </div>
                <div className="stack-badges-wrap">
                  {activeRepo.techStack.map((tech) => (
                    <span className="tech-badge-item" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="inspect-action-footer">
                <a
                  className="workbench-btn primary"
                  href={activeRepo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={15} />
                  <span>Inspect Code on GitHub</span>
                  <ArrowUpRight size={14} />
                </a>

                {activeRepo.liveDemoUrl && (
                  <a
                    className="workbench-btn secondary"
                    href={activeRepo.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    <span>Launch Live System</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Workbench Footer Matrix */}
          <div className="workbench-footer-matrix">
            <span className="matrix-label">ALL REPOSITORIES RECONNAISSANCE MATRIX</span>
            <div className="matrix-chips">
              {portfolio.projects.map((p, i) => (
                <button
                  key={p.number}
                  className={`matrix-chip ${i === selectedRepoIdx ? 'active' : ''}`}
                  onClick={() => setSelectedRepoIdx(i)}
                >
                  <GitBranch size={11} />
                  <span>{p.repoName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="work-foot">
          <span>All 5 repositories rendered concurrently inside single terminal slide</span>
          <Asterisk size={19} />
        </div>
      </div>
    </section>
  )
}

export function LearningSection() {
  return <section className="capabilities section-pad" id="learning"><div className="wrap cap-grid"><div><div className="section-label" data-reveal><span>03</span> / SKILLS & CURRENT EXPLORATION</div><h2 data-reveal>Curiosity<br />with a <em>toolkit.</em></h2><p className="body-copy" data-reveal>I’m building a strong foundation through coursework, personal projects, and regular problem solving.</p></div><div className="skill-list" data-reveal>{portfolio.skills.map((item, i) => <div className="skill" key={item}><span>0{i + 1}</span><strong>{item}</strong><ArrowDownRight size={17} /></div>)}<p className="learning-note">Currently exploring: {portfolio.learning.join(' · ')}</p></div></div></section>
}

export function SuperpowerVendingMachine() {
  const [revealed, setRevealed] = useState(false)
  return <section className="superpower section-pad" aria-labelledby="superpower-title"><div className="wrap superpower-grid" data-reveal><div><div className="section-label"><span>04</span> / INTERACTIVE EXTRA</div><h2 id="superpower-title">Superpower<br /><em>vending machine.</em></h2><p>Insert one curious click to uncover the strength that powers my work.</p></div><div className={`vending-machine ${revealed ? 'is-revealed' : ''}`}><div className="vending-top"><span>VP-01</span><span>PERSONAL INVENTORY</span></div><div className="vending-window" aria-live="polite"><span className="vending-label">{revealed ? 'DISPENSED' : 'READY'}</span><strong>{revealed ? 'Persistent problem solver' : '???'}</strong><p>{revealed ? 'I enjoy taking apart difficult problems, learning the missing piece, and returning with a practical solution — the same loop that keeps me coming back to DSA, projects, cricket, and football.' : 'A personal story is waiting inside.'}</p></div><button className="vending-button" type="button" onClick={() => setRevealed(!revealed)} aria-pressed={revealed}>{revealed ? 'Reload machine' : 'Press to dispense'} <ArrowDownRight size={17} /></button><span className="vending-hint">Hint: the button works.</span></div></div></section>
}

export function TimelineSection() {
  return <section className="timeline section-pad" id="journal"><div className="wrap timeline-grid"><div><div className="section-label" data-reveal><span>05</span> / THE PATH HERE</div><h2 data-reveal>A few<br />chapters<span>.</span></h2><p className="body-copy" data-reveal>A learning journey in engineering, problem solving, and building useful things.</p></div><div className="timeline-list">{portfolio.timeline.map((item, i) => <article className="timeline-item" key={item.year} data-reveal><div className="timeline-dot">0{i + 1}</div><div><span className="eyebrow">{item.year}</span><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.text}</p></div></article>)}</div></div></section>
}

export function ContactSection() {
  return <section className="contact section-pad" id="contact"><div className="wrap contact-inner" data-reveal><div className="section-label"><span>05</span> / YOUR TURN</div><p className="contact-overline">Open to internships and collaboration</p><h2>let’s <em>connect.</em></h2><div className="contact-links"><a className="email-link" href={`mailto:${portfolio.email}`}>Email me<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.leetcode} target="_blank" rel="noopener noreferrer">LeetCode<ArrowUpRight size={23} /></a></div><div className="contact-bottom"><p>{portfolio.availability}.<br />{portfolio.college} · {portfolio.location}.</p><div className="socials"><a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github /></a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin /></a><a href={portfolio.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile"><Code2 /></a></div></div><div className="contact-decoration" aria-hidden="true">✳</div></div></section>
}
