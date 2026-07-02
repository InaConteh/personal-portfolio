import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero__kicker', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.5
    })
    .from('.hero__title', {
      y: 40,
      opacity: 0,
      duration: 0.8,
    }, '-=0.4')
    .from('.hero__subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.5')
    .from('.hero__blurb', {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.5')
    .from('.hero__actions .btn', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2
    }, '-=0.4')
  }, { scope: container })

  return (
    <section id="home" className="hero" ref={container}>
      <div className="hero__content">
        <p className="hero__kicker">Hi, I'm</p>
        <h1 className="hero__title">Ina Moses Conteh</h1>
        <p className="hero__subtitle">Full Stack Developer</p>
        <p className="hero__blurb">
          I build clean, accessible, and performant web apps. I love turning ideas
          into delightful user experiences.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
