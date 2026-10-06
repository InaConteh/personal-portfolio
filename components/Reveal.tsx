'use client'

import { motion } from 'motion/react'

// Spring matches the motion assets (stiffness 180, damping 22). Under reduced motion,
// MotionConfig turns transforms off and only the fade remains (FR-7).
const spring = { type: 'spring', stiffness: 180, damping: 22, mass: 0.9 } as const

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
  /** Animate on load instead of when scrolled into view (above-the-fold content). */
  immediate?: boolean
}

export default function Reveal({ children, delay = 0, className, as = 'div', immediate = false }: RevealProps) {
  // Above-the-fold content animates with CSS so it paints before hydration (LCP, NFR-1).
  if (immediate) {
    const Tag = as
    return (
      <Tag className={`rise${className ? ` ${className}` : ''}`} style={{ '--delay': `${delay * 1000}ms` } as React.CSSProperties}>
        {children}
      </Tag>
    )
  }

  const Component = motion[as]
  const target = { opacity: 1, y: 0 }
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={target}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ ...spring, delay, opacity: { duration: 0.5, delay } }}
    >
      {children}
    </Component>
  )
}
