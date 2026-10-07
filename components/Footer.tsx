import Link from 'next/link'
import { NAV_LINKS, PROFILE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <Link href="/" className="logo" aria-label="IC, Ina Conteh, home">
            IC<span className="dot">.</span>
          </Link>
          <nav className="footer__links" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <a href={PROFILE.cvUrl} download="Ina-Conteh-CV.pdf">
              CV <span aria-hidden="true">↓</span>
            </a>
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${PROFILE.email}`}>Email</a>
          </nav>
        </div>
        <div className="footer__row" style={{ marginTop: '2rem' }}>
          <span className="footer__tagline">{PROFILE.role}</span>
          <span className="footer__copy" style={{ marginTop: 0 }}>
            © {new Date().getFullYear()} {PROFILE.fullName} · {PROFILE.location}
          </span>
        </div>
      </div>
    </footer>
  )
}
