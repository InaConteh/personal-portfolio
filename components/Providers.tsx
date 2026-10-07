'use client'

import { MotionConfig } from 'motion/react'

// reducedMotion="user": springs become instant when the OS asks for less motion (FR-7).
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
