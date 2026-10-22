import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk, Github, Linkedin, Menu, X, Code2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Scene from './components/Scene'
import Cursor from './components/Cursor'
import { portfolio } from './data'
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const appRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const timer = window.setTimeout(() => { setLoading(false); setSceneReady(true) }, 850)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = reduced ? null : new Lenis({ duration: 1.1, smoothWheel: true })
    let raf = 0
    const tick = (time: number) => { lenis?.raf(time); raf = requestAnimationFrame(tick) }
    if (lenis) raf = requestAnimationFrame(tick)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => gsap.fromTo(el, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
      if (!reduced) gsap.to('.hero-art', { yPercent: 17, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    }, appRef)
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); lenis?.destroy(); ctx.revert() }
  }, [])
  const closeMenu = () => setMenuOpen(false)
  return <>
    {loading && <div className="loader"><span>VP</span><i /></div>}
    <Cursor />
    <main ref={appRef}>
      <header className="nav wrap">
        <a className="brand" href="#home" aria-label={`${portfolio.name} home`}><span className="brand-mark">V<span>✳</span></span><span>{portfolio.firstName} Patil<br /><small>{portfolio.role}</small></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[['About', '#about'], ['Work', '#work'], ['Journal', '#journal']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-art" aria-hidden="true">{sceneReady && <Scene />}</div>
        <div className="hero-grid wrap">
          <div className="hero-kicker"><span className="live-dot" /> {portfolio.semester} · {portfolio.college} <span className="kicker-line" /> {portfolio.location}</div>
          <h1>Hi, I’m<br /><em>{portfolio.firstName}</em><br /><span className="human">Patil<Asterisk className="star" /></span></h1>
          <div className="hero-bottom"><p>{portfolio.role}<br />Curious mind, building for what’s next.</p><a className="round-link" href="#about" aria-label="Explore my profile"><ArrowDown size={19} /></a><span className="hero-index">01 / 04</span></div>
        </div>
        <div className="hero-side-note">A little bit of logic. A lot of feeling.</div>
        <div className="scroll-note"><span /> Scroll to explore</div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="wrap intro-grid"><div className="section-label" data-reveal><span>01</span> / A LITTLE ABOUT ME</div><div className="intro-copy" data-reveal><p className="big-copy">I’m Vijayakumar — an engineering student and <span>curious learner</span> finding my way through technology.</p><p className="body-copy">{portfolio.bio}</p><a className="text-link" href="#contact">Find me online <ArrowUpRight size={15} /></a></div><div className="intro-aside" data-reveal><img className="profile-photo" src={portfolio.photo} alt="Portrait of Vijayakumar Police Patil" /><p>Student at <span>{portfolio.college}</span><br />{portfolio.semester} · {portfolio.location}</p></div></div>
      </section>

      <section className="work section-pad" id="work"><div className="wrap">
        <div className="section-head" data-reveal><div className="section-label"><span>02</span> / SELECTED WORK</div><p>A few good things,<br />made with good people.</p><a className="text-link" href="#contact">Have a project? <ArrowUpRight size={15} /></a></div>
        <div className="project-list">{portfolio.projects.length ? portfolio.projects.map((p, i) => <a href={p.url} target="_blank" rel="noreferrer" className={`project project-${i + 1}`} key={p.number} data-reveal style={{ '--project-color': p.color } as React.CSSProperties}>
          <div className="project-image"><img src={`https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1400&q=85`} alt={`${p.name} project visual`} loading="lazy" /><span className="image-overlay" /><span className="project-open"><ArrowUpRight /></span><span className="project-index">{p.number}</span></div>
          <div className="project-info"><div><span className="eyebrow">{p.type}</span><h3>{p.name}</h3></div><div className="project-right"><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div></div>
        </a>) : <p className="body-copy project-empty" data-reveal>My project showcase is taking shape. Check back soon to see what I’m building.</p>}</div>
        <div className="work-foot"><span>Learning, experimenting, and building what’s next.</span><Asterisk size={19} /></div>
      </div></section>

      <section className="capabilities section-pad"><div className="wrap cap-grid"><div><div className="section-label" data-reveal><span>03</span> / WHAT I BRING</div><h2 data-reveal>Curiosity<br />with a <em>toolkit.</em></h2><p className="body-copy" data-reveal>I like getting close to the problem, asking better questions, and making the right thing feel effortless.</p></div><div className="skill-list" data-reveal>{portfolio.skills.map((s, i) => <div className="skill" key={s}><span>0{i + 1}</span><strong>{s}</strong><ArrowDownRight size={17} /></div>)}</div></div></section>

      <section className="timeline section-pad" id="journal"><div className="wrap timeline-grid"><div><div className="section-label" data-reveal><span>04</span> / THE PATH HERE</div><h2 data-reveal>A few<br />chapters<span>.</span></h2><p className="body-copy" data-reveal>Not a straight line. More like a collection of things I was lucky to learn.</p></div><div className="timeline-list">{portfolio.timeline.map((item, i) => <article className="timeline-item" key={item.year} data-reveal><div className="timeline-dot">0{i + 1}</div><div><span className="eyebrow">{item.year}</span><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.text}</p></div></article>)}</div></div></section>

      <section className="contact section-pad" id="contact"><div className="wrap contact-inner" data-reveal><div className="section-label"><span>05</span> / YOUR TURN</div><p className="contact-overline">Find me on</p><h2>let’s <em>connect.</em></h2><div className="contact-links"><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email}<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={23} /></a><a className="email-link" href={portfolio.leetcode} target="_blank" rel="noopener noreferrer">LeetCode<ArrowUpRight size={23} /></a></div><div className="contact-bottom"><p>{portfolio.availability}.<br />{portfolio.college} · {portfolio.location}.</p><div className="socials"><a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github /></a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin /></a><a href={portfolio.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile"><Code2 /></a></div></div><div className="contact-decoration">✳</div></div></section>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">V<span>✳</span></span><span>{portfolio.name}<br /><small>{portfolio.role}</small></span></a><span>© {new Date().getFullYear()} {portfolio.name}.</span><a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a></footer>
    </main>
  </>
}
