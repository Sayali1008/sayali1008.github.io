import { useEffect, useState } from 'react'

/** Returns scroll progress from 0 to 1 over the first `range` pixels */
export function useScrollProgress(range = 1400) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => setProgress(Math.min(window.scrollY / range, 1))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [range])

  return progress
}
