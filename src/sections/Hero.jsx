import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero__badge', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      clearProps: 'all'
    })
    .from('.hero__kicker', {
      y: 20,
      opacity: 0,
      duration: 0.4,
      clearProps: 'all'
    }, '-=0.2')
    .from('.hero__title', {
      y: 25,
      opacity: 0,
      duration: 0.5,
      clearProps: 'all'
    }, '-=0.3')
    .from('.hero__subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.4,
      clearProps: 'all'
    }, '-=0.3')
    .from('.hero__blurb', {
      y: 20,
      opacity: 0,
      duration: 0.4,
      clearProps: 'all'
    }, '-=0.3')
    .from('.hero__actions', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      clearProps: 'all'
    }, '-=0.2')
  }, { scope: container })

  return (
    <section id="home" className="hero" ref={container}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-icon">♔</span>
          <span className="hero__badge-text">Grandmaster Strategy & Software Craft</span>
        </div>
        <p className="hero__kicker">Welcome, I'm</p>
        <h1 className="hero__title">Ina Moses Conteh</h1>
        <p className="hero__subtitle">Full Stack Engineer & Web Architect</p>
        <p className="hero__blurb">
          Architecting robust, accessible, and high-performance digital experiences. 
          Combining deliberate chess strategy with modern React engineering to craft systems 
          that stand the test of scale.
        </p>
        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">View Projects</Link>
          <Link to="/contact" className="btn btn--secondary">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}
