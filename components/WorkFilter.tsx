'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import WorkCard from './WorkCard'
import type { Project, Tag } from '@/lib/content'
import { TAG_LABELS } from '@/lib/site'

const FILTERS: Array<Tag | 'all'> = ['all', 'code', 'design', 'motion']

export default function WorkFilter({ projects }: { projects: Project[] }) {
  const router = useRouter()
  const params = useSearchParams()
  const raw = params.get('tag')
  const active = FILTERS.includes(raw as Tag) ? (raw as Tag) : 'all'
  const visible = active === 'all' ? projects : projects.filter((p) => p.tags.includes(active))

  const select = (tag: Tag | 'all') => {
    router.replace(tag === 'all' ? '/work' : `/work?tag=${tag}`, { scroll: false })
  }

  return (
    <>
      <div className="filter" role="group" aria-label="Filter work by discipline">
        {FILTERS.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`chip filter__btn${tag === 'all' ? ' chip--all' : ` chip--${tag}`}`}
            aria-pressed={active === tag}
            onClick={() => select(tag)}
          >
            {tag === 'all' ? 'All' : TAG_LABELS[tag]}
            <span className="filter__count">
              {tag === 'all' ? projects.length : projects.filter((p) => p.tags.includes(tag)).length}
            </span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>

      {visible.length === 0 ? (
        <div className="panel empty">
          <p>Nothing tagged yet.</p>
          <button type="button" className="btn btn--ghost" onClick={() => select('all')}>
            Show all
          </button>
        </div>
      ) : (
        <motion.div layout className="work-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 180, damping: 22 }}
              >
                <WorkCard project={project} priority={i < 2} headingLevel={2} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  )
}
