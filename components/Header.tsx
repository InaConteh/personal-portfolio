'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/site'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
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
    <header className={`site-header${scrolled || open ? ' site-header--scrolled' : ''}`}>
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
