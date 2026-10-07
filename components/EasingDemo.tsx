'use client'

import { useState } from 'react'

export default function EasingDemo() {
  const [on, setOn] = useState(false)

  return (
    <div className={`panel easing${on ? ' is-on' : ''}`}>
      <div className="easing__head">
        <span>Easing</span>
        <span>cubic-bezier(.2,.9,.1,1)</span>
      </div>
      <div className="easing__track" aria-hidden="true">
        <span className="easing__ball" />
      </div>
      <div className="easing__track" aria-hidden="true">
        <span className="easing__ball easing__ball--linear" />
      </div>
      <div className="easing__legend">
        <span>
          <span className="accent">●</span> eased
        </span>
        <span>
          <span style={{ color: 'var(--purple)' }}>●</span> linear
        </span>
      </div>
      <button type="button" className="btn btn--ghost" onClick={() => setOn((v) => !v)} aria-pressed={on}>
        {on ? 'Reset' : 'Play'} <span aria-hidden="true">{on ? '↺' : '▶'}</span>
      </button>
      <p className="stack__desc">
        Same duration, different feel: the eased ball front-loads its speed, then settles. It&apos;s the curve I use for
        most UI motion.
      </p>
    </div>
  )
}
