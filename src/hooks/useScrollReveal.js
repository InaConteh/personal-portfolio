import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    let gsapRef = null
    let ScrollTriggerRef = null
    const cleanups = []

    let isCancelled = false

    const setup = async () => {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        if (isCancelled) return
        gsapRef = gsap
        ScrollTriggerRef = ScrollTrigger

        if (!gsapRef.core.globals().ScrollTrigger) {
          gsapRef.registerPlugin(ScrollTriggerRef)
        }

        // Animate individual elements with the .reveal-up class
        const elements = gsapRef.utils.toArray('.reveal-up')
        elements.forEach((el) => {
          const ctx = gsapRef.context(() => {
            gsapRef.fromTo(el, {
              y: 24,
              opacity: 0,
            }, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            })
          }, el)
          cleanups.push(() => ctx.revert())
        })

        // Hero section animations
        const heroElements = gsapRef.utils.toArray('.hero .reveal-up')
        if (heroElements.length > 0) {
          const ctx = gsapRef.context(() => {
            // Animate hero elements with staggered timing
            gsapRef.fromTo(heroElements, {
              y: 50,
              opacity: 0,
              scale: 0.9,
            }, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.2,
              delay: 0.3,
            })

            // Animate hero title with special effect
            const heroTitle = document.querySelector('.hero__title')
            if (heroTitle) {
              gsapRef.fromTo(heroTitle, {
                y: 80,
                opacity: 0,
                rotationX: -30,
                transformPerspective: 400,
              }, {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.5,
              })
            }

            // Animate hero actions with bounce effect
            const heroActions = document.querySelector('.hero__actions')
            if (heroActions) {
              gsapRef.fromTo(heroActions, {
                y: 40,
                opacity: 0,
                scale: 0.8,
              }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                delay: 1.2,
              })
            }
          }, document.querySelector('.hero'))
          cleanups.push(() => ctx.revert())
        }

        // Helper to animate a group with a single trigger and stagger
        const animateStagger = (containerSelector, itemSelector) => {
          const container = document.querySelector(containerSelector)
          if (!container) return
          const ctx = gsapRef.context(() => {
            gsapRef.from(container.querySelectorAll(itemSelector), {
              y: 20,
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out',
              stagger: 0.08,
              scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            })
          }, container)
          cleanups.push(() => ctx.revert())
        }

        // Stagger lists/grids/forms
        animateStagger('#skills', '.skills li')
        animateStagger('#projects', '.projects-grid > *')
        animateStagger('#contact', '.contact-form > *')

        // Character-based stagger for elements with .reveal-chars
        const charTargets = document.querySelectorAll('.reveal-chars')
        charTargets.forEach((el) => {
          if (el.dataset.split === 'true') return
          const text = el.textContent
          const chars = Array.from(text)
          el.textContent = ''
          const frag = document.createDocumentFragment()
          chars.forEach((c, idx) => {
            const span = document.createElement('span')
            span.className = 'char'
            span.textContent = c === ' ' ? '\u00A0' : c
            frag.appendChild(span)
          })
          el.appendChild(frag)
          el.dataset.split = 'true'

          const ctx = gsapRef.context(() => {
            gsapRef.fromTo(el.querySelectorAll('.char'), {
              y: 30,
              opacity: 0,
              rotateX: -30,
              transformPerspective: 400,
            }, {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.03,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            })
          }, el)
          cleanups.push(() => ctx.revert())
        })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('GSAP setup failed:', err)
      }
    }

    setup()

    return () => {
      isCancelled = true
      cleanups.forEach((fn) => fn())
      try {
        if (ScrollTriggerRef) ScrollTriggerRef.refresh()
      } catch (_) {}
    }
  }, [])
}


