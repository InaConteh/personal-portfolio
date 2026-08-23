import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ChessCard from '../components/ChessCard'
import { MILESTONES } from '../constants'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const container = useRef()

  useGSAP(() => {
    gsap.from('.section__title', {
      scrollTrigger: {
        trigger: '.section__title',
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.about-card__image-wrapper', {
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 80%',
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.about-card__text', {
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 80%',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })

    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.about-card__stats',
        start: 'top 90%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    })

    gsap.from('.narrative-card', {
      scrollTrigger: {
        trigger: '.about-narrative-grid',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
    })

    gsap.from('.beginning-banner', {
      scrollTrigger: {
        trigger: '.beginning-banner',
        start: 'top 90%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.4)',
    })
  }, { scope: container })

  return (
    <section id="about" className="section section--about" ref={container}>
      <div className="section__header">
        <span className="section__subtitle">Background & Mindset</span>
        <h2 className="section__title">
          <span className="section__title-accent">01.</span> About Ina Moses Conteh
        </h2>
      </div>

      {/* Main Profile & Origin Card */}
      <ChessCard className="about-card">
        <div className="about-card__image-wrapper">
          <div className="about-card__image-glow"></div>
          <img
            className="about-card__image"
            src="My.jpg"
            alt="Portrait of Ina Moses Conteh"
            loading="lazy"
          />
          <div className="about-card__badge">
            <span>♟ Strategist & Developer</span>
          </div>
        </div>

        <div className="about-card__content">
          <div className="about-hero-heading">
            <h3 className="about-hero-heading__title">Figuring Things Out</h3>
            <p className="about-hero-heading__lead">
              I’ve always been drawn to figuring things out. Not necessarily because I had all the answers, but because I liked the process of taking something that didn’t exist yet and finding a way to make it real.
            </p>
            <p className="about-card__text">
              That curiosity eventually led me into software.
            </p>
          </div>

          <div className="about-quote-box">
            <span className="about-quote-box__icon">“</span>
            <p className="about-quote-box__text">
              In chess as in software engineering, every move must have a purpose. Play the position, not the emotion.
            </p>
          </div>

          <div className="about-card__stats">
            <div className="stat-item">
              <span className="stat-item__number">10+</span>
              <span className="stat-item__label">Deployed Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">50+</span>
              <span className="stat-item__label">Code Commits</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">2+</span>
              <span className="stat-item__label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">1700+</span>
              <span className="stat-item__label">Chess Rating</span>
            </div>
          </div>
        </div>
      </ChessCard>

      {/* Deep-Dive Narrative Essay Section */}
      <div className="about-narrative-section">
        <div className="section__header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <span className="section__subtitle">Core Principles</span>
          <h3 className="section__title">The Engineer's Manifesto</h3>
        </div>

        <div className="about-narrative-grid">
          {/* Card 1: Curiosity */}
          <ChessCard className="narrative-card">
            <div className="narrative-card__header">
              <span className="narrative-card__num">01</span>
              <span className="narrative-card__badge">Genesis</span>
            </div>
            <h4 className="narrative-card__title">It started with curiosity.</h4>
            <p className="narrative-card__text">
              Before I thought of myself as an engineer, I was someone who liked experimenting.
            </p>
            <p className="narrative-card__text">
              I wanted to understand how things worked, how they were built, and more importantly, whether I could build them myself. That curiosity turned into code.
            </p>
            <p className="narrative-card__text">
              Then small projects became bigger projects. Ideas became interfaces. Interfaces became applications. And eventually, building software stopped being something I was simply learning and became something I wanted to dedicate myself to.
            </p>
          </ChessCard>

          {/* Card 2: Systems Thinking */}
          <ChessCard className="narrative-card">
            <div className="narrative-card__header">
              <span className="narrative-card__num">02</span>
              <span className="narrative-card__badge">Chess & Foresight</span>
            </div>
            <h4 className="narrative-card__title">I think in systems.</h4>
            <p className="narrative-card__text">
              Chess has had a strange influence on the way I approach software.
            </p>
            <p className="narrative-card__text">
              A good move isn't only about what happens immediately after you make it. It's about the position you're creating several moves later.
            </p>
            <p className="narrative-card__text">
              I think about software in much the same way. A quick solution can work today and become a nightmare six months later. A little more thought at the beginning can completely change what becomes possible later.
            </p>
            <div className="narrative-card__highlight">
              So I try to build with foresight. Not overengineering for the sake of it — but making decisions with intention.
            </div>
          </ChessCard>

          {/* Card 3: Learning to Build */}
          <ChessCard className="narrative-card narrative-card--wide">
            <div className="narrative-card__header">
              <span className="narrative-card__num">03</span>
              <span className="narrative-card__badge">Craftsmanship</span>
            </div>
            <h4 className="narrative-card__title">I learned to build.</h4>
            <p className="narrative-card__text">
              Over the years, I’ve worked across the stack — from interfaces and interactions to backend systems, APIs, databases, and infrastructure.
            </p>
            <p className="narrative-card__text">
              I work primarily with technologies like React, Next.js, Node.js, and Python, but I’ve never been particularly interested in collecting technologies just for the sake of it.
            </p>
            <p className="narrative-card__text">
              I care more about understanding the problem first.
            </p>

            <div className="narrative-card__questions">
              <span className="questions-title">The First-Principles Framework:</span>
              <ul className="questions-list">
                <li><span className="q-bullet">♟</span> What are we actually trying to solve?</li>
                <li><span className="q-bullet">♟</span> What should exist?</li>
                <li><span className="q-bullet">♟</span> What shouldn't exist?</li>
                <li><span className="q-bullet">♟</span> How will someone actually use it?</li>
                <li><span className="q-bullet">♟</span> How do we build it in a way that can survive beyond the first version?</li>
              </ul>
            </div>
            <p className="narrative-card__text" style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--accent)' }}>
              That's the part of engineering that keeps me interested.
            </p>
          </ChessCard>

          {/* Card 4: Beyond Code */}
          <ChessCard className="narrative-card">
            <div className="narrative-card__header">
              <span className="narrative-card__num">04</span>
              <span className="narrative-card__badge">Product & Business</span>
            </div>
            <h4 className="narrative-card__title">I'm interested in more than code.</h4>
            <p className="narrative-card__text">
              Software is only one part of the picture.
            </p>
            <p className="narrative-card__text">
              I'm interested in products, design, business, entrepreneurship, media, and the process of turning an idea into something people can actually use.
            </p>

            <div className="narrative-card__callout">
              <div className="callout-shift">
                <span className="shift-from">"How do I build this?"</span>
                <span className="shift-arrow">→</span>
                <span className="shift-to">"Should this exist in the first place?"</span>
              </div>
              <p className="callout-desc">
                That question changes everything. It changes how you design. How you engineer. How you think about users. How you think about business. And ultimately, what you choose to build.
              </p>
            </div>
          </ChessCard>

          {/* Card 5: Where I'm Going */}
          <ChessCard className="narrative-card">
            <div className="narrative-card__header">
              <span className="narrative-card__num">05</span>
              <span className="narrative-card__badge">The Horizon</span>
            </div>
            <h4 className="narrative-card__title">Where I'm going.</h4>
            <p className="narrative-card__text">
              I'm still early. And that's something I actually like.
            </p>
            <p className="narrative-card__text">
              There are technologies I haven't learned yet, products I haven't built yet, and problems I haven't even discovered yet. But I know the direction I want to move in.
            </p>
            <p className="narrative-card__text">
              I want to spend these early years building things that matter — software, products, companies, and ideas that can exist beyond me.
            </p>
            <p className="narrative-card__text narrative-card__text--highlight">
              I'm interested in the long game. Not just becoming better at writing code, but becoming better at <strong>building</strong>.
            </p>

            <ul className="building-goals-list">
              <li><span className="goal-icon">♔</span> Building systems.</li>
              <li><span className="goal-icon">♕</span> Building products.</li>
              <li><span className="goal-icon">♖</span> Building businesses.</li>
              <li><span className="goal-icon">♗</span> And eventually, building things that other people can build on.</li>
            </ul>
          </ChessCard>
        </div>

        {/* Final Standout Banner */}
        <div className="beginning-banner">
          <div className="beginning-banner__glow" aria-hidden="true" />
          <span className="beginning-banner__kicker">The Journey Unfolds</span>
          <h3 className="beginning-banner__title">This is still the beginning.</h3>
        </div>
      </div>

      {/* Experience & Career Milestones Timeline */}
      <div className="about-timeline-section">
        <div className="section__header">
          <span className="section__subtitle">Milestones</span>
          <h3 className="section__title">Career Progression</h3>
        </div>

        <div className="timeline-grid">
          {MILESTONES.map((item) => (
            <ChessCard key={item.year} className="timeline-card">
              <span className="timeline-card__year">{item.year}</span>
              <h4 className="timeline-card__role">{item.role}</h4>
              <span className="timeline-card__company">{item.company}</span>
              <p className="timeline-card__desc">{item.description}</p>
            </ChessCard>
          ))}
        </div>
      </div>
    </section>
  )
}

