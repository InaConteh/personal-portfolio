export default function ProjectCard({ title, description, tags = [], link, image }) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-card__media">
          <img 
            className="project-card__image" 
            src={image} 
            alt={title}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        {tags?.length > 0 && (
          <ul className="project-card__tags">
            {tags.map((tag) => (
              <li key={tag} className="project-card__tag">{tag}</li>
            ))}
          </ul>
        )}
      </div>
      {link && (
        <a className="project-card__link" href={link} target="_blank" rel="noreferrer">
          <span>View project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      )}
    </article>
  )
}


