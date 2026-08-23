import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ChessCard from '../components/ChessCard'
import { SKILLS, SKILLS_CATEGORIZED } from '../constants'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
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

    gsap.from('.skills-category-card', {
      scrollTrigger: {
        trigger: '.skills-categories-grid',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out',
    })
  }, { scope: container })

  return (
    <section id="skills" className="section section--skills" ref={container}>
      <div className="section__header">
        <span className="section__subtitle">Tactical Competencies</span>
        <h2 className="section__title">
          <span className="section__title-accent">02.</span> Tech Stack & Expertise
        </h2>
        <p className="section__desc">
          A comprehensive overview of my technical arsenal, ranging from core frontend frameworks and backend databases to modern workflow tools and tactical deployment pipelines.
        </p>
      </div>

      {/* Categorized Skills Cards */}
      <div className="skills-categories-grid">
        {SKILLS_CATEGORIZED.map((cat) => (
          <ChessCard key={cat.category} className="skills-category-card">
            <div className="skills-category-card__header">
              <span className="skills-category-card__icon">{cat.icon}</span>
              <h3>{cat.category}</h3>
            </div>
            <div className="skills-category-card__list">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-detail-item">
                  <div className="skill-detail-item__top">
                    <i className={skill.icon} aria-hidden="true" />
                    <span className="skill-detail-item__name">{skill.name}</span>
                    <span className="skill-detail-item__badge">{skill.level}</span>
                  </div>
                  <p className="skill-detail-item__desc">{skill.description}</p>
                </div>
              ))}
            </div>
          </ChessCard>
        ))}
      </div>

      {/* Quick Icon Badge Strip */}
      <div className="skills-quick-strip">
        <h3 className="skills-quick-strip__title">Quick Technology Matrix</h3>
        <ul className="skills skills--grid">
          {SKILLS.map((skill) => (
            <li key={skill.name} className="skill-chip skill-chip--icon">
              <i className={skill.icon} aria-hidden="true" />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
