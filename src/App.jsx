// src/App.jsx
import Section from "./components/Section";
import NavBar from "./components/NavBar";
import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function App() {
  const projects = [
    { title:"AI-Powered Drone for Aquaculture", desc:"UAV monitoring with AI-driven image analysis for water quality and algal bloom detection.", tags:["AI","UAV","OpenCV","Python"]},
    { title:"Rotating Detonation Engine (RDE)", desc:"Wave dynamics study; injector/annulus trade-offs; detonation stability analysis.", tags:["Propulsion","Thermo-Fluids"]},
    { title:"Composite Aircraft Radome FEA", desc:"Astroquartz/Epoxy composite layup with deflection reduction via optimization.", tags:["FEA","Composites"]},
    { title:"Additive-Manufactured Sandwich Core (Patent)", desc:"Indian Patent (2025) — lattice core SLM validation and testing.", tags:["Additive Mfg","Patent","Lattice"]},
    { title:"Solar Sail + Hall Thruster Model", desc:"Hybrid propulsion trajectory model in MATLAB/Simulink.", tags:["Simulink","Hybrid"]},
    { title:"NASA HERC Rover Components", desc:"Lightweight drivetrain & frame for rough terrain reliability.", tags:["Mechanisms","Team"]},
  ];

  return (
    <div id="top">
      <NavBar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Engineering Aerospace Systems that Shape the Future.
            </h1>
            <p className="subtle mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg">
              Aerospace Engineer | Space Systems & Structural Design. I design, analyze and communicate reliable
              engineering solutions with clarity and rigor.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a className="btn btn-primary w-full sm:w-auto" href="#projects">View Work</a>
              <a className="btn w-full sm:w-auto" href="/Manikandan_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            </div>
          </div>

          <div className="flex md:justify-end">
            <img
              src="/Manikandan_P.png"
              alt="Manikandan P"
              className="w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-2xl object-cover shadow-soft border mx-auto md:mx-0"
              style={{ borderColor: "var(--border)" }}
            />
          </div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          <div className="card">
            <p className="subtle text-sm sm:text-base">
              Final-year B.Tech Aerospace Engineering student (HITS) with internships at DRDO RCMA (Helicopter) and
              L&T Shipbuilding. Strong in Python, MATLAB/Simulink, ANSYS (CFD/FEA), and composite materials testing.
              Patent filed in Additive Manufacturing.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Core Values</h3>
            <ul className="grid grid-cols-2 gap-2 subtle text-sm">
              <li>Precision</li><li>Innovation</li><li>Reliability</li><li>Clear Communication</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Professional Experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ExperienceItem role="Research Intern" org="DRDO — RCMA (Helicopter), Bengaluru" time="Dec 2024 – Jan 2025">
            <li>Aero load & stress analysis for rotor assemblies (MATLAB, SolidWorks).</li>
            <li>Automated reporting with Python/Excel-VBA.</li>
          </ExperienceItem>
          <ExperienceItem role="Engineering Intern" org="L&T Shipbuilding, Chennai" time="Jun 2025 – Jul 2025">
            <li>FEA validation of structural joints under aerospace-equivalent load cases.</li>
            <li>Supported inspection workflows and testing documentation.</li>
          </ExperienceItem>
        </div>
      </Section>

      <Section id="projects" title="Selected Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section id="research" title="Research & IP">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">Patent (2025)</h3>
            <p className="subtle text-sm sm:text-base">
              Additive-Manufactured Sandwich Core process — lattice structures optimized for stiffness-to-weight;
              validated via SLM and mechanical testing.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Space Schools — MCNS, MAHE</h3>
            <p className="subtle text-sm sm:text-base">
              SPARC III (Space Radiation) & SPARC (Space Data Analysis): radiation shielding, spectral fitting,
              and data processing workflows.
            </p>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card"><h4 className="font-semibold mb-2">Engineering Tools</h4><p className="subtle text-sm">CATIA, SolidWorks, GD&T</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Simulation & Analysis</h4><p className="subtle text-sm">ANSYS (CFD/FEA), MATLAB & Simulink</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Programming</h4><p className="subtle text-sm">Python (NumPy, SciPy, Matplotlib)</p></div>
          <div className="card"><h4 className="font-semibold mb-2">Docs & Reporting</h4><p className="subtle text-sm">LaTeX, MS Office, Technical Writing</p></div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ContactForm />
          <div className="card">
            <p className="subtle text-sm sm:text-base">
              I’m open to roles, internships, collaborations, and research projects in Aerospace Systems, Structures, and R&D.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
              <a className="btn w-full sm:w-auto" href="mailto:manikandan.aeroeng@gmail.com">Email</a>
              <a className="btn w-full sm:w-auto" href="https://github.com/manikandan-space-eng" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn w-full sm:w-auto" href="https://www.linkedin.com/in/manikandan-aero/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn w-full sm:w-auto" href="/Manikandan_Resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="hr" />
        <p className="py-6 text-center text-sm subtle">
          © {new Date().getFullYear()} Manikandan P · Built with React + Tailwind · Hosted on GitHub Pages
        </p>
      </footer>
    </div>
  );
}
