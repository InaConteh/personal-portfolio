import { useState, useRef, useEffect } from 'react'

export default function ChessCard({ children, className = '', style = {}, ...props }) {
  const cardRef = useRef(null)
  const [tiltStyle, setTiltStyle] = useState({})
  const [isHovered, setIsHovered] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (((y - centerY) / centerY) * -7).toFixed(2)
    const rotateY = (((x - centerX) / centerX) * 7).toFixed(2)

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
      transition: 'transform 100ms ease-out, box-shadow 300ms ease-out',
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 550ms cubic-bezier(0.22, 1, 0.36, 1)',
    })
  }

  return (
    <div
      ref={cardRef}
      className={`chess-card ${isHovered ? 'chess-card--hover' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, ...tiltStyle }}
      {...props}
    >
      {children}
    </div>
  )
}
