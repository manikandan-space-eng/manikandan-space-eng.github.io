import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
]

export default function NavBar(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          setActive('#' + e.target.id)
        }
      })
    },{ rootMargin: '-50% 0px -40% 0px', threshold: 0.1 })
    document.querySelectorAll('section[id]').forEach(s=>obs.observe(s))
    return ()=>obs.disconnect()
  },[])

  useEffect(()=>{
    const close = () => setOpen(false)
    window.addEventListener('scroll', close)
    return ()=>window.removeEventListener('scroll', close)
  },[])

  return (
    <header className="sticky top-0 z-50 bg-[color:rgba(11,15,20,.8)] backdrop-blur border-b border-border">
      <nav className="container flex items-center justify-between py-3">
        <a href="#" className="font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-[var(--accent)] to-[#a78bfa]">MP</a>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="md:hidden border border-border rounded-lg px-3 py-1">☰</button>
        <ul className={`md:flex gap-3 items-center ${open?'flex':'hidden'} absolute md:static right-[4%] top-14 md:top-auto bg-bg-elev md:bg-transparent border md:border-0 rounded-xl p-3`}>
          {links.map(l=>(
            <li key={l.href}>
              <a href={l.href} className={`px-2 py-1 rounded-lg hover:bg-bg-elev ${active===l.href?'underline':''}`}>{l.label}</a>
            </li>
          ))}
          <li><ThemeToggle/></li>
        </ul>
      </nav>
    </header>
  )
}
