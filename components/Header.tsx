'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/site'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname])
  // While open, move focus into the drawer and keep Tab inside the header so it
  // can't reach the page hidden behind it; Escape hands focus back to the toggle.
  useEffect(() => {
    if (!open) return
    const header = headerRef.current
    header?.querySelector<HTMLElement>('#nav-drawer a')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !header) return
      const focusable = [...header.querySelectorAll<HTMLElement>('a[href], button')].filter(
        (el) => el.offsetParent !== null,
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  const links = NAV_LINKS.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`nav__link${isActive(link.href) ? ' is-active' : ''}`}
      aria-current={isActive(link.href) ? 'page' : undefined}
    >
      {link.label}
    </Link>
  ))

  return (
    <header ref={headerRef} className={`site-header${scrolled || open ? ' site-header--scrolled' : ''}`}>
      <nav className="container nav" aria-label="Main">
        <Link href="/" className="logo" aria-label="Ina Conteh, home">
          IC<span className="dot">.</span>
        </Link>

        <div className="nav__links">{links}</div>

        <div className="nav__end">
          <Link href="/contact" className="btn btn--primary btn--sm">
            Let&apos;s talk <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="nav-drawer" className={`nav__drawer${open ? ' is-open' : ''}`} inert={!open}>
        <Link href="/" className={`nav__link${pathname === '/' ? ' is-active' : ''}`}>
          Home
        </Link>
        {links}
        <a href="/Ina.pdf" download="Ina-Conteh-CV.pdf" className="nav__link">
          Download CV
        </a>
      </div>
    </header>
  )
}
