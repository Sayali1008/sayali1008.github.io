import { useEffect, useState, type CSSProperties } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import styles from './Nav.module.css'

type Theme = 'dark' | 'light'

const NAV_ITEMS = [
  { label: 'Home',       id: 'home'       },
  { label: 'Skills',     id: 'skills'     },
  { label: 'Projects',   id: 'work'       },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact'    },
] as const

interface NavProps {
  theme: Theme
  onThemeToggle: () => void
}

export default function Nav({ theme, onThemeToggle }: NavProps) {
  const progress = useScrollProgress(400)
  // const morphed = progress > 0.15
  const [activeSection, setActiveSection] = useState('home')

  const vw = window.innerWidth
  const targetWidth = Math.min(700, vw - 48)

  const navStyle: CSSProperties = {
    left:         '50%',
    transform:    'translateX(-50%)',
    top:          `${progress * 16}px`,
    width:        `${vw - progress * (vw - targetWidth)}px`,
    borderRadius: `${progress * 999}px`,
    padding:      `${20 - 10 * progress}px ${40 - 16 * progress}px`,
    borderWidth:  '1px',
    borderStyle:  'solid',
    borderColor:  [
      `color-mix(in srgb, var(--border) ${Math.round(progress * 100)}%, transparent)`,
      `color-mix(in srgb, var(--border) ${Math.round(progress * 100)}%, transparent)`,
      `color-mix(in srgb, var(--border) ${Math.round(Math.max(35, progress * 100))}%, transparent)`,
      `color-mix(in srgb, var(--border) ${Math.round(progress * 100)}%, transparent)`,
    ].join(' '),
  }

  useEffect(() => {
    const THRESHOLD = 120 // px from viewport top
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
      if (nearBottom) {
        setActiveSection(NAV_ITEMS[NAV_ITEMS.length - 1].id)
        return
      }
      const passed = NAV_ITEMS
        .map(({ id }) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity }))
        .filter(s => s.top <= THRESHOLD)
      const active = passed[passed.length - 1]
      if (active) setActiveSection(active.id)
    }
    onScroll() // set on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={`${styles.nav} ${progress > 0.5 ? 'glass' : ''}`} style={navStyle}>
      <button className={styles.logo} onClick={() => scrollTo('home')}>
        Sayali Moghe
      </button>

      <div className={styles.rightGroup}>
        <ul className={styles.links}>
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={styles.themeBtn}
          onClick={onThemeToggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  )
}
