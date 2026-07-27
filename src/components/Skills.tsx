import { useState } from 'react'
import { skills, skillCategories, type SkillCategory } from '../data/skills'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import styles from './Skills.module.css'

function ClaudeIcon() {
  const angles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
  return (
    <svg viewBox="0 0 100 100" width="26" height="26" aria-hidden>
      <g transform="translate(50 50)" fill="#CC785C">
        {angles.map(a => (
          <rect key={a} x="-5.5" y="-44" width="11" height="44" rx="2.5" transform={`rotate(${a})`} />
        ))}
      </g>
    </svg>
  )
}

function SQLIcon() {
  return (
    <svg viewBox="0 0 60 60" width="26" height="26" aria-hidden>
      <rect x="3" y="15" width="54" height="38" fill="#1B6ABF"/>
      <rect x="3" y="15" width="54" height="11" fill="#2A8FE8"/>
      <ellipse cx="30" cy="53" rx="27" ry="8" fill="#154FA8"/>
      <ellipse cx="30" cy="15" rx="27" ry="8" fill="#4ACAFF"/>
      <text x="30" y="44" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="20" textAnchor="middle" fill="white">SQL</text>
    </svg>
  )
}

function SpaCyIcon() {
  return (
    <svg viewBox="0 0 68 28" width="36" height="15" aria-hidden>
      <text
        x="34" y="21"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="22"
        textAnchor="middle"
        fill="#09A3D5"
      >spaCy</text>
    </svg>
  )
}

function LogstashIcon() {
  return (
    <svg viewBox="0 0 100 100" width="26" height="26" aria-hidden>
      <path d="M 50,50 L 50,0 A 50,50 0 0,0 0,50 Z"   fill="#FEC514"/>
      <path d="M 50,50 L 0,50 A 50,50 0 0,0 50,100 Z" fill="#3D3D3D"/>
      <rect x="50" y="50" width="50" height="50"       fill="#3EBFAD"/>
    </svg>
  )
}

function OpenAIIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden fill="#000000">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04.3.3 0 0 1 .04-.05l4.773-2.758a.744.744 0 0 0 .377-.648v-6.735l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.372 4.428zM3.549 18.017a4.475 4.475 0 0 1-.535-3.014.3.3 0 0 1 .05.025l4.773 2.758a.735.735 0 0 0 .755 0l5.829-3.368v2.332a.07.07 0 0 1-.028.061l-4.826 2.786a4.503 4.503 0 0 1-6.018-1.58zM2.19 8.945a4.476 4.476 0 0 1 2.338-1.979V12.3a.734.734 0 0 0 .376.647l5.823 3.364-2.019 1.168a.07.07 0 0 1-.071 0L4.19 14.84a4.504 4.504 0 0 1-.001-7.893zm16.57 3.864l-5.828-3.367L14.95 8.27a.07.07 0 0 1 .071 0l4.438 2.563a4.503 4.503 0 0 1-.693 8.117v-5.336a.73.73 0 0 0-.006-.005zm2.004-3.02a.3.3 0 0 1-.05-.029l-4.772-2.758a.735.735 0 0 0-.756 0L9.356 10.37V8.04a.07.07 0 0 1 .028-.062l4.826-2.782a4.5 4.5 0 0 1 6.664 4.667zm-12.66 4.16l-2.02-1.168a.07.07 0 0 1-.038-.057V7.18a4.5 4.5 0 0 1 7.375-3.453.3.3 0 0 1-.04.05L8.608 6.535a.745.745 0 0 0-.376.648l-.029 6.726zm1.096-2.365l2.597-1.5 2.598 1.5v2.998l-2.598 1.5-2.597-1.5z"/>
    </svg>
  )
}

function ElasticsearchIcon() {
  return (
    <svg viewBox="0 0 100 100" width="26" height="26" aria-hidden>
      {/* top crescent – yellow */}
      <path d="M 4,37 A 46,35 0 0,0 96,37 Z"        fill="#FEC514"/>
      <path d="M 4,37 A 46,35 0 0,0 50,2 L 50,37 Z" fill="#C9971C"/>
      {/* middle pill – black / cyan */}
      <path d="M 13,44 H 50 V 62 H 13 A 9,9 0 0,1 13,44 Z"      fill="#231F20"/>
      <path d="M 50,44 H 87 A 9,9 0 0,1 87,62 H 50 Z"            fill="#00BEF0"/>
      {/* bottom crescent – teal */}
      <path d="M 4,68 A 46,30 0 0,1 96,68 Z"          fill="#00BFB3"/>
      <path d="M 4,68 A 46,30 0 0,1 50,98 L 50,68 Z"  fill="#008C82"/>
    </svg>
  )
}

const SKILL_COMPONENTS: Record<string, () => React.JSX.Element> = {
  openai:        OpenAIIcon,
  claude:        ClaudeIcon,
  sql:           SQLIcon,
  spacy:         SpaCyIcon,
  logstash:      LogstashIcon,
  elasticsearch: ElasticsearchIcon,
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('All')
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  const filtered = activeFilter === 'All'
    ? skills
    : skills.filter(s => s.category === activeFilter)

  return (
    <section id="skills" className={styles.section}>
      <div className="section-inner">
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">02 / Technical Expertise</p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 900, marginTop: 12, marginBottom: 12 }}>
            Skills &amp; Technologies
          </h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 36 }}>
            The stack I reach for, from LLM agents to distributed pipelines.
          </p>
          <div className={styles.filters}>
            {skillCategories.map(cat => (
              <button
                key={cat}
                className={`${styles.pill} ${activeFilter === cat ? styles.active : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={`${styles.card} reveal ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {skill.kind === 'icon' ? (
                <div className={styles.iconBox}>
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className={styles.iconImg}
                    loading="lazy"
                  />
                </div>
              ) : skill.kind === 'component' && skill.iconKey && SKILL_COMPONENTS[skill.iconKey] ? (
                <div className={styles.iconBox}>
                  {(() => { const Icon = SKILL_COMPONENTS[skill.iconKey!]; return <Icon /> })()}
                </div>
              ) : (
                <div
                  className={styles.textBadge}
                  style={{ background: skill.color }}
                  aria-hidden
                >
                  {skill.abbr}
                </div>
              )}
              <div className={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
