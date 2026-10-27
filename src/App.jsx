import { useState } from 'react'
import { profile, education, skills, projects, publications, manuscripts } from './data'
import './App.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

function ProjectCard({ project }) {
  const content = (
    <>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  )

  return project.link ? (
    <a className="project-card" href={project.link} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <div className="project-card">{content}</div>
  )
}

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

        <section id="education" className="section">
          <h2>Education</h2>
          <ul className="education-list">
            {education.map((e) => (
              <li key={e.school}>
                <div className="education-row">
                  <h3>{e.school}</h3>
                  <span className="muted">{e.period}</span>
                </div>
                <p className="muted">{e.degree}</p>
              </li>
            ))}
          </ul>
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

        <section id="research" className="section">
          <h2>Research</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="publications" className="section">
          <h2>Publications</h2>
          <ul className="publication-list">
            {publications.map((pub) => (
              <li key={pub.title}>
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noreferrer">
                    {pub.title}
                  </a>
                ) : (
                  <span className="publication-title">{pub.title}</span>
                )}
                <p className="muted">{pub.authors}</p>
                <p className="publication-venue">
                  {pub.venue} &middot; {pub.date}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="subsection-title">Manuscripts in Preparation / Under Review</h3>
          <ul className="publication-list">
            {manuscripts.map((m) => (
              <li key={m.title}>
                <span className="publication-title">{m.title}</span>
                <p className="muted">{m.authors}</p>
                <p className="publication-venue">{m.status}</p>
              </li>
            ))}
          </ul>
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
            {profile.scholar && (
              <a href={profile.scholar} target="_blank" rel="noreferrer">
                Google Scholar
              </a>
            )}
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
