import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.cursor')!
    const move = (e: MouseEvent) => { el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)` }
    const hover = (e: Event) => { if ((e.target as HTMLElement).closest('a,button')) el.classList.add('is-hover'); else el.classList.remove('is-hover') }
    window.addEventListener('mousemove', move); document.addEventListener('mouseover', hover)
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', hover) }
  }, [])
  return <div className="cursor" aria-hidden="true" />
}
