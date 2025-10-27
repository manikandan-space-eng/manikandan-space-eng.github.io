// src/components/NavBar.jsx
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur bg-[rgba(12,18,34,0.6)]"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-wide text-[#c9d3ff]">
          MANIKANDAN P
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm subtle">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          <a className="btn" href="https://github.com/manikandan-space-eng" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href="https://www.linkedin.com/in/manikandan-aero/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border"
          style={{ borderColor: "var(--border)" }}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2 text-sm subtle">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 rounded-lg px-3 hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a className="btn w-full" href="https://github.com/manikandan-space-eng" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn w-full" href="https://www.linkedin.com/in/manikandan-aero/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
