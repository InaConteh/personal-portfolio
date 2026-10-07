import Link from 'next/link'
import Reveal from '@/components/Reveal'
import AutoVideo from '@/components/AutoVideo'
import DisciplineCard from '@/components/DisciplineCard'
import WorkCard from '@/components/WorkCard'
import { getFeaturedProjects, getProjects } from '@/lib/content'
import { PRINCIPLES, PROFILE, TOOLS } from '@/lib/site'

export default function HomePage() {
  const featured = getFeaturedProjects()
  const more = getProjects().filter((project) => !project.featured)

  return (
    <>
      <section className="hero container">
        <div className="hero__grid">
          <div>
            <Reveal immediate>
              <span className="eyebrow">Available for work, 2026</span>
            </Reveal>
            <Reveal immediate delay={0.08}>
              <h1 className="hero__title">
                Interfaces that are built, designed &amp; <span className="accent">in motion.</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.16}>
              <p className="hero__lead">{PROFILE.pitch}</p>
            </Reveal>
            <Reveal immediate delay={0.24} className="hero__actions">
              <Link href="/work" className="btn btn--primary">
                See selected work <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a href={PROFILE.cvUrl} download="Ina-Conteh-CV.pdf" className="btn btn--ghost">
                Download CV
              </a>
            </Reveal>
          </div>

          <Reveal immediate delay={0.2}>
            <div className="window hero__reel">
              <div className="window__bar">
                <i />
                <i />
                <i />
                <span className="window__url">intro-loop.mp4</span>
              </div>
              <AutoVideo
                src="/intro-loop.mp4"
                poster="/intro-loop-poster.jpg"
                label="Intro animation: the name Ina Conteh types on, with Code, Design and Motion tags."
              />
            </div>
          </Reveal>
        </div>

        <div className="hero__cards">
          {featured.map((project, i) => (
            <Reveal key={project.slug} immediate delay={0.3 + i * 0.08}>
              <DisciplineCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="approach-title">
        <Reveal className="section__head">
          <span className="eyebrow">How I work</span>
          <h2 id="approach-title" className="section__title">
            Every move made with intention.
          </h2>
          <p className="section__lead">
            Good software, like good chess, is played several moves ahead: structure first, then speed, then shipping.
          </p>
        </Reveal>
        <div className="principles">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.08} className="panel principle">
              <div className="principle__top">
                <span>{principle.kicker}</span>
                <span className="principle__num">0{i + 1}</span>
              </div>
              <h3 className="principle__title">{principle.title}</h3>
              <p className="principle__desc">{principle.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {more.length > 0 && (
        <section className="section section--tight container" aria-labelledby="more-title">
          <Reveal className="section__head section__head--row">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="eyebrow">More work</span>
              <h2 id="more-title" className="section__title">
                Shipped for real clients.
              </h2>
            </div>
            <Link href="/work" className="btn btn--ghost">
              All work <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <div className="work-grid">
            {more.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <WorkCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <div className="marquee" aria-label="Tools I use">
        <div className="marquee__track">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={`${tool}-${i}`} aria-hidden={i >= TOOLS.length}>
              {tool}
            </span>
          ))}
        </div>
      </div>

      <section className="section container">
        <Reveal className="cta">
          <span className="eyebrow">Open for freelance &amp; full-time</span>
          <h2 className="cta__title">
            Have a product in mind<span className="dot">?</span>
          </h2>
          <p className="section__lead">Tell me about it. I reply within 24 hours.</p>
          <Link href="/contact" className="btn btn--primary">
            Let&apos;s talk <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </>
  )
}
