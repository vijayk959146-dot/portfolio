import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Asterisk, Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Cursor from './components/Cursor'
import { ContactSection, LearningSection, ProjectsSection, SuperpowerVendingMachine, TimelineSection } from './components/PortfolioSections'
import { portfolio } from './data'
gsap.registerPlugin(ScrollTrigger)
const Scene = lazy(() => import('./components/Scene'))

export default function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const appRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sceneEnabled = !reduced && !window.matchMedia('(max-width: 640px)').matches
    const timer = window.setTimeout(() => { setLoading(false); setSceneReady(sceneEnabled) }, reduced ? 0 : 850)
    const lenis = reduced ? null : new Lenis({ duration: 1.1, smoothWheel: true })
    let raf = 0
    const tick = (time: number) => { lenis?.raf(time); raf = requestAnimationFrame(tick) }
    if (lenis) raf = requestAnimationFrame(tick)
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => gsap.fromTo(el, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
        gsap.to('.hero-art', { yPercent: 17, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      }
    }, appRef)
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); lenis?.destroy(); ctx.revert() }
  }, [])
  const closeMenu = () => setMenuOpen(false)
  return <>
    {loading && <div className="loader" aria-hidden="true"><span>VP</span><i /></div>}
    <Cursor />
    <main ref={appRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="nav wrap">
        <a className="brand" href="#home" aria-label={`${portfolio.name} home`}><span className="brand-mark">V<span>✳</span></span><span>{portfolio.name}<br /><small>{portfolio.role}</small></span></a>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {[['About', '#about'], ['Work', '#work'], ['Learning', '#learning'], ['Journal', '#journal']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-art" aria-hidden="true">{sceneReady && <Suspense fallback={null}><Scene /></Suspense>}</div>
        <div className="hero-grid wrap">
          <div className="hero-kicker"><span className="live-dot" /> {portfolio.semester} · {portfolio.college} <span className="kicker-line" /> {portfolio.location}</div>
          <h1>Hi, I’m<br /><em>{portfolio.firstName}</em><br /><span className="human">Police Patil<Asterisk className="star" /></span></h1>
          <div className="hero-bottom"><p>{portfolio.role}<br />Competitive programming · Cricket · Football</p><a className="round-link" href="#about" aria-label="Explore my profile"><ArrowDown size={19} /></a><span className="hero-index">01 / 04</span></div>
        </div>
        <div className="hero-side-note">A little bit of logic. A lot of feeling.</div>
        <div className="scroll-note"><span /> Scroll to explore</div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="wrap intro-grid"><div className="section-label" data-reveal><span>01</span> / A LITTLE ABOUT ME</div><div className="intro-copy" data-reveal><p className="big-copy">I’m Vijayakumar — an engineering student, aspiring <span>developer</span>, and competitive programming enthusiast.</p><p className="body-copy">{portfolio.bio}</p><a className="text-link" href="#contact">Find me online <ArrowUpRight size={15} /></a></div><div className="intro-aside" data-reveal><img className="profile-photo" src={`${import.meta.env.BASE_URL}${portfolio.photo.replace(/^\//, '')}`} alt="Portrait of Vijayakumar Police Patil" width="190" height="238" fetchPriority="high" /><p>Student at <span>{portfolio.college}</span><br />{portfolio.semester} · {portfolio.location}<br />Cricket · Football</p></div></div>
      </section>

      <div id="main-content" tabIndex={-1}><ProjectsSection /><LearningSection /><SuperpowerVendingMachine /><TimelineSection /><ContactSection /></div>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">V<span>✳</span></span><span>{portfolio.name}<br /><small>{portfolio.role}</small></span></a><span>© {new Date().getFullYear()} {portfolio.name}.</span><a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a></footer>
    </main>
  </>
}
