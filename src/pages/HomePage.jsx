import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import ChessCard from '../components/ChessCard'
import ProjectCard from '../components/ProjectCard'
import CaseStudyModal from '../components/CaseStudyModal'
import { STRATEGIC_PRINCIPLES, PROJECTS } from '../constants'

export default function HomePage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)
  const featuredProjects = PROJECTS.slice(0, 3)

  return (
    <div className="page page--home">
      <Hero />

      {/* Strategic Engineering Principles Section */}
      <section className="section home-principles">
        <div className="section__header">
          <span className="section__subtitle">Strategic Philosophy</span>
          <h2 className="section__title">
            <span className="section__title-accent">01.</span> Calculated Engineering
          </h2>
          <p className="section__desc">
            Just as every chess grandmaster evaluates moves several turns in advance, good software engineering demands foresight, structure, and deliberate execution.
          </p>
        </div>

        <div className="principles-grid">
          {STRATEGIC_PRINCIPLES.map((principle) => (
            <ChessCard key={principle.title} className="principle-card">
              <div className="principle-card__header">
                <span className="principle-card__icon">{principle.icon}</span>
                <span className="principle-card__tag">{principle.subtitle}</span>
              </div>
              <h3 className="principle-card__title">{principle.title}</h3>
              <p className="principle-card__desc">{principle.description}</p>
            </ChessCard>
          ))}
        </div>
      </section>

      {/* Tech Stack & Expertise (Embedded Skills Section) */}
      <Skills />

      {/* Featured Projects Highlight Section */}
      <section className="section home-featured-projects">
        <div className="section__header">
          <span className="section__subtitle">Selected Deployments</span>
          <h2 className="section__title">
            <span className="section__title-accent">03.</span> Featured Projects & Case Studies
          </h2>
          <p className="section__desc">
            Explore deep-dive technical breakdowns of real-world full stack platforms, 3D interactive interfaces, and regional web applications.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id || project.title} 
              project={project} 
              onOpenCaseStudy={setActiveCaseStudy}
            />
          ))}
        </div>

        <div className="home-featured-cta">
          <Link to="/projects" className="btn btn--secondary">
            <span>Explore All Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>

      {/* Explore Navigation Grid */}
      <section className="home-preview section">
        <div className="section__header">
          <span className="section__subtitle">Explore Navigation</span>
          <h2 className="section__title">
            <span className="section__title-accent">04.</span> Strategic Directions
          </h2>
        </div>

        <div className="home-preview__grid">
          <ChessCard className="preview-card-wrapper">
            <Link to="/about" className="preview-card">
              <div className="preview-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>About & Journey</h3>
              <p>Full stack developer, chess strategist, and continuous learner building scalable digital experiences. Discover my background, career timeline, and core engineering philosophy.</p>
              <span className="preview-card__link">Read bio &rarr;</span>
            </Link>
          </ChessCard>

          <ChessCard className="preview-card-wrapper">
            <Link to="/projects" className="preview-card">
              <div className="preview-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Featured Work</h3>
              <p>Browse a curated selection of full stack platforms, 3D interactive applications, and client solutions with live site deployments and source code.</p>
              <span className="preview-card__link">View projects &rarr;</span>
            </Link>
          </ChessCard>

          <ChessCard className="preview-card-wrapper">
            <Link to="/contact" className="preview-card">
              <div className="preview-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Get In Touch</h3>
              <p>Ready to start your next move? Connect directly for project collaborations, engineering consultations, or technical opportunities.</p>
              <span className="preview-card__link">Send message &rarr;</span>
            </Link>
          </ChessCard>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal 
        project={activeCaseStudy} 
        onClose={() => setActiveCaseStudy(null)} 
      />
    </div>
  )
}


