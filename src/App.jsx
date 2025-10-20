import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import ExperienceItem from './components/ExperienceItem'
import Footer from './components/Footer'

export default function App(){
  const [year, setYear] = useState('')
  useEffect(()=>{ setYear(String(new Date().getFullYear())) },[])

  const projects = [
    { title: 'Application of Drones in Aquaculture– AI-powered Image Analysis', desc: 'Developed a drone-based monitoring system to assess aquaculture pond health using AI and image processing. Integrated real-time data collection, environmental sensing, and Python-based classification models for water quality and algal bloom detection.', tags:['MATLAB','Python','NanoEdge AI Studio']},
    { title: 'Rotating Detonation Engine (RDE)', desc: 'Technical study on wave dynamics, injector/annulus trade-offs, performance metrics, and safety envelope.', tags:['Propulsion','Thermo-Fluids']},
    { title: 'Telescopic Hold-Open Rod (AeroHack 2025)', desc: 'Concept + FBD + hand calcs + BOM for nacelle cowl door support with reliability and weight targets.', tags:['Structures','Design']},
    { title: 'AI SkyBuddy — AR Astronomy', desc: 'AR app with real-time overlays, narration, quizzes. Stack: Flutter + Unity AR Foundation; API integrations.', tags:['AR','AI','Flutter']},
    { title: 'NASA HERC — Human-Powered Rover', desc: 'Lightweight drivetrain + structural design for rough terrain; focus on reliability and manufacturability.', tags:['Mechanisms','Team']},
    { title: 'Resin Composite with Filler', desc: 'Filler optimization improving tensile/hardness properties; material characterization and testing workflow.', tags:['Materials','Testing']},
  ]

  return (
    <div>
      <NavBar />
      <main id="main">
        <Hero />
        <Section id="about" title="About Me">
          <p className="text-muted">
            I’m <span className="text-text font-semibold">MANIKANDAN P</span>, a final-year B.Tech Aerospace Engineering student at HITS, specializing in
            <span className="font-semibold"> Space Systems and Structures</span>. I build practical systems across propulsion, materials, and rotating machinery —
            from Rotating Detonation Engines to structural composites and condition monitoring. I enjoy translating theory into
            buildable designs and clear technical communication.
          </p>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="text-lg font-semibold">B.Tech — Aerospace Engineering</h3>
              <p className="text-muted">Hindustan Institute of Technology & Science (HITS) · 2021–2025</p>
              <ul className="list-disc ml-5 mt-3 space-y-1 text-muted">
                <li>Focus: Space Systems & Structures, Compressible Flows, CFD</li>
                <li>Activities: Nebula Astro Club, NASA HERC Team</li>
                <li>Space Schools @ MAHE: SPARC III (Sept 2024); SPARC (Jul 2025)</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-4">
            <ExperienceItem role=" Research Intern" org="RCMA (Helicopter)">
              <li>Conducted aerodynamic load and stress analysis for rotor assemblies using MATLAB and Python.</li>
              <li>Condition monitoring fundamentals for rotating components.</li>
            </ExperienceItem>
            <ExperienceItem role=" Engineering Intern" org="L&T Shipbuilding">
              <li>Performed FEA and stress validation of marine composite interfaces relevant to aerospace standards.</li>
              <li>Supported inspection workflow automation for quality assurance documentation.</li>
              <li> Collaborated on structural optimization of composite and metallic assemblies.</li>
            </ExperienceItem>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i)=>(
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </Section>

        <Section id="research" title="Research & IP">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="text-lg font-semibold">Indian Patent (2025)</h3>
              <p className="text-muted">“A Process for Preparing Sandwich Core using Additive Manufacturing”.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Space Science Schools @ MCNS, MAHE</h3>
              <ul className="list-disc ml-5 mt-3 space-y-1 text-muted">
                <li>SPARC III (Sept 2024): Space Radiation — cosmic ray physics, shielding, LEO dose simulation.</li>
                <li>SPARC (Jul 2025): Space data processing and spectral fitting.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <ul className="flex flex-wrap gap-2">
            {['Python (advanced)','CFD & compressible flows','Materials & testing','Rotating machinery','Additive manufacturing','AR/Unity · Flutter','Technical writing · LaTeX'].map((s,i)=>(
              <span className="badge" key={i}>{s}</span>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card text-center">
            <p className="text-muted">Open to internships, research collaborations, and entry-level roles in aerospace.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a className="btn btn-primary" href="mailto:manikandan.aeroeng@gmail.com">Email Me</a>
              <a className="btn" href="https://github.com/manikandan-space-eng" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href="https://www.linkedin.com/in/manikandan-aero/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href="#" title="Add your resume PDF later">Resume (PDF)</a>
            </div>
            <p className="text-sm text-muted mt-3">© {year} MANIKANDAN P</p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
