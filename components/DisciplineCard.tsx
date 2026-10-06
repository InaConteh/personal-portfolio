import Link from 'next/link'
import ProjectArt from './ProjectArt'
import type { Project } from '@/lib/content'
import { TAG_LABELS } from '@/lib/site'

export default function DisciplineCard({ project }: { project: Project }) {
  const kind = project.tags[0]
  return (
    <Link href={`/work/${project.slug}`} className={`disc-card disc-card--${kind}`}>
      <div className="disc-card__art">
        <ProjectArt kind={kind} />
      </div>
      <div className="disc-card__foot">
        <span className="disc-card__name">{project.title}</span>
        <span className="disc-card__tag">{TAG_LABELS[kind]}</span>
      </div>
    </Link>
  )
}
