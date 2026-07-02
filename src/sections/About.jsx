import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

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
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from('.about-card__text', {
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 80%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    })

    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.about-card__stats',
        start: 'top 90%',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    })
  }, { scope: container })

  return (
    <section id="about" className="section section--about" ref={container}>
      <h2 className="section__title">
        <span className="section__title-accent">01.</span> About Me
      </h2>
      <div className="about-card">
        <div className="about-card__image-wrapper">
          <div className="about-card__image-glow"></div>
          <img
            className="about-card__image"
            src="My.jpg"
            alt="Portrait of Ina Moses Conteh"
            loading="lazy"
          />
        </div>
        <div className="about-card__content">
          <p className="about-card__text">
            I'm a passionate developer focused on building clean, accessible, and
            performant web experiences. I enjoy working with modern JavaScript,
            React, and crafting thoughtful UI/UX.
          </p>
          <p className="about-card__text">
            Outside coding, I explore new tools, contribute to open source, and
            share knowledge with the community.
          </p>
          <p className="about-card__text">
          I’m a chess enthusiast, and I genuinely enjoy playing the game.
          </p>
          <div className="about-card__stats">
            <div className="stat-item">
              <span className="stat-item__number">10+</span>
              <span className="stat-item__label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">50+</span>
              <span className="stat-item__label">Contributions</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">2+</span>
              <span className="stat-item__label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
