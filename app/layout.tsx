import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import { PROFILE, SITE_URL } from '@/lib/site'
import './globals.css'

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' })

const description =
  "Ina Conteh is a developer and designer in Freetown, Sierra Leone who builds interfaces with code, design and motion. Case studies of shipped client work."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${PROFILE.name} | ${PROFILE.role}`, template: `%s | ${PROFILE.name}` },
  description,
  openGraph: {
    type: 'website',
    siteName: PROFILE.name,
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.tagline,
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#07080c',
  colorScheme: 'dark',
}

// Structured data for a Person (NFR-3).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.fullName,
  alternateName: PROFILE.name,
  url: SITE_URL,
  email: `mailto:${PROFILE.email}`,
  jobTitle: 'Developer and designer',
  address: { '@type': 'PostalAddress', addressLocality: 'Freetown', addressCountry: 'SL' },
  sameAs: [PROFILE.socials.github],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="backdrop" aria-hidden="true" />
        <Providers>
          <Header />
          <main id="main" className="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
