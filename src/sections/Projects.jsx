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

    gsap.from('.video-case-study-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid-deployed',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })
  }, { scope: container })

  return (
    <section id="projects" className="section section--projects" ref={container}>
      <div className="section__header">
        <span className="section__subtitle">Production Software Showcase</span>
        <h2 className="section__title">
          <span className="section__title-accent">03.</span> Real-World Projects
        </h2>
        <p className="section__desc">
          A showcase of real-world full stack platforms, 3D interactive WebGL applications, and client web systems deployed live in production.
        </p>
      </div>

      {/* Featured Video Showcase */}
      <div className="projects-grid projects-grid--single" style={{ marginBottom: '3rem' }}>
        <ProjectCard project={PROJECTS[0]} onOpenCaseStudy={setActiveCaseStudy} />
      </div>

      {/* Deployed Client & Web Projects */}
      <div className="projects-grid projects-grid-deployed">
        {PROJECTS.slice(1).map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onOpenCaseStudy={setActiveCaseStudy} 
          />
        ))}
      </div>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal 
        project={activeCaseStudy} 
        onClose={() => setActiveCaseStudy(null)} 
      />
    </section>
  )
}



