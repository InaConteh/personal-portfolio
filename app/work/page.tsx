import type { Metadata } from 'next'
import { Suspense } from 'react'
import Reveal from '@/components/Reveal'
import WorkFilter from '@/components/WorkFilter'
import WorkCard from '@/components/WorkCard'
import { getProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies across code, design and motion: civic data platforms, design systems, 3D showcases and client sites.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  // The body isn't needed for cards; keep the client payload small.
  const projects = getProjects().map((project) => ({ ...project, body: '' }))

  return (
    <div className="container">
      <header className="page-hero">
        <Reveal immediate>
          <span className="eyebrow">Selected work</span>
        </Reveal>
        <Reveal immediate delay={0.08}>
          <h1 className="page-hero__title">
            Work<span className="dot">.</span>
          </h1>
        </Reveal>
        <Reveal immediate delay={0.16}>
          <p className="page-hero__lead">
            Products I&apos;ve designed, built and animated, from civic data platforms in Sierra Leone to 3D showcases.
            Filter by discipline.
          </p>
        </Reveal>
      </header>

      <section className="section section--tight" aria-labelledby="projects-title">
        <h2 id="projects-title" className="sr-only">
          Projects
        </h2>
        <Suspense
          fallback={
            <div className="work-grid">
              {projects.map((project) => (
                <WorkCard key={project.slug} project={project} />
              ))}
            </div>
          }
        >
          <WorkFilter projects={projects} />
        </Suspense>
      </section>
    </div>
  )
}
