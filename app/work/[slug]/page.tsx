import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Reveal from '@/components/Reveal'
import { getProject, getProjects } from '@/lib/content'
import { TAG_LABELS } from '@/lib/site'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, images: [project.cover] },
  }
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const projects = getProjects()
  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  const facts = [
    project.role && { label: 'Role', value: project.role },
    project.year && { label: 'Year', value: project.year },
    { label: 'Discipline', value: project.tags.map((t) => TAG_LABELS[t]).join(' · ') },
    { label: 'Stack', value: project.stack.join(', ') },
  ].filter(Boolean) as Array<{ label: string; value: string }>

  return (
    <article className="container">
      <header className="page-hero">
        <Reveal immediate>
          <Link href="/work" className="back-link mono">
            <span aria-hidden="true">←</span> All work
          </Link>
        </Reveal>
        <Reveal immediate delay={0.05}>
          <span className="eyebrow">{project.category}</span>
        </Reveal>
        <Reveal immediate delay={0.1}>
          <h1 className="page-hero__title case__title">
            {project.title}
            <span className="dot">.</span>
          </h1>
        </Reveal>
        <Reveal immediate delay={0.16}>
          <p className="page-hero__lead">{project.summary}</p>
        </Reveal>
        <Reveal immediate delay={0.2} className="hero__actions" as="div">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Visit live site <span className="arrow" aria-hidden="true">↗</span>
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Source code
            </a>
          )}
        </Reveal>
      </header>

      <Reveal immediate delay={0.24}>
        <dl className="facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <section className="case__media" aria-label="Media">
        {project.media.map((item) =>
          item.type === 'video' ? (
            <figure key={item.src}>
              <div className="window">
                <div className="window__bar">
                  <i />
                  <i />
                  <i />
                  <span className="window__url">{project.title}</span>
                </div>
                <video controls playsInline preload="none" poster={item.poster} aria-label={item.caption}>
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ) : (
            <figure key={item.src}>
              <div className="window">
                <div className="window__bar">
                  <i />
                  <i />
                  <i />
                  <span className="window__url">{project.link?.replace(/^https?:\/\//, '') ?? project.title}</span>
                </div>
                <Image src={item.src} alt={item.alt} width={1600} height={1000} sizes="(max-width: 1240px) 100vw, 1240px" priority className="case__img" />
              </div>
              <figcaption>{item.alt}</figcaption>
            </figure>
          ),
        )}
      </section>

      <div className="prose">
        <MDXRemote source={project.body} />
      </div>

      <nav className="next-project" aria-label="Next case study">
        <span className="eyebrow">Next case study</span>
        <Link href={`/work/${next.slug}`} className="next-project__link">
          {next.title} <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </nav>
    </article>
  )
}
