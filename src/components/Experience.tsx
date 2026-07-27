import { experience } from '../data/experience'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import styles from './Experience.module.css'

function ExperienceCard({
  entry,
  index,
}: {
  entry: typeof experience[number]
  index: number
}) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`${styles.entry} reveal ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.card}>
        <div className={styles.titleRow}>
          <h3 className={styles.role}>{entry.role}</h3>
          {entry.badge.split(' · ').map(b => (
            <span key={b} className={styles.badgePill}>{b}</span>
          ))}
        </div>
        <p className={styles.orgLine}>{entry.org} · {entry.location}</p>
        <p className={styles.dates}>{entry.dates}</p>
        <p className={styles.description}>{entry.description}</p>
        {entry.tags.length > 0 && (
          <div className={styles.tags}>
            {entry.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section id="experience" className={styles.section}>
      <div className="section-inner">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">04 / Where I've Worked</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 900, marginTop: 12 }}>
            Experience
          </h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', marginTop: 12 }}>
            The roles, the tools, and what I actually shipped.
          </p>
        </div>
        <div className={styles.timeline}>
          {experience.map((entry, i) => (
            <ExperienceCard key={entry.org + entry.role} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
