import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { MILESTONES, PROFILE, SKILLS, TOOLS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Ina Conteh is a full stack developer and designer in Freetown, Sierra Leone. Background, skills, tools and CV.',
  alternates: { canonical: '/about' },
}

const STATS = [
  { value: '10+', label: 'Deployed projects' },
  { value: '2+', label: 'Years experience' },
  { value: '3', label: 'Disciplines' },
  { value: '1700+', label: 'Chess rating' },
]

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <Reveal immediate>
          <span className="eyebrow">About</span>
        </Reveal>
        <Reveal immediate delay={0.08}>
          <h1 className="page-hero__title">
            Figuring things out<span className="dot">.</span>
          </h1>
        </Reveal>
      </header>

      <section className="about-intro" aria-label="Introduction">
        <Reveal immediate delay={0.12}>
          <div className="portrait">
            <Image src="/My.jpg" alt="Portrait of Ina Conteh" fill sizes="(max-width: 860px) 100vw, 440px" priority />
            <div className="portrait__label">
              <span>{PROFILE.fullName}</span>
              <span>{PROFILE.location.split(',')[0]}</span>
            </div>
          </div>
        </Reveal>

        <Reveal immediate delay={0.18} className="about-intro__text">
          <p className="about-intro__lead">
            I&apos;ve always been drawn to figuring things out. Not necessarily because I had all the answers, but because I
            liked the process of taking something that didn&apos;t exist yet and finding a way to make it real.
          </p>
          <p>That curiosity eventually led me into software.</p>
          <p className="quote">
            In chess as in software engineering, every move must have a purpose. Play the position, not the emotion.
          </p>
          <div className="stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat">
                <div className="stat__num">{stat.value}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
            <a href={PROFILE.cvUrl} download="Ina-Conteh-CV.pdf" className="btn btn--primary">
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="story-title">
        <Reveal className="section__head">
          <span className="eyebrow">The story so far</span>
          <h2 id="story-title" className="section__title">
            How I think about building.
          </h2>
        </Reveal>

        <div className="story">
          <Reveal className="panel story-card">
            <span className="principle__top">
              <span>Genesis</span>
              <span className="principle__num">01</span>
            </span>
            <h3 className="story-card__title">It started with curiosity.</h3>
            <p>Before I thought of myself as an engineer, I was someone who liked experimenting.</p>
            <p>
              I wanted to understand how things worked, how they were built, and more importantly, whether I could build
              them myself. That curiosity turned into code.
            </p>
            <p>
              Then small projects became bigger projects. Ideas became interfaces. Interfaces became applications. And
              eventually, building software stopped being something I was simply learning and became something I wanted to
              dedicate myself to.
            </p>
          </Reveal>

          <Reveal className="panel story-card" delay={0.08}>
            <span className="principle__top">
              <span>Chess &amp; foresight</span>
              <span className="principle__num">02</span>
            </span>
            <h3 className="story-card__title">I think in systems.</h3>
            <p>Chess has had a strange influence on the way I approach software.</p>
            <p>
              A good move isn&apos;t only about what happens immediately after you make it. It&apos;s about the position
              you&apos;re creating several moves later.
            </p>
            <p>
              I think about software in much the same way. A quick solution can work today and become a nightmare six
              months later. A little more thought at the beginning can completely change what becomes possible later.
            </p>
            <p className="story-card__note">
              So I try to build with foresight. Not overengineering for the sake of it — but making decisions with
              intention.
            </p>
          </Reveal>

          <Reveal className="panel story-card story-card--wide">
            <span className="principle__top">
              <span>Craftsmanship</span>
              <span className="principle__num">03</span>
            </span>
            <h3 className="story-card__title">I learned to build.</h3>
            <p>
              Over the years, I&apos;ve worked across the stack — from interfaces and interactions to backend systems,
              APIs, databases, and infrastructure.
            </p>
            <p>
              I work primarily with technologies like React, Next.js, Node.js, and Python, but I&apos;ve never been
              particularly interested in collecting technologies just for the sake of it. I care more about understanding
              the problem first.
            </p>
            <ul className="story-card__list">
              <li>What are we actually trying to solve?</li>
              <li>What should exist?</li>
              <li>What shouldn&apos;t exist?</li>
              <li>How will someone actually use it?</li>
              <li>How do we build it in a way that can survive beyond the first version?</li>
            </ul>
            <p className="story-card__note">That&apos;s the part of engineering that keeps me interested.</p>
          </Reveal>

          <Reveal className="panel story-card">
            <span className="principle__top">
              <span>Product &amp; business</span>
              <span className="principle__num">04</span>
            </span>
            <h3 className="story-card__title">I&apos;m interested in more than code.</h3>
            <p>Software is only one part of the picture.</p>
            <p>
              I&apos;m interested in products, design, business, entrepreneurship, media, and the process of turning an
              idea into something people can actually use.
            </p>
            <p className="shift">
              <span className="shift__from">&quot;How do I build this?&quot;</span>
              <span aria-hidden="true">→</span>
              <span className="shift__to">&quot;Should this exist in the first place?&quot;</span>
            </p>
            <p>
              That question changes everything. It changes how you design. How you engineer. How you think about users. How
              you think about business. And ultimately, what you choose to build.
            </p>
          </Reveal>

          <Reveal className="panel story-card" delay={0.08}>
            <span className="principle__top">
              <span>The horizon</span>
              <span className="principle__num">05</span>
            </span>
            <h3 className="story-card__title">Where I&apos;m going.</h3>
            <p>I&apos;m still early. And that&apos;s something I actually like.</p>
            <p>
              There are technologies I haven&apos;t learned yet, products I haven&apos;t built yet, and problems I
              haven&apos;t even discovered yet. But I know the direction I want to move in.
            </p>
            <p className="story-card__note">
              I&apos;m interested in the long game. Not just becoming better at writing code, but becoming better at{' '}
              <strong>building</strong>.
            </p>
            <ul className="story-card__list">
              <li>Building systems.</li>
              <li>Building products.</li>
              <li>Building businesses.</li>
              <li>And eventually, building things that other people can build on.</li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="closing">
          <span className="eyebrow">The journey unfolds</span>
          <h2 className="closing__title" style={{ marginTop: '1rem' }}>
            This is still the beginning<span className="dot">.</span>
          </h2>
        </Reveal>
      </section>

      <section className="section section--tight" aria-labelledby="skills-title">
        <Reveal className="section__head">
          <span className="eyebrow">Skills</span>
          <h2 id="skills-title" className="section__title">
            Stack &amp; expertise.
          </h2>
        </Reveal>
        <div className="stack">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08} className="panel">
              <h3 className="stack__title">{group.category}</h3>
              <ul className="stack__list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="stack__item">
                    <div className="stack__row">
                      <span className="stack__name">{skill.name}</span>
                      <span className="stack__level">{skill.level}</span>
                    </div>
                    <p className="stack__desc">{skill.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="chips" delay={0.1}>
          <h3 className="sr-only">Tools</h3>
          {TOOLS.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="section section--tight" aria-labelledby="timeline-title">
        <Reveal className="section__head">
          <span className="eyebrow">Milestones</span>
          <h2 id="timeline-title" className="section__title">
            Career so far.
          </h2>
        </Reveal>
        <ol className="timeline">
          {MILESTONES.map((item) => (
            <Reveal as="li" key={item.year} className="timeline__item">
              <span className="timeline__year">{item.year}</span>
              <div>
                <h3 className="timeline__role">{item.role}</h3>
                <span className="timeline__company">{item.company}</span>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="hero__actions">
          <Link href="/contact" className="btn btn--primary">
            Let&apos;s talk <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <a href={PROFILE.cvUrl} download="Ina-Conteh-CV.pdf" className="btn btn--ghost">
            Download CV
          </a>
        </div>
      </section>
    </div>
  )
}
