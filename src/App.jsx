// src/App.jsx — Rebuilt portfolio for Manikandan P
import { useState, useEffect } from "react";

const EXPERIENCES = [
  {
    role: "Intern Trainee – Airbus C295 Structural Manufacturing",
    org: "Tata Advanced Systems Limited (TASL)",
    location: "Bengaluru",
    period: "Jan 2026 – Mar 2026",
    type: "Full-time, On-site",
    bullets: [
      "Executed primary aerostructure manufacturing for the Airbus C295 military transport — one of India's highest-volume defence aerospace programs (HAL-Airbus JV).",
      "Applied composite layup, co-curing cycles, and film/paste adhesive bonding; maintained fibre orientation, ply drop, and bond-line compliance to engineering drawings.",
      "Managed component traceability and work order flow via SAP ERP; supported AS9100 audit documentation and NCR processes.",
      "Performed in-process dimensional inspection and tolerance verification; documented corrective actions aligned with aerospace QMS.",
    ],
    tags: ["Composites", "AS9100", "SAP ERP", "NDT", "TASL"],
  },
  {
    role: "Engineering Intern – Structural FEA & Rotating Systems",
    org: "L&T Shipbuilding Limited",
    location: "Kattupalli",
    period: "Jun 2025 – Jul 2025",
    type: "On-site",
    bullets: [
      "Performed static structural FEA on mechanical joint assemblies using CATIA V5; identified stress concentration regions and assessed failure modes under marine loading.",
      "Conducted hand calculations for structural integrity and fatigue assessment of rotating components; cross-validated with FEA simulation output.",
      "Documented manufacturing process standards and quality inspection procedures for precision-engineered rotating systems.",
    ],
    tags: ["FEA", "CATIA V5", "Fatigue Analysis", "Marine Structures"],
  },
  {
    role: "Intern – Helicopter Systems, Airworthiness & Structural Integration",
    org: "DRDO, RCMA Helicopter Division (under CEMILAC)",
    location: "Bengaluru",
    period: "Dec 2024 – Jan 2025",
    type: "On-site",
    bullets: [
      "Studied structural and systems integration of ALH Dhruv, LCH, and LUH: MGB, Anti-Resonant Isolating System (ARIS), tail rotor drive shaft, and transmission assemblies.",
      "Reviewed CEMILAC and RCMA military airworthiness certification framework; traced certification lifecycle from design through flight clearance.",
      "Observed structural inspection (NDT), CNC machining, and 3DNX-based design workflows at the Systems Integration Lab (SIL).",
    ],
    tags: ["Airworthiness", "CEMILAC", "Helicopter Systems", "DRDO", "ALH Dhruv"],
  },
];

const PROJECTS = [
  {
    title: "CubeSat Payload Structural Optimisation – LEO Radiation Shielding",
    period: "2025–2026",
    highlight: "43.9% TID reduction vs. 2 mm Al baseline",
    description:
      "Designed a hybrid CFRP–HDPE–Aluminium shielding enclosure for a CubeSat payload in 600 km SSO. Performed static structural, thermal, and combined loading analyses in ANSYS FEM; parametric trade studies across 6 multi-material shielding architectures. Modelled orbital proton/electron flux and SAA contribution to total dose via NASA OLTARIS.",
    tags: ["ANSYS FEM", "NASA OLTARIS", "Python", "MATLAB", "CubeSat"],
    color: "#3e63dd",
  },
  {
    title: "NASA HERC 2025 – Planetary Rover Chassis & Systems Integration",
    period: "2024–2025",
    highlight: "Team Leader · 11-member · 2.34 m/s traverse speed",
    description:
      "Led interdisciplinary team as Student Team Leader for NASA Human Exploration Rover Challenge 2025 (Team Novanix). Designed foldable truss-frame rover chassis (2600×1600×1250 mm unfolded) in Al 6061 using CATIA V5; integrated H-joint folding mechanism with pin-lock retention for transport compliance. Calculated gear ratio, torque demand, and traverse speed for 1,126 m course. Oversaw A-arm suspension, Ackerman steering, chain-drive drivetrain, and 4-wheel disc braking.",
    tags: ["CATIA V5", "Drivetrain Analysis", "Team Leadership", "PDR/CDR"],
    color: "#e05c3e",
  },
  {
    title: "Composite Aircraft Radome – Fibre Draping & CLT Displacement Analysis",
    period: "2025",
    highlight: "39% displacement reduction · Manuscript submitted to ICSMT 2025",
    description:
      "Implemented Classical Lamination Theory (CLT) in MATLAB to compute laminate [ABD] stiffness matrix and predict structural displacement. Demonstrated 39% displacement reduction using astroquartz over E-glass. Quantified 25% lower shear angle deformation in woven vs. UD fibre configurations, reducing inter-ply debonding risk over doubly-curved radome geometry.",
    tags: ["MATLAB", "CLT", "Composites", "FRP", "Astroquartz"],
    color: "#44a56e",
  },
  {
    title: "Indian Patent – Additive Manufacturing Sandwich Core",
    period: "Filed July 2025",
    highlight: "Co-inventor · Indian Patent Application No. 202541064323 A",
    description:
      "Proposes FDM and SLS-based lattice sandwich core geometries for improved stiffness-to-weight ratio in lightweight aerospace structural panels. Applicable to aerostructure and space component manufacturing.",
    tags: ["FDM", "SLS", "Lattice Structures", "Patent", "Aerospace Structures"],
    color: "#c97d35",
  },
];

const SKILLS = [
  { category: "CAD & Design", items: ["CATIA V5 (Part Design, Assembly, GSD, Drafting)", "SolidWorks", "AutoCAD", "GD&T"] },
  { category: "Structural Analysis", items: ["ANSYS Mechanical (Static Structural, Thermal, Linear Buckling, Modal)", "Classical Lamination Theory (CLT)", "FEA Validation & Hand Calculations"] },
  { category: "Space Systems", items: ["NASA OLTARIS (TID / Radiation Transport)", "CubeSat Structural Design", "Orbital Environment Modelling", "South Atlantic Anomaly Analysis"] },
  { category: "Composites & Manufacturing", items: ["Composite Hand Layup", "Co-Curing & Adhesive Bonding", "Aerostructure Assembly", "FDM / SLS Additive Manufacturing", "SAP ERP", "AS9100 QMS"] },
  { category: "Programming", items: ["Python (NumPy, SciPy, Data Processing)", "MATLAB", "LaTeX"] },
  { category: "Standards & Certification", items: ["AS9100", "CEMILAC Airworthiness", "RCMA Military Certification", "Aerospace Quality Inspection", "NCR / Audit Documentation"] },
];

const CERTIFICATIONS = [
  { name: "SPARC – Analysis and Statistical Modelling of Space Data", org: "MCNS, MAHE", year: "2025" },
  { name: "SPARC III – Fundamentals of Space Radiation", org: "MCNS, MAHE", year: "2024" },
  { name: "Advanced Diploma in Python Programming", org: "", year: "2021" },
];

function Tag({ label, color }) {
  return (
    <span
      style={{
        background: color ? `${color}18` : "rgba(62,99,221,0.12)",
        color: color || "var(--accent)",
        border: `1px solid ${color ? `${color}35` : "rgba(62,99,221,0.25)"}`,
        fontSize: "0.7rem",
        padding: "0.2rem 0.6rem",
        borderRadius: "999px",
        fontWeight: 500,
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

function ExperienceCard({ exp, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1rem",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
    >
      <div style={{ padding: "1.25rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span style={{ background: "rgba(62,99,221,0.15)", color: "var(--accent)", fontSize: "0.7rem", fontFamily: "monospace", padding: "0.15rem 0.5rem", borderRadius: "999px" }}>
              {exp.period}
            </span>
            <span style={{ color: "var(--muted)", fontSize: "0.7rem" }}>{exp.type}</span>
          </div>
          <h3 style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.35 }}>{exp.role}</h3>
          <p style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "0.2rem" }}>{exp.org} · {exp.location}</p>
        </div>
        <div style={{ flexShrink: 0, color: "var(--muted)", transform: open ? "rotate(180deg)" : "", transition: "transform 0.2s" }}>▼</div>
      </div>
      {open && (
        <div style={{ padding: "0 1.25rem 1.25rem" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "1rem" }}>
            {exp.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: "0.5rem", color: "var(--muted)", fontSize: "0.8rem", marginBottom: "0.5rem", lineHeight: 1.5 }}>
                <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.15rem" }}>◆</span>
                {b}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {exp.tags.map(t => <Tag key={t} label={t} />)}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderTop: `2px solid ${project.color}`,
      borderRadius: "1rem",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      transition: "transform 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div>
        <p style={{ color: "var(--muted)", fontSize: "0.7rem", fontFamily: "monospace", marginBottom: "0.4rem" }}>{project.period}</p>
        <h3 style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.35, marginBottom: "0.6rem" }}>{project.title}</h3>
        <div style={{ background: `${project.color}18`, color: project.color, fontSize: "0.7rem", fontWeight: 600, padding: "0.25rem 0.6rem", borderRadius: "0.5rem", display: "inline-block", marginBottom: "0.75rem" }}>
          ✦ {project.highlight}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>{project.description}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "auto" }}>
        {project.tags.map(t => <Tag key={t} label={t} color={project.color} />)}
      </div>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} style={{ padding: "5rem 2rem", maxWidth: "80rem", margin: "0 auto" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem" }}>{label}</p>
        <h2 style={{ color: "var(--text)", fontSize: "1.75rem", fontWeight: 800 }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["About", "Experience", "Projects", "Research", "Skills", "Contact"];

  return (
    <div id="top" style={{ minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(8,12,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem", height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ textDecoration: "none" }}>
            <div style={{ color: "var(--text)", fontWeight: 900, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Manikandan P</div>
            <div style={{ color: "var(--accent)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Aerospace Engineer</div>
          </a>
          <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "var(--muted)", padding: "0.4rem 0.75rem", borderRadius: "0.5rem", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "var(--text)"}
                onMouseLeave={e => e.target.style.color = "var(--muted)"}
              >{l}</a>
            ))}
            <a href="/Manikandan_Resume.pdf" target="_blank" rel="noreferrer" style={{ marginLeft: "0.75rem", background: "var(--accent)", color: "#fff", padding: "0.45rem 1rem", borderRadius: "0.6rem", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
              Resume ↗
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(62,99,221,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(62,99,221,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", left: "30%", width: "40rem", height: "40rem", borderRadius: "50%", background: "radial-gradient(circle, rgba(62,99,221,0.1) 0%, transparent 70%)", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", width: "100%", paddingTop: "6rem", paddingBottom: "4rem", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(62,99,221,0.12)", color: "var(--accent)", border: "1px solid rgba(62,99,221,0.25)", borderRadius: "999px", padding: "0.35rem 0.85rem", fontSize: "0.75rem", fontWeight: 500, marginBottom: "1.5rem" }}>
                <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#4ade80" }} />
                Open to Relocation · Graduating June 2026
              </div>

              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem" }}>
                <span style={{ color: "var(--text)" }}>Manikandan </span>
                <span style={{ color: "var(--accent)" }}>P</span>
              </h1>
              <p style={{ color: "var(--muted)", fontSize: "1.1rem", fontWeight: 500, marginBottom: "1rem" }}>Aerospace Engineer · Structural Design · Space Systems</p>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", maxWidth: "38rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Final-year B.Tech student with industry depth spanning <strong style={{ color: "var(--text)" }}>aerostructure manufacturing (TASL – Airbus C295)</strong>, military helicopter systems (DRDO RCMA), structural FEA (L&T Shipbuilding), CubeSat radiation shielding (43.9% TID reduction), and NASA rover design. Co-inventor of an Indian Patent in additive manufacturing.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
                <a href="#projects" style={{ background: "var(--accent)", color: "#fff", padding: "0.65rem 1.5rem", borderRadius: "0.75rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>View Projects →</a>
                <a href="/Manikandan_Resume.pdf" target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,0.06)", color: "var(--text)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.65rem 1.5rem", borderRadius: "0.75rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>Download Resume ↗</a>
                <a href="mailto:manikandan.aeroeng@gmail.com" style={{ background: "rgba(255,255,255,0.06)", color: "var(--text)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.65rem 1.5rem", borderRadius: "0.75rem", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>Contact Me</a>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                {[["43.9%", "TID reduction"], ["3+", "Internships"], ["1", "Patent filed"], ["11", "NASA team members"]].map(([val, lab]) => (
                  <div key={lab} style={{ textAlign: "center", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.75rem", padding: "0.75rem" }}>
                    <div style={{ color: "var(--accent)", fontSize: "1.25rem", fontWeight: 900, fontVariantNumeric: "tabular-nums" }}>{val}</div>
                    <div style={{ color: "var(--muted)", fontSize: "0.65rem", marginTop: "0.2rem" }}>{lab}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: "-4px", borderRadius: "1.5rem", background: "linear-gradient(135deg, var(--accent), transparent)", opacity: 0.4 }} />
                <img src="/Manikandan_P.png" alt="Manikandan P" style={{ position: "relative", width: "16rem", height: "16rem", borderRadius: "1.5rem", objectFit: "cover", border: "2px solid rgba(62,99,221,0.3)" }} />
              </div>
              <div style={{ width: "16rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { icon: "🎓", l: "B.Tech Aerospace · HITS, Chennai", s: "CGPA: 7.68 / 10" },
                  { icon: "🏭", l: "TASL – Airbus C295 Manufacturing", s: "Jan–Mar 2026" },
                  { icon: "🛰️", l: "CubeSat Radiation Shielding Research", s: "ANSYS + NASA OLTARIS" },
                  { icon: "📍", l: "Chennai / Bengaluru · Open to relocation", s: "" },
                ].map(item => (
                  <div key={item.l} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.75rem", padding: "0.6rem 0.75rem" }}>
                    <span style={{ fontSize: "0.85rem", marginTop: "0.1rem" }}>{item.icon}</span>
                    <div>
                      <div style={{ color: "var(--text)", fontSize: "0.72rem", fontWeight: 500 }}>{item.l}</div>
                      {item.s && <div style={{ color: "var(--muted)", fontSize: "0.68rem" }}>{item.s}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" label="01 / About" title="Background & Focus">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ color: "var(--text)", fontWeight: 600, marginBottom: "0.75rem" }}>Professional Summary</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              Multi-domain industry experience spanning aerostructure manufacturing, military helicopter systems &amp; airworthiness, and structural FEA. Demonstrated technical depth across composites, FEA, space radiation analysis (43.9% TID reduction, CubeSat – ANSYS + NASA OLTARIS), and systems-level rover design (NASA HERC 2025 – Team Leader, 11-member team).
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>
              Seeking a role at the intersection of <strong style={{ color: "var(--text)" }}>structural engineering, advanced manufacturing, and aerospace systems</strong>. Open to relocation. Languages: English (Professional), Tamil (Native).
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "rgba(62,99,221,0.08)", border: "1px solid rgba(62,99,221,0.2)", borderRadius: "1rem", padding: "1.25rem" }}>
              <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>Education</p>
              <p style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.875rem" }}>B.Tech – Aerospace Engineering</p>
              <p style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "0.3rem" }}>Hindustan Institute of Technology and Science, Chennai</p>
              <p style={{ color: "var(--muted)", fontSize: "0.75rem", marginTop: "0.2rem" }}>Aug 2022 – Jun 2026 · CGPA: 7.68 / 10</p>
              <p style={{ color: "var(--muted)", fontSize: "0.72rem", marginTop: "0.5rem" }}>Aerospace Structures · Propulsion · Composites · Aeroelasticity</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "1rem", padding: "1.25rem" }}>
              <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>Leadership</p>
              <p style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.8rem" }}>Design &amp; Media Head · Web Admin · Junior Researcher</p>
              <p style={{ color: "var(--muted)", fontSize: "0.72rem", marginTop: "0.3rem" }}>Nebula Astro Club, HITS · Sep 2022 – Present</p>
              <p style={{ color: "var(--muted)", fontSize: "0.72rem", marginTop: "0.3rem", lineHeight: 1.5 }}>Progressed from Junior Researcher to Design &amp; Media Head; managed club web presence for 1.5 years.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" label="02 / Experience" title="Professional Experience">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {EXPERIENCES.map((exp, i) => <ExperienceCard key={i} exp={exp} defaultOpen={i === 0} />)}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" label="03 / Projects" title="Key Technical Projects">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))", gap: "1.25rem" }}>
          {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research" label="04 / Research & IP" title="Patent, Publications & Certifications">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
          <div style={{ background: "rgba(201,125,53,0.08)", border: "1px solid rgba(201,125,53,0.25)", borderRadius: "1rem", padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span>📜</span>
              <span style={{ color: "#c97d35", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>Indian Patent · July 2025</span>
            </div>
            <h3 style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>A Process for Preparing Sandwich Core using Additive Manufacturing</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.72rem" }}>Indian Patent Application No. 202541064323 A · Co-inventor</p>
            <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "0.6rem", lineHeight: 1.6 }}>FDM and SLS-based lattice sandwich core geometries for improved stiffness-to-weight ratio in lightweight aerospace structural panels — applicable to aerostructure and space component manufacturing.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <span>📄</span>
              <span style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>Conference Manuscript</span>
            </div>
            <h3 style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>Composite Aircraft Radome – CLT Displacement Analysis</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "0.4rem", lineHeight: 1.6 }}>Submitted to International Conference on Smart Materials &amp; Technology (ICSMT 2025). Demonstrates 39% displacement reduction using astroquartz over E-glass and 25% lower shear angle deformation in woven vs. UD fibre configurations.</p>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.5rem" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "1rem" }}>Certifications</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))", gap: "0.75rem" }}>
            {CERTIFICATIONS.map(c => (
              <div key={c.name} style={{ display: "flex", gap: "0.6rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0.75rem", padding: "0.75rem" }}>
                <span>🏅</span>
                <div>
                  <p style={{ color: "var(--text)", fontSize: "0.78rem", fontWeight: 500 }}>{c.name}</p>
                  {c.org && <p style={{ color: "var(--muted)", fontSize: "0.7rem" }}>{c.org}</p>}
                  <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontFamily: "monospace", marginTop: "0.2rem" }}>{c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" label="05 / Skills" title="Technical Skills">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))", gap: "1rem" }}>
          {SKILLS.map(g => (
            <div key={g.category} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "0.875rem", padding: "1.25rem" }}>
              <p style={{ color: "var(--accent)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>{g.category}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {g.items.map(item => (
                  <li key={item} style={{ display: "flex", gap: "0.5rem", color: "var(--muted)", fontSize: "0.8rem", marginBottom: "0.4rem", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" label="06 / Contact" title="Let's Connect">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Open to <strong style={{ color: "var(--text)" }}>full-time roles, internships, collaborations, and research projects</strong> in Aerospace Systems, Structural Engineering, Space Systems, and Advanced Manufacturing. Open to relocation anywhere in India or abroad.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: "✉️", label: "Email", value: "manikandan.aeroeng@gmail.com", href: "mailto:manikandan.aeroeng@gmail.com" },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/manikandan-aero", href: "https://www.linkedin.com/in/manikandan-aero/" },
                { icon: "🐙", label: "GitHub", value: "github.com/manikandan-space-eng", href: "https://github.com/manikandan-space-eng" },
              ].map(c => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.875rem", padding: "1rem", textDecoration: "none", transition: "border-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(62,99,221,0.4)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                >
                  <span style={{ fontSize: "1.1rem" }}>{c.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "var(--accent)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{c.label}</div>
                    <div style={{ color: "var(--text)", fontSize: "0.85rem" }}>{c.value}</div>
                  </div>
                  <span style={{ color: "var(--muted)" }}>↗</span>
                </a>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(62,99,221,0.06)", border: "1px solid rgba(62,99,221,0.2)", borderRadius: "1rem", padding: "1.75rem" }}>
            <h3 style={{ color: "var(--text)", fontWeight: 600, marginBottom: "0.75rem" }}>Quick Download</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>Get a full overview of my education, experience, projects, and technical skills — all in one document.</p>
            <a href="/Manikandan_Resume.pdf" target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", width: "100%", padding: "0.75rem", borderRadius: "0.75rem", background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
              📄 Download Resume (PDF)
            </a>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1rem" }}>
              {[["3+", "Internships"], ["1", "Patent filed"], ["4+", "Major Projects"], ["7.68", "CGPA / 10"]].map(([v, l]) => (
                <div key={l} style={{ textAlign: "center", background: "rgba(255,255,255,0.04)", borderRadius: "0.75rem", padding: "0.75rem" }}>
                  <div style={{ color: "var(--text)", fontWeight: 800, fontSize: "1.1rem" }}>{v}</div>
                  <div style={{ color: "var(--muted)", fontSize: "0.68rem", marginTop: "0.2rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ color: "var(--muted)", fontSize: "0.75rem" }}>© {new Date().getFullYear()} Manikandan P · Aerospace Engineer · Chennai / Bengaluru, India</p>
          <p style={{ color: "var(--muted)", fontSize: "0.75rem" }}>Built with React + Tailwind · Hosted on GitHub Pages</p>
        </div>
      </footer>
    </div>
  );
}
