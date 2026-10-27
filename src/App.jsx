import { useState } from 'react'
import { profile, skills, projects } from './data'
import './App.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)

  const closeNav = () => setNavOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeNav}>
          {profile.name}
        </a>
        <button
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={navOpen ? 'nav open' : 'nav'}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={closeNav}>
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a className="btn btn-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Resume
              </a>
            )}
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>{profile.bio}</p>
          {profile.location && <p className="muted">{profile.location}</p>}
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill} className="skill-tag">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                key={project.name}
                className="project-card"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Reach out at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  )
}

export default App
