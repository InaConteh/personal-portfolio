import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import AutoVideo from '@/components/AutoVideo'
import EasingDemo from '@/components/EasingDemo'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Small experiments in motion and design systems: an intro loop, a vertical reel, easing curves and tokens.',
  alternates: { canonical: '/lab' },
}

export default function LabPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <Reveal immediate>
          <span className="eyebrow">Lab</span>
        </Reveal>
        <Reveal immediate delay={0.08}>
          <h1 className="page-hero__title">
            Experiments in motion<span className="dot">.</span>
          </h1>
        </Reveal>
        <Reveal immediate delay={0.16}>
          <p className="page-hero__lead">
            Small things I make to sharpen the craft: brand motion, reels, easing studies and the token system this site
            is built on.
          </p>
        </Reveal>
      </header>

      <section className="section section--tight" aria-labelledby="reel-title">
        <h2 id="reel-title" className="sr-only">
          Motion reels
        </h2>
        <div className="lab-reel">
          <Reveal immediate delay={0.2}>
            <div className="window">
              <div className="window__bar">
                <i />
                <i />
                <i />
                <span className="window__url">intro-loop · 6s · 1080p</span>
              </div>
              <AutoVideo
                src="/intro-loop.mp4"
                poster="/intro-loop-poster.jpg"
                label="Intro animation: the name Ina Conteh types on over purple and teal glows, then Code, Design and Motion tags appear."
              />
            </div>
            <p className="lab-caption">Brand intro loop — springs, not keyframes.</p>
          </Reveal>
          <Reveal immediate delay={0.28}>
            <div className="phone">
              <AutoVideo
                src="/portfolio-short.mp4"
                poster="/portfolio-short-poster.jpg"
                label="Vertical portfolio reel: 'I code, design and animate', the site on laptop and phone, spring code, the token system, and an 'Open for freelance' call to action."
              />
            </div>
            <p className="lab-caption">Portfolio short · 9:16 · 15s</p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="studies-title">
        <Reveal className="section__head">
          <span className="eyebrow">Studies</span>
          <h2 id="studies-title" className="section__title">
            One token system, every surface.
          </h2>
        </Reveal>
        <div className="lab-cards">
          <Reveal>
            <EasingDemo />
          </Reveal>
          <Reveal delay={0.08} className="panel">
            <div className="easing__head">
              <span>Tokens</span>
              <span>colour · type · space</span>
            </div>
            <p className="tokens__type">
              Aa<span className="dot">.</span>
            </p>
            <div className="swatches">
              <span className="swatch--teal" title="--teal #3ef0c8" />
              <span className="swatch--purple" title="--purple #a07cff" />
              <span className="swatch--pink" title="--pink #ff6cc4" />
              <span className="swatch--ink" title="--ink #252a37" />
            </div>
            <ul className="token-list mono">
              <li><span>--teal</span><span>#3ef0c8</span></li>
              <li><span>--purple</span><span>#a07cff</span></li>
              <li><span>--pink</span><span>#ff6cc4</span></li>
              <li><span>--font</span><span>Space Grotesk / JetBrains Mono</span></li>
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
