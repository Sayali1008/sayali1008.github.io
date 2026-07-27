import { useEffect, useRef, useState, type RefObject } from 'react'

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible } as { ref: RefObject<T>; isVisible: boolean }
}
