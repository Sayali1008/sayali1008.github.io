export interface ExperienceEntry {
  role: string
  badge: string
  org: string
  location: string
  dates: string
  description: string
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    badge: 'Full Stack · Backend-Leaning',
    org: 'Empyra',
    location: 'Dallas, TX',
    dates: 'June 2023 — Present',
    description:
      'Shipped AI agents and production backend systems for government workforce software — including an MCP-based natural-language database interface (4 clients), a custom AI documentation agent for 520 regulatory fields (75% faster than manual), a distributed Elasticsearch search platform across ~75 production instances, and ETL pipelines migrating 5M+ records for 3+ enterprise clients with zero downtime.',
    tags: ['Python', 'C#', 'TypeScript', 'Elasticsearch', 'MCP', 'FastAPI'],
  },
  {
    role: 'Machine Learning Engineer',
    badge: 'Machine Learning',
    org: 'Miko',
    location: 'Pittsburgh, PA',
    dates: 'October 2022 — May 2023',
    description:
      'Led a team of 6 building a Whisper large-v2 speech synthesis pipeline and fine-tuned VITS models via ESPNet, enabling 10+ dynamic personalized voices and a cross-singer voice conversion model for robotics applications.',
    tags: ['Python', 'PyTorch', 'Speech Synthesis'],
  },
  {
    role: 'M.S. in Artificial Intelligence and Innovation',
    badge: 'Graduate Degree',
    org: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    dates: 'August 2021 — May 2023',
    description:
      'School of Computer Science. Coursework in ML in Production, Big Data & Distributed Computing, Neural Networks, and NLP. Graduate TA for Applied Machine Learning and LTI Colloquium.',
    tags: [],
  },
  {
    role: 'B.E. in Computer Science',
    badge: 'Undergraduate Degree',
    org: 'University of Mumbai',
    location: 'Mumbai, India',
    dates: 'August 2017 — June 2021',
    description: 'Valedictorian. Foundational coursework in computer science, algorithms, and software engineering that launched into machine learning and systems work.',
    tags: [],
  },
]
