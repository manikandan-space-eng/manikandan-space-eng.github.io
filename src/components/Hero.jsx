import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" aria-label="Hero" className="container grid md:grid-cols-[1.3fr_.9fr] items-center gap-6 min-h-[70vh] pt-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">MANIKANDAN P</h1>
        <p className="text-muted mt-2">Aerospace Engineering · Space Systems & Structures</p>
        <div className="flex gap-3 mt-4">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
        <ul className="flex flex-wrap gap-4 text-muted mt-4">
          <li>📍 India</li>
          <li>✉️ <a href="mailto:manikandan.aeroeng@gmail.com">manikandan.aeroeng@gmail.com</a></li>
          <li>🔗 <a href="https://github.com/manikandan-space-eng" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/manikandan-aero/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <div className="justify-self-end max-w-xs border border-border rounded-2xl overflow-hidden bg-card shadow-soft">
        <img src="/src/assets/profile-placeholder.svg" alt="Profile placeholder" />
      </div>
    </section>
  )
}
