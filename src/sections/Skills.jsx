import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SKILLS } from '../constants'

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

    gsap.from('.skill-chip', {
      scrollTrigger: {
        trigger: '.skills--grid',
        start: 'top 85%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(1.7)',
    })
  }, { scope: container })

  return (
    <section id="skills" className="section section--skills" ref={container}>
      <h2 className="section__title">
        <span className="section__title-accent">02.</span> Skills
      </h2>
      <ul className="skills skills--grid">
        {SKILLS.map((skill) => (
          <li key={skill.name} className="skill-chip skill-chip--icon">
            <i className={skill.icon} aria-hidden="true" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
