import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <div className="container page-hero" style={{ minHeight: '60vh', justifyContent: 'center' }}>
      <span className="eyebrow">404</span>
      <h1 className="page-hero__title">
        Nothing here<span className="dot">.</span>
      </h1>
      <p className="page-hero__lead">That page doesn&apos;t exist, or it moved. The work is this way.</p>
      <div className="hero__actions">
        <Link href="/work" className="btn btn--primary">
          See all work <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <Link href="/" className="btn btn--ghost">
          Home
        </Link>
      </div>
    </div>
  )
}
