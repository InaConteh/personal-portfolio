import { useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ProjectCard'
import CaseStudyModal from '../components/CaseStudyModal'
import { PROJECTS } from '../constants'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const container = useRef()
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)

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
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })
  }, { scope: container })

  return (
    <section id="projects" className="section section--projects" ref={container}>
      <div className="section__header">
        <span className="section__subtitle">Selected Deployments</span>
        <h2 className="section__title">
          <span className="section__title-accent">03.</span> Featured Projects
        </h2>
        <p className="section__desc">
          A showcase of full stack web applications, 3D interactive interfaces, and agency portals built with precision and deliberate design execution.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id || project.title} 
            project={project} 
            onOpenCaseStudy={setActiveCaseStudy}
          />
        ))}
      </div>

      <CaseStudyModal 
        project={activeCaseStudy} 
        onClose={() => setActiveCaseStudy(null)} 
      />
    </section>
  )
}

