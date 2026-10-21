import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowUpRight, Menu, X, Code2, Smartphone,
  Database, RadioTower, Layers3, Globe2, Linkedin,
  Mail, MapPin, Phone, Download, ExternalLink, ChevronRight,
  BriefcaseBusiness, GraduationCap, Check, Sparkles, Award, Send
} from 'lucide-react'
import './styles.css'

const START = new Date('2022-05-01')
const years = (Math.floor(((Date.now() - START) / (365.25 * 24 * 3600 * 1000)) * 10) / 10).toFixed(1)

const competencies = ['Android & iOS (React Native)', 'REST API integration', 'UI/UX implementation', 'Mobile app lifecycle management', 'Redux Toolkit', 'Offline-first architecture', 'Firebase (Auth, FCM, Analytics, Crashlytics)', 'Third-party SDK integration', 'Agile / Scrum', 'Performance optimization']

const skills = [
  { title: 'Mobile development', items: ['React Native', 'React.js', 'Android production', 'Cross-platform builds'] },
  { title: 'Languages', items: ['TypeScript', 'JavaScript ES6+'] },
  { title: 'State & architecture', items: ['Redux Toolkit', 'React Hooks', 'Context API', 'Offline-first architecture'] },
  { title: 'Data & storage', items: ['SQLite', 'AsyncStorage', 'TypeORM', 'Local data synchronization'] },
  { title: 'Firebase & APIs', items: ['Authentication', 'FCM', 'Analytics', 'Crashlytics', 'Firestore', 'Remote Config', 'REST APIs', 'Axios'] },
  { title: 'Tools & practices', items: ['Git / GitLab', 'Android Studio', 'VS Code', 'Postman', 'Google Play Console', 'Agile / Scrum', 'Code reviews'] },
]

const projects = [
  {
    number: '01',
    client: 'Client: JAP-IT, Government of Jharkhand',
    tag: 'OFFLINE-FIRST',
    name: 'JAPTI — Sahiya',
    type: 'PUBLIC HEALTH · GOVERNMENT OF JHARKHAND',
    description: 'A healthcare field-operations application for ASHA workers, built to keep services running across online, offline, and low-connectivity environments.',
    points: ['Dynamic offline registration forms', 'Automatic local-to-server synchronization', 'English and Hindi support', 'Analytics, reporting, and FCM notifications'],
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'SQLite', 'AsyncStorage', 'TypeORM', 'Firebase'],
    icon: <RadioTower size={24} />,
    accent: 'lime',
  },
  {
    number: '02',
    client: 'Client: Dhanush Softech Pvt. Ltd.',
    tag: 'VIDEO & AUDIO CARE',
    name: 'VIDMED',
    type: 'SECURE TELEMEDICINE',
    description: 'A telemedicine application that helps patients consult doctors through secure real-time video and audio consultations.',
    points: ['Patient consultation workflows', 'Appointment scheduling', 'Secure video and audio calling', 'Firebase authentication and push notifications'],
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'REST APIs'],
    icon: <Smartphone size={24} />,
    accent: 'blue',
  },
  {
    number: '03',
    client: 'Government of Uttarakhand, Dept. of Health & Family Welfare',
    tag: '400+ HEALTH CENTRES',
    name: 'Uttarakhand Telemedicine',
    type: 'GOVERNMENT HEALTH & FAMILY WELFARE',
    description: 'A hub-and-spoke telehealth platform connecting 4 medical colleges with 400+ health centres across rural Uttarakhand, including patient, agent, and doctor apps.',
    points: ['Patient registration and appointments with offline capture and sync', 'Real-time video/audio consultations', 'Role-based authentication and ABHA patient verification', 'Digital prescriptions and patient history', 'Performance tuning, testing and production support across 400+ facilities'],
    stack: ['React Native', 'TypeScript', 'Firebase', 'SQLite', 'REST APIs'],
    icon: <Globe2 size={24} />,
    accent: 'violet',
  },
]

const experience = [
  'Designed and developed cross-platform mobile applications with React Native, TypeScript, and JavaScript.',
  'Built reusable UI components with React Hooks and Redux Toolkit, working with UI/UX designers to turn mockups into pixel-accurate, responsive interfaces that follow platform design guidelines.',
  'Implemented offline-first data storage and automatic synchronization using SQLite, AsyncStorage, and TypeORM.',
  'Integrated REST APIs with Java backend services and Firebase Authentication, FCM, Analytics, Crashlytics, Firestore, and Remote Config.',
  'Delivered multilingual functionality in English and Hindi and integrated third-party NPM libraries and native modules.',
  'Owned the mobile lifecycle: sprint planning, development, code reviews, QA handoff, Google Play Console deployment, and post-release monitoring and support.',
  'Improved rendering efficiency, reduced unnecessary API calls, and resolved production issues using Crashlytics monitoring.',
  'Delivered 4 production mobile applications in a 12-member Agile team.',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const navItems = [['About', '#about'], ['Highlights', '#highlights'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']]

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sirajuddin Khan home">
          <span className="brand-mark">SK<span>.</span></span>
          <span className="brand-caption">DEVELOPER PORTFOLIO</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="site-nav">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="site-nav" className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="/Sirajuddin_Khan_Resume.pdf" download>Resume <Download size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO REACT NATIVE ROLES</div>
            <h1>Building mobile<br />experiences that<br /><span>make a difference.</span></h1>
            <p className="hero-lead">I'm <strong>Sirajuddin Khan</strong> — a Mobile Application Developer focused on reliable cross-platform apps, offline-first architecture, and meaningful healthcare technology.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-number">{years}+</span><span className="meta-label">YEARS EXPERIENCE</span></div>
              <div><span className="meta-number">04</span><span className="meta-label">PRODUCTION APPS</span></div>
              <div><span className="meta-number">400+</span><span className="meta-label">HEALTH CENTRES SUPPORTED</span></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract mobile developer illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-grid" />
            <div className="floating-tag tag-top"><Code2 size={15} /> React Native</div>
            <div className="phone-frame">
              <div className="phone-top"><span /> <span /></div>
              <div className="phone-screen">
                <div className="screen-greeting">Field visit<span>.</span></div>
                <div className="screen-line line-long" /><div className="screen-line line-short" />
                <div className="screen-card"><div className="screen-card-icon"><Layers3 size={18} /></div><div><b>Saved on device</b><small>Syncs when you reconnect</small></div></div>
                <div className="screen-chart"><span /><span /><span /><span /><span /><span /><span /></div>
                <div className="screen-pill"><span /> SYNC COMPLETE</div>
              </div>
            </div>
            <div className="floating-tag tag-bottom"><Database size={15} /> Offline-first systems</div>
            <div className="art-caption">OFFLINE · SYNC · RELEASE</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">ABOUT</div>
          <div className="about-grid">
            <div><h2>Technology should<br />solve <span>real problems.</span></h2></div>
            <div className="about-copy">
              <p className="large-copy">I build cross-platform mobile applications that bring people and essential services closer together.</p>
              <p>With {years}+ years of professional experience, I've worked on healthcare, telemedicine, and government solutions. My focus spans reusable interfaces, dependable API integration, offline data workflows, and the full journey from development to production support.</p>
              <p>I collaborate closely with backend developers, QA engineers, business analysts, and project managers in Agile teams. My production experience is primarily Android, with working knowledge of iOS concepts and React Native cross-platform builds.</p>
              <div className="skill-tags competency-tags">{competencies.map(c => <span key={c}>{c}</span>)}</div>
              <div className="location-line"><MapPin size={16} /> Hyderabad, Telangana, India</div>
            </div>
          </div>
        </section>

        <section className="highlights-section section-block" id="highlights">
          <div className="section-wrap">
            <div className="section-heading"><div><div className="section-kicker">HIGHLIGHTS</div><h2>Highlights<br /><span>and recognition.</span></h2></div><p>What my projects have reached, how I work with teams, and a letter of appreciation from my employer.</p></div>
            <div className="highlight-grid">
              <article className="highlight-card"><span className="highlight-icon"><Globe2 size={20} /></span><strong>400+ health centres</strong><h3>Rural health reach</h3><p>The Uttarakhand telemedicine platform links 4 medical colleges with more than 400 health centres.</p></article>
              <article className="highlight-card"><span className="highlight-icon"><BriefcaseBusiness size={20} /></span><strong>12-member team</strong><h3>Agile delivery</h3><p>Sprint planning, code reviews and QA handoff alongside backend developers, QA engineers and analysts.</p></article>
              <article className="highlight-card"><span className="highlight-icon"><Database size={20} /></span><strong>Offline-first</strong><h3>Designed for the field</h3><p>Local storage and synchronization workflows for applications used in low-connectivity environments.</p></article>
            </div>
            <article className="recognition-card"><div className="recognition-copy"><span className="recognition-label"><Award size={16} /> PROFESSIONAL RECOGNITION</span><h3>Appreciation letter for the JAP-IT Sahiya project</h3><p>Dhanush Healthcare Systems Pvt. Ltd. (formerly Dhanush InfoTech) thanked me for my efforts on the JAP-IT Sahiya project, citing dedication, teamwork and consistent commitment under tight timelines. The letter is dated 28 November 2025.</p><span className="recognition-date">28 NOVEMBER 2025 · JAP-IT SAHIYA PROJECT</span></div><a className="recognition-image-link" href="/appreciation-letter.jpg" target="_blank" rel="noreferrer" aria-label="Open appreciation letter"><img src="/appreciation-letter.jpg" width="1448" height="2048" loading="lazy" alt="Appreciation letter from Dhanush Healthcare Systems for work on the JAP-IT Sahiya Project, dated 28 November 2025" /><span>View letter <ArrowUpRight size={14} /></span></a></article>
          </div>
        </section>

        <section className="skills-section section-block" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="section-kicker">TOOLKIT</div><h2>Skills & <span>technologies.</span></h2></div>
              <p>The tools I use to turn product requirements into stable, maintainable mobile experiences.</p>
            </div>
            <div className="skills-grid">
              {skills.map((group, i) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-top"><span />{i === 0 ? <Smartphone /> : i === 1 ? <Code2 /> : i === 2 ? <Layers3 /> : i === 3 ? <Database /> : i === 4 ? <RadioTower /> : <BriefcaseBusiness />}</div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-kicker">EXPERIENCE</div>
          <div className="experience-head">
            <h2>Work that ships.<br /><span>Impact that lasts.</span></h2>
            <div className="experience-badge"><BriefcaseBusiness size={18} /><span>PROFESSIONAL EXPERIENCE</span></div>
          </div>
          <div className="timeline">
            <div className="timeline-rail"><span /></div>
            <div className="timeline-content">
              <div className="timeline-top"><div><h3>React Native Developer</h3><p className="company">Dhanush Softech Pvt. Ltd. <span>· Hyderabad, India</span></p></div><span className="date-chip">MAY 2022 — PRESENT</span></div>
              <p className="timeline-intro">Developing and maintaining production-ready cross-platform applications across healthcare and telemedicine.</p>
              <div className="experience-list">
                {experience.map((item, i) => <div className="experience-item" key={i}><span className="check-icon"><Check size={13} /></span><p>{item}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section-block" id="projects">
          <div className="section-wrap">
            <div className="section-heading projects-heading">
              <div><div className="section-kicker">SELECTED WORK</div><h2>Projects with <span>purpose.</span></h2></div>
              <p>Real-world mobile products built for access, reliability, and better service delivery.</p>
            </div>
            <div className="projects-list">
              {projects.map(project => (
                <article className={`project-card project-${project.accent}`} key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <div className="project-title-row"><div className="project-icon">{project.icon}</div><div><div className="project-type">{project.type}</div><h3>{project.name}</h3></div></div>
                    <p className="project-client">{project.client}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-points">{project.points.map(point => <div key={point}><ChevronRight size={15} />{point}</div>)}</div>
                    <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-decoration"><div className="deco-ring ring-a" /><div className="deco-ring ring-b" /><div className="deco-symbol">{project.icon}</div><span>{project.tag}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-wrap section-block" id="education">
          <div className="section-kicker">EDUCATION</div>
          <div className="section-heading"><h2>Learning is <span>ongoing.</span></h2><p>A foundation in computer applications, strengthened by hands-on product development.</p></div>
          <div className="education-grid">
            <article className="education-card"><div className="education-icon"><GraduationCap size={22} /></div><div><span className="education-years">2018 — 2020</span><h3>Master of Computer Applications</h3><p>Biju Patnaik University of Technology (BPUT)</p></div><span className="education-level">MCA</span></article>
            <article className="education-card"><div className="education-icon"><GraduationCap size={22} /></div><div><span className="education-years">2015 — 2018</span><h3>Bachelor of Computer Applications</h3><p>Utkal University, PJ College of Management & Technology</p></div><span className="education-level">BCA</span></article>
          </div>
          <div className="languages-row"><span className="languages-label">LANGUAGES</span><div><span>English</span><span>Hindi</span><span>Odia</span></div></div>
        </section>

        <section className="contact-section section-block" id="contact">
          <div className="section-wrap contact-wrap">
            <div className="section-kicker">GET IN TOUCH</div>
            <div className="contact-grid">
              <div><h2>Have a good<br />problem to <span>solve?</span></h2><p>I'm open to discussing mobile development opportunities, product challenges, and ways to build technology that helps people.</p><a className="button button-primary" href="mailto:sirajuddinkhankhan452@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></div>
              <div className="contact-details">
                <a href="mailto:sirajuddinkhankhan452@gmail.com" className="contact-item"><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small><b>sirajuddinkhankhan452@gmail.com</b></span><ArrowUpRight size={16} /></a>
                <a href="tel:+917205402188" className="contact-item"><span className="contact-icon"><Phone size={18} /></span><span><small>PHONE</small><b>+91 7205402188</b></span><ArrowUpRight size={16} /></a>
                <a href="https://www.linkedin.com/in/sirajuddin-khan-react-native" target="_blank" rel="noreferrer" className="contact-item"><span className="contact-icon"><Linkedin size={18} /></span><span><small>LINKEDIN</small><b>Connect professionally</b></span><ExternalLink size={16} /></a>
                <div className="contact-item location-item"><span className="contact-icon"><MapPin size={18} /></span><span><small>LOCATION</small><b>Hyderabad, Telangana, India</b></span></div>
                <form className="contact-form" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`); const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`); window.location.href = `mailto:sirajuddinkhankhan452@gmail.com?subject=${subject}&body=${body}`; }}>
                  <h3>Send a quick message</h3><label>Your name<input name="name" autoComplete="name" required placeholder="Enter your name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Message<textarea name="message" required rows="4" placeholder="Tell me a little about the opportunity..." /></label><button className="button button-primary" type="submit">Prepare email <Send size={15} /></button><small className="form-hint">This opens your email app with the message prepared; it does not send anything automatically.</small>
                </form>
              </div>
            </div>
            <div className="contact-note"><Sparkles size={15} /> Based in Hyderabad. Available for React Native roles.</div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">SK<span>.</span></span></a>
        <span>© {new Date().getFullYear()} Sirajuddin Khan. Built with React + Vite.</span>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
