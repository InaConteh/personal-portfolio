import { useEffect } from 'react'

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const { title, subtitle, link, github, image, highlight, caseStudy, tags } = project

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-header__meta">
            {highlight && <span className="modal-badge">{highlight}</span>}
            <span className="modal-subtitle">{subtitle}</span>
          </div>
          <h2 id="modal-title" className="modal-title">{title}</h2>
          {caseStudy?.tagline && <p className="modal-tagline">{caseStudy.tagline}</p>}

          {tags?.length > 0 && (
            <ul className="modal-tags">
              {tags.map((tag) => (
                <li key={tag} className="modal-tag">{tag}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="modal-body">
          {image && (
            <div className="modal-media">
              <img src={image} alt={title} className="modal-image" />
              <div className="modal-media__overlay" />
            </div>
          )}

          {caseStudy && (
            <div className="modal-case-study">
              {/* Problem / Challenge */}
              <div className="cs-section">
                <div className="cs-section__header">
                  <span className="cs-section__icon">♟</span>
                  <h3>The Opening Gambit (Challenge)</h3>
                </div>
                <p className="cs-section__text">{caseStudy.problem}</p>
              </div>

              {/* Architecture */}
              <div className="cs-section">
                <div className="cs-section__header">
                  <span className="cs-section__icon">♞</span>
                  <h3>Tactical Architecture</h3>
                </div>
                <p className="cs-section__text">{caseStudy.architecture}</p>
              </div>

              {/* Key Features */}
              {caseStudy.keyFeatures?.length > 0 && (
                <div className="cs-section">
                  <div className="cs-section__header">
                    <span className="cs-section__icon">♜</span>
                    <h3>Key Execution Highlights</h3>
                  </div>
                  <ul className="cs-features-list">
                    {caseStudy.keyFeatures.map((feat, idx) => (
                      <li key={idx}>
                        <span className="cs-feature-icon">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact */}
              <div className="cs-section cs-section--impact">
                <div className="cs-section__header">
                  <span className="cs-section__icon">♚</span>
                  <h3>Endgame Impact & Results</h3>
                </div>
                <p className="cs-section__text">{caseStudy.impact}</p>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="btn btn--primary">
              <span>Launch Live Site</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="btn btn--secondary">
              <span>View Source Code</span>
            </a>
          )}
          <button className="btn btn--ghost" onClick={onClose}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  )
}
