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

        // Animate individual elements with the .reveal-up class (optimized)
        const elements = gsapRef.utils.toArray('.reveal-up')
        elements.forEach((el) => {
          const ctx = gsapRef.context(() => {
            gsapRef.fromTo(el, {
              y: 20,
              opacity: 0,
            }, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            })
          }, el)
          cleanups.push(() => ctx.revert())
        })

        // Hero section animations - simple and reliable
        const heroElements = gsapRef.utils.toArray('.hero .reveal-up')
        if (heroElements.length > 0) {
          const ctx = gsapRef.context(() => {
            // Animate all hero elements with staggered timing
            gsapRef.fromTo(heroElements, {
              y: 30,
              opacity: 0,
            }, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power2.out',
              stagger: 0.2,
              delay: 0.3,
            })
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

        // Stagger lists/grids/forms (optimized with reduced stagger)
        animateStagger('#skills', '.skills li')
        animateStagger('#projects', '.projects-grid > *')
        animateStagger('#contact', '.contact-form > *')
        
        // Batch refresh for better performance
        if (ScrollTriggerRef) {
          ScrollTriggerRef.refresh()
        }
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


