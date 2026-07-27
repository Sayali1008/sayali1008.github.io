import { useEffect, useState } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import styles from './Hero.module.css'

const FULL_SUBTITLE = 'I build backend systems, intelligent applications, and scalable software.'
const TYPE_INTERVAL_MS = 28
const TYPE_DELAY_MS = 750

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false
}

const yearsExp = Math.floor(
  (Date.now() - new Date('2023-06-01').getTime()) / (365.25 * 24 * 60 * 60 * 1000),
)

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export default function Hero() {
  const reducedMotion = prefersReducedMotion()
  const [typed, setTyped] = useState(reducedMotion ? FULL_SUBTITLE : '')
  const scrollProgress = useScrollProgress(200)

  useEffect(() => {
    if (reducedMotion) return
    let i = 0
    let interval: ReturnType<typeof setInterval>
    const delay = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setTyped(FULL_SUBTITLE.slice(0, i))
        if (i >= FULL_SUBTITLE.length) clearInterval(interval)
      }, TYPE_INTERVAL_MS)
    }, TYPE_DELAY_MS)
    return () => { clearTimeout(delay); clearInterval(interval) }
  }, [reducedMotion])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className={styles.heroWrap}>
      <div className={styles.hero}>
        <div className={styles.inner}>
          <p className="section-label" style={{ marginBottom: 16 }}>Portfolio / Sayali Moghe</p>
          <h1 className={styles.h1}>Hi there! My name is Sayali Moghe.</h1>
          <p className={styles.subtitle}>
            {typed}
            {typed.length < FULL_SUBTITLE.length && (
              <span className={styles.cursor} aria-hidden>|</span>
            )}
          </p>

          <div className={styles.ctas}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('work')}>
              View Projects <ArrowRightIcon />
            </button>
            <a href="/sayali_moghe.pdf" download className={styles.btnSecondary}>
              <DownloadIcon /> Resume
            </a>
            <button className={styles.btnSecondary} onClick={() => scrollTo('contact')}>
              <PhoneIcon /> Contact Me
            </button>
          </div>

          <div className={styles.statsWrap}>
            <hr className={styles.divider} />
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{yearsExp}+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>M.S.</span>
                <span className={styles.statLabel}>AI, Carnegie Mellon</span>
              </div>
            </div>
            <hr className={styles.divider} />
          </div>
        </div>
      </div>

      <button
        className={styles.scrollHint}
        onClick={() => scrollTo('skills')}
        aria-label="Scroll down"
        style={{ opacity: 1 - scrollProgress }}
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </button>
    </section>
  )
}
