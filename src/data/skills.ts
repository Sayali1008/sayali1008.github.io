export type SkillKind = 'icon' | 'text' | 'component'

export interface Skill {
  name: string
  category: string
  kind: SkillKind
  src?: string
  abbr?: string
  color?: string
  iconKey?: string
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python',         category: 'Languages',      kind: 'icon', src: 'https://cdn.simpleicons.org/python' },
  { name: 'C#',             category: 'Languages',      kind: 'icon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: 'Java',           category: 'Languages',      kind: 'icon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'SQL',            category: 'Languages',      kind: 'component', iconKey: 'sql' },

  // Backend
  { name: '.NET Core',      category: 'Backend',        kind: 'icon', src: 'https://cdn.simpleicons.org/dotnet' },
  { name: 'FastAPI',        category: 'Backend',        kind: 'icon', src: 'https://cdn.simpleicons.org/fastapi' },
  { name: 'Flask',          category: 'Backend',        kind: 'icon', src: 'https://cdn.simpleicons.org/flask' },
  { name: 'React',          category: 'Backend',        kind: 'icon', src: 'https://cdn.simpleicons.org/react' },
  { name: 'REST APIs',      category: 'Backend',        kind: 'text', abbr: 'REST', color: '#0369A1' },

  // AI & ML
  { name: 'PyTorch',        category: 'AI & ML',        kind: 'icon', src: 'https://cdn.simpleicons.org/pytorch' },
  { name: 'HuggingFace',    category: 'AI & ML',        kind: 'icon', src: 'https://cdn.simpleicons.org/huggingface' },
  { name: 'scikit-learn',   category: 'AI & ML',        kind: 'icon', src: 'https://cdn.simpleicons.org/scikitlearn' },
  { name: 'OpenAI API',     category: 'AI & ML',        kind: 'component', iconKey: 'openai' },
  { name: 'Claude',         category: 'AI & ML',        kind: 'component', iconKey: 'claude' },
  { name: 'LangChain',      category: 'AI & ML',        kind: 'icon', src: 'https://cdn.simpleicons.org/langchain' },
  { name: 'SpaCy',          category: 'AI & ML',        kind: 'component', iconKey: 'spacy' },

  // Data & Search
  { name: 'Elasticsearch',  category: 'Data & Search',  kind: 'component', iconKey: 'elasticsearch' },
  { name: 'Apache Kafka',   category: 'Data & Search',  kind: 'icon', src: 'https://cdn.simpleicons.org/apachekafka' },
  { name: 'Apache Spark',   category: 'Data & Search',  kind: 'icon', src: 'https://cdn.simpleicons.org/apachespark' },
  { name: 'Pandas',         category: 'Data & Search',  kind: 'icon', src: 'https://cdn.simpleicons.org/pandas' },
  { name: 'NumPy',          category: 'Data & Search',  kind: 'icon', src: 'https://cdn.simpleicons.org/numpy' },
  { name: 'PostgreSQL',     category: 'Data & Search',  kind: 'icon', src: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'MS SQL Server',  category: 'Data & Search',  kind: 'text', abbr: 'MSQL', color: '#CC2927' },
  { name: 'Logstash',       category: 'Data & Search',  kind: 'component', iconKey: 'logstash' },

  // Cloud & DevOps
  { name: 'AWS',            category: 'Cloud & DevOps', kind: 'icon', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker',         category: 'Cloud & DevOps', kind: 'icon', src: 'https://cdn.simpleicons.org/docker' },
  { name: 'Kubernetes',     category: 'Cloud & DevOps', kind: 'icon', src: 'https://cdn.simpleicons.org/kubernetes' },
  { name: 'Jenkins',        category: 'Cloud & DevOps', kind: 'icon', src: 'https://cdn.simpleicons.org/jenkins' },
  { name: 'Git',            category: 'Cloud & DevOps', kind: 'icon', src: 'https://cdn.simpleicons.org/git' },
]

export const skillCategories = ['All', 'Languages', 'Backend', 'AI & ML', 'Data & Search', 'Cloud & DevOps'] as const
export type SkillCategory = typeof skillCategories[number]
