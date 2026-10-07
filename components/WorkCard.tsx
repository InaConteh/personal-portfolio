import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/content'
import { TAG_LABELS } from '@/lib/site'

const TAG_COLOR = { code: 'var(--teal)', design: 'var(--purple)', motion: 'var(--pink)' } as const

export default function WorkCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="work-card">
      <div className="work-card__media">
        <Image
          src={project.cover}
          alt=""
          fill
          sizes="(max-width: 820px) 100vw, 620px"
          priority={priority}
        />
      </div>
      <div className="work-card__body">
        <div className="work-card__meta">
          <span>{project.category}</span>
          <span style={{ display: 'flex', gap: '0.9rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="work-card__kind"
                style={{ '--chip-color': TAG_COLOR[tag] } as React.CSSProperties}
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
          </span>
        </div>
        <h3 className="work-card__title">{project.title}</h3>
        <p className="work-card__desc">{project.summary}</p>
        <span className="work-card__cta mono">
          Read case study <span className="arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
