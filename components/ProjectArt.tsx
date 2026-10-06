import type { Tag } from '@/lib/content'

// Decorative header art for a project card, one style per discipline.
export default function ProjectArt({ kind }: { kind: Tag }) {
  if (kind === 'code') {
    return (
      <pre className="code" aria-hidden="true">
        <span className="k">const</span> map = <span className="f">createMap</span>({'{\n'}
        {'  '}points: <span className="s">waterPoints</span>,{'\n'}
        {'  '}live: <span className="n">true</span>,{'\n'}
        {'  '}sync: <span className="s">&quot;3g-friendly&quot;</span>{'\n'}
        {'});'}
      </pre>
    )
  }

  if (kind === 'design') {
    return (
      <div aria-hidden="true">
        <div className="swatches">
          <span className="swatch--teal" />
          <span className="swatch--purple" />
          <span className="swatch--pink" />
          <span className="swatch--ink" />
        </div>
        <p className="type-sample">
          Aa Bb<span className="dot">.</span>
        </p>
      </div>
    )
  }

  return (
    <svg className="wave" viewBox="0 0 400 210" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 180 C 70 175, 110 120, 160 75 S 230 30, 260 60 S 330 150, 400 120"
        fill="none"
        stroke="var(--pink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="232" cy="38" r="8" fill="var(--pink)" />
      <circle cx="120" cy="118" r="5" fill="var(--pink)" opacity="0.5" />
      <circle cx="318" cy="128" r="5" fill="var(--pink)" opacity="0.5" />
    </svg>
  )
}
