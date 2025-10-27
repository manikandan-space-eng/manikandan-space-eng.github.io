export default function NavBar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(12,18,34,0.6)]" style={{borderBottom:'1px solid var(--border)'}}>
      <div className="container flex items-center justify-between h-14">
        <a href="#top" className="font-semibold tracking-wide text-[#c9d3ff]">MANIKANDAN P</a>
        <nav className="hidden md:flex items-center gap-6 text-sm subtle">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#research" className="hover:text-white">Research</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a className="btn" href="https://github.com/manikandan-space-eng" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/manikandan-aero/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}