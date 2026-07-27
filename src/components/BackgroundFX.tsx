import { useState } from 'react'

interface RingConfig {
  size: number
  color: string
  delay: number
}

const DURATION = 6 // seconds — same for all rings

const RINGS: RingConfig[] = [
  { size: 200, color: 'var(--accent)', delay: 0.0  },
  { size: 160, color: 'var(--accent)', delay: 0.5  },
  { size: 220, color: 'var(--accent)', delay: 1.0  },
  { size: 140, color: 'var(--muted)',  delay: 1.5  },
  { size: 180, color: 'var(--muted)',  delay: 2.0  },
  { size: 120, color: 'var(--muted)',  delay: 2.5  },
]

function randomPos() {
  return {
    left: Math.random() * 80 + 5,
    top:  Math.random() * 75 + 5,
  }
}

function Ring({ size, color, delay }: RingConfig) {
  const [pos, setPos] = useState(randomPos)

  return (
    <div
      className="contour-ring"
      style={{
        left: `${pos.left}%`,
        top: `${pos.top}%`,
        width: size,
        height: size,
        borderColor: color,
        animationDuration: `${DURATION}s`,
        animationDelay: `${delay}s`,
      }}
      onAnimationIteration={() => setPos(randomPos())}
    />
  )
}

export default function BackgroundFX() {
  return (
    <>
      {RINGS.map((ring, i) => (
        <Ring key={i} {...ring} />
      ))}
    </>
  )
}
