export default function ProjectCard({ title, description, tags = [], link }) {
  return (
    <article className="project-card">
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
          View project
        </a>
      )}
    </article>
  )
}


