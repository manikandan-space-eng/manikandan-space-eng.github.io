import NavBar from "./components/NavBar";
import Section from "./components/Section";
import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function App(){
  const projects = [
    { title:"AI-Powered Drone for Aquaculture", desc:"UAV monitoring with AI-driven image analysis for water quality and algal bloom detection.", tags:["AI","UAV","OpenCV","Python"]},
    { title:"Rotating Detonation Engine (RDE)", desc:"Wave dynamics study; injector/annulus trade-offs; detonation stability analysis.", tags:["Propulsion","Thermo‑Fluids"]},
    { title:"Composite Aircraft Radome FEA", desc:"Astroquartz/Epoxy composite layup with deflection reduction via optimization.", tags:["FEA","Composites"]},
    { title:"Additive-Manufactured Sandwich Core (Patent)", desc:"Indian Patent (2025) — lattice core SLM validation and testing.", tags:["Additive Mfg","Patent","Lattice"]},
    { title:"Solar Sail + Hall Thruster Model", desc:"Hybrid propulsion trajectory model in MATLAB/Simulink.", tags:["Simulink","Hybrid"]},
    { title:"NASA HERC Rover Components", desc:"Lightweight drivetrain & frame for rough terrain reliability.", tags:["Mechanisms","Team"]},
  ];

  return (
    <div id="top">
      <NavBar />
      {/* HERO */}
      <section className="container pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Engineering Aerospace Systems that Shape the Future.</h1>
            <p className="subtle mt-4 max-w-xl">Aerospace Engineer specializing in Space Systems & Structural Design. I design, analyze and communicate reliable engineering solutions with clarity and rigor.</p>
            <div className="mt-6 flex gap-3">
              <a className="btn btn-primary" href="#projects">View Work</a>
              <a className="btn" href="/Manikandan_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            </div>
          </div>
          <div className="flex md:justify-end">
            <img src="/Manikandan_P.png" alt="Manikandan P" className="w-60 h-60 rounded-2xl object-cover shadow-soft border" style={{borderColor:'var(--border)'}} />
          </div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="card">
            <p className="subtle">Final-year B.Tech Aerospace Engineering student (HITS) with internships at DRDO RCMA (Helicopter) and L&T Shipbuilding. Strong in Python, MATLAB/Simulink, ANSYS (CFD/FEA), and composite materials testing. Patent filed in Additive Manufacturing.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Core Values</h3>
            <ul className="grid grid-cols-2 gap-2 subtle">
              <li>Precision</li><li>Innovation</li><li>Reliability</li><li>Clear Communication</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Professional Experience">
        <div className="grid md:grid-cols-2 gap-6">
          <ExperienceItem role="Research Intern" org="DRDO — RCMA (Helicopter), Bengaluru" time="Dec 2024 – Jan 2025">
            <li>Aero load & stress analysis for rotor assemblies (MATLAB, SolidWorks).</li>
            <li>Automated reporting with Python/Excel‑VBA.</li>
          </ExperienceItem>
          <ExperienceItem role="Engineering Intern" org="L&T Shipbuilding, Chennai" time="Jun 2025 – Jul 2025">
            <li>FEA validation of structural joints under aerospace‑equivalent load cases.</li>
            <li>Supported inspection workflows and testing documentation.</li>
          </ExperienceItem>
        </div>
      </Section>

      <Section id="projects" title="Selected Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p,i)=> <ProjectCard key={i} {...p} />)}
        </div>
      </Section>

      <Section id="research" title="Research & IP">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">Patent (2025)</h3>
            <p className="subtle">Additive‑Manufactured Sandwich Core process — lattice structures optimized for stiffness‑to‑weight; validated via SLM and mechanical testing.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Space Schools — MCNS, MAHE</h3>
            <p className="subtle">SPARC III (Space Radiation) & SPARC (Space Data Analysis): radiation shielding, spectral fitting, and data processing workflows.</p>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card"><h4 className="font-semibold mb-2">Engineering Tools</h4><p className="subtle text-sm">CATIA, SolidWorks, GD&T</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Simulation & Analysis</h4><p className="subtle text-sm">ANSYS (CFD/FEA), MATLAB & Simulink</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Programming</h4><p className="subtle text-sm">Python (NumPy, SciPy, Matplotlib)</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Docs & Reporting</h4><p className="subtle text-sm">LaTeX, MS Office, Technical Writing</p></div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ContactForm />
          <div className="card">
            <p className="subtle">I’m open to roles, internships, collaborations, and research projects in Aerospace Systems, Structures, and R&D.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="btn" href="mailto:manikandan.aeroeng@gmail.com">Email</a>
              <a className="btn" href="https://github.com/manikandan-space-eng" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href="https://www.linkedin.com/in/manikandan-aero/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href="/Manikandan_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="container"><hr className="hr" /></footer>
      <div className="container"><p className="py-6 text-center text-sm subtle">© {new Date().getFullYear()} Manikandan P · Built with React + Tailwind · Hosted on GitHub Pages</p></div>
    </div>
  );
}