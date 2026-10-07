'use client'

import { useEffect, useRef, useState } from 'react'

type AutoVideoProps = {
  src: string
  poster: string
  label: string
  className?: string
}

/**
 * Muted looping video that only plays while on screen, and never under
 * prefers-reduced-motion: those visitors get the poster frame (FR-7, NFR-1).
 * A pause button lets anyone stop the loop (WCAG 2.2.2).
 */
export default function AutoVideo({ src, poster, label, className }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [reduced, setReduced] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const video = ref.current
    if (!video || reduced || paused) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {})
      else video.pause()
    })
    observer.observe(video)
    return () => observer.disconnect()
  }, [reduced, paused])

  const togglePaused = () => {
    const video = ref.current
    if (!video) return
    if (paused) video.play().catch(() => {})
    else video.pause()
    setPaused(!paused)
  }

  if (reduced) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={label} className={className} />
  }

  return (
    <div className="auto-video">
      <video
        ref={ref}
        className={className}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
      />
      <button
        type="button"
        className="auto-video__toggle"
        aria-label={paused ? 'Play animation' : 'Pause animation'}
        onClick={togglePaused}
      >
        <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span>
      </button>
    </div>
  )
}
