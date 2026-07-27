import { projects } from '../data/projects'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import styles from './Projects.module.css'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${styles.outerCard} reveal ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={styles.content}>
        <div>
          <p className={styles.tagline}>{project.tagline}</p>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        {project.linkKind === 'paper' ? (
          <a href={project.repo} className={styles.repoBtn} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon />
            View Paper
          </a>
        ) : (
          <a href={project.repo} className={styles.repoBtn} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            View Source
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <section id="work" className={styles.section}>
      <div className="section-inner">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">03 / Selected Work</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 900, marginTop: 12 }}>
            Featured Projects
          </h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', marginTop: 12, marginBottom: 48 }}>
            ML research and production systems — built outside of work hours.
          </p>
        </div>
        <div className={styles.cards}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
