import { ArrowDownRight, ArrowUpRight, Asterisk, Code2, Github, Linkedin } from 'lucide-react'
import { portfolio } from '../data'

export function ProjectsSection() {
  return <section className="work section-pad" id="work"><div className="wrap">
    <div className="section-head" data-reveal><div className="section-label"><span>02</span> / FEATURED WORK</div><p>Built from curiosity.<br />Made to solve real problems.</p><a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">Browse all repositories <ArrowUpRight size={15} /></a></div>
    <div className="project-list">{portfolio.projects.map((project, i) => <article className={`project project-${i + 1}`} key={project.number} data-reveal style={{ '--project-color': project.color } as React.CSSProperties}>
      <div className="project-image"><img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1400&q=85`} alt={`${project.name} project visual`} loading="lazy" decoding="async" /><span className="image-overlay" /><span className="project-index">{project.number}</span></div>
      <div className="project-info"><div><span className="eyebrow">{project.type} · {project.workType}</span><h3>{project.name}</h3></div><div className="project-right"><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
      <a className="project-action" href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight size={16} /></a>
    </article>)}</div>
    <div className="work-foot"><span>All projects are open source on GitHub</span><Asterisk size={19} /></div>
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
