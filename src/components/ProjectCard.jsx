import ChessCard from './ChessCard'
import VideoCaseStudy from './VideoCaseStudy'

export default function ProjectCard({ project, onOpenCaseStudy, title, subtitle, description, tags = [], link, image, video, highlight }) {
  const p = project || { title, subtitle, description, tags, link, image, video, highlight }

  if (p.video) {
    return <VideoCaseStudy project={p} />
  }

  return (
    <ChessCard className="project-card">
      <div className="project-card__inner">
        {p.image && (
          <div className="project-card__media">
            <img 
              className="project-card__image" 
              src={p.image} 
              alt={p.title}
              loading="lazy"
              decoding="async"
            />
            {p.highlight && <span className="project-card__badge">{p.highlight}</span>}
          </div>
        )}
        <div className="project-card__content">
          {p.subtitle && <span className="project-card__subtitle">{p.subtitle}</span>}
          <h3 className="project-card__title">{p.title}</h3>
          <p className="project-card__description">{p.description}</p>
          {p.tags?.length > 0 && (
            <ul className="project-card__tags">
              {p.tags.map((tag) => (
                <li key={tag} className="project-card__tag">{tag}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="project-card__actions">
          {onOpenCaseStudy && (
            <button 
              type="button"
              className="project-card__cs-btn" 
              onClick={() => onOpenCaseStudy(p)}
              aria-label={`View case study for ${p.title}`}
            >
              <span>Case Study</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </button>
          )}

          {p.link && (
            <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer" aria-label={`View ${p.title}`}>
              <span>View Live</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </ChessCard>
  )
}


