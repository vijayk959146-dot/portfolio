import { ArrowDownRight, ArrowUpRight, Asterisk, Code2, ExternalLink, GitBranch, Github, Layers, Linkedin, Terminal } from 'lucide-react'
import { portfolio } from '../data'

export function ProjectsSection() {
  return <section className="work section-pad" id="work"><div className="wrap">
    <div className="section-head" data-reveal>
      <div className="section-label"><span>02</span> / ENGINEERING REPOSITORIES</div>
      <p>Technical artifacts,<br />architectures & systems.</p>
      <a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">
        GitHub Profile <Github size={14} style={{ display: 'inline', marginLeft: 4 }} /> <ArrowUpRight size={15} />
      </a>
    </div>

    <div className="tech-project-grid">
      {portfolio.projects.map((project) => (
        <article className="tech-card" key={project.number} data-reveal>
          <div className="tech-card-header">
            <div className="tech-card-top-left">
              <span className="tech-index">{project.number}</span>
              <span className="tech-repo-tag"><GitBranch size={12} /> {project.repoName}</span>
            </div>
            <div className="tech-status-badge" style={{ '--badge-accent': project.badgeColor } as React.CSSProperties}>
              <span className="status-indicator-dot" />
              {project.status}
            </div>
          </div>

          <div className="tech-card-body">
            <div className="tech-category-row">
              <span className="tech-cat-label">{project.category}</span>
            </div>
            <h3 className="tech-title">{project.name}</h3>
            
            <div className="tech-arch-box">
              <span className="arch-label"><Layers size={12} /> ARCHITECTURE PATTERN</span>
              <p className="arch-text">{project.architecture}</p>
            </div>

            <p className="tech-desc">{project.description}</p>

            <div className="tech-features-block">
              <span className="features-label"><Terminal size={12} /> KEY CAPABILITIES</span>
              <ul className="features-list">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="tech-spec-bar">
              <span className="spec-note">{project.systemSpec}</span>
            </div>

            <div className="tech-stack-row">
              {project.techStack.map((tech) => (
                <span className="tech-pill" key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="tech-card-footer">
            <a className="tech-btn primary" href={project.url} target="_blank" rel="noopener noreferrer">
              <Github size={15} />
              <span>Inspect Source</span>
              <ArrowUpRight size={14} />
            </a>
            {project.liveDemoUrl && (
              <a className="tech-btn secondary" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                <span>Live Deployment</span>
              </a>
            )}
          </div>
        </article>
      ))}
    </div>

    <div className="work-foot">
      <span>All 5 repositories synced live from github.com/vijayk959146-dot</span>
      <Asterisk size={19} />
    </div>
  </div></section>
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
