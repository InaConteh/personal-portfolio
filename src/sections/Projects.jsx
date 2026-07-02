import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../constants'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const container = useRef()

  useGSAP(() => {
    gsap.from('.section__title', {
      scrollTrigger: {
        trigger: '.section__title',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    })
  }, { scope: container })

  return (
    <section id="projects" className="section" ref={container}>
      <h2 className="section__title">
        <span className="section__title-accent">03.</span> Projects
      </h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
