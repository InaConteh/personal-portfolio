export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://inaconteh.vercel.app').replace(/\/$/, '')

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Lab', href: '/lab' },
  { label: 'Contact', href: '/contact' },
] as const

export const PROFILE = {
  name: 'Ina Conteh',
  fullName: 'Ina Moses Conteh',
  role: 'Developer · Designer · Motion',
  tagline: 'Interfaces that are built, designed & in motion.',
  pitch: "I'm Ina, a developer and designer who brings products to life with code and motion.",
  location: 'Freetown, Sierra Leone',
  email: 'inaconteh001@gmail.com',
  cvUrl: '/Ina.pdf',
  socials: {
    github: 'https://github.com/InaConteh',
    whatsapp: 'https://wa.me/23232829458',
    whatsappLabel: '+232 32 829 458',
  },
}

export const TAG_LABELS = { code: 'Code', design: 'Design', motion: 'Motion' } as const

export const PRINCIPLES = [
  {
    kicker: 'Foundation',
    title: 'Architecture first',
    description:
      'Strong products start with strong foundations. I think through the architecture, component structure, data flow, and long-term constraints before writing code — building systems that are clean, modular, and ready to evolve.',
  },
  {
    kicker: 'Performance',
    title: 'Fast by default',
    description:
      "Good engineering is not just about making something work. It's about making it feel effortless. I focus on efficient rendering, thoughtful interactions, optimized assets, and responsive systems that keep the experience fast without sacrificing quality.",
  },
  {
    kicker: 'Delivery',
    title: 'Shipped, not shelved',
    description:
      'A great idea means nothing if it never ships. I take products from implementation to production with disciplined testing, reliable deployments, and attention to the details that turn a working system into something people can actually trust and use.',
  },
]

export const SKILLS = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Core logic, async patterns, DOM manipulation, functional programming.' },
      { name: 'React 19', level: 'Advanced', description: 'Hooks, custom state management, component architecture, performance optimization.' },
      { name: 'TypeScript', level: 'Intermediate', description: 'Strict type safety, generic interfaces, maintainable codebase contracts.' },
      { name: 'HTML5 & CSS3', level: 'Expert', description: 'Semantic structure, CSS Grid, Flexbox, custom design tokens, responsive UI.' },
    ],
  },
  {
    category: 'Backend & systems',
    skills: [
      { name: 'Node.js', level: 'Intermediate', description: 'RESTful API engineering, middleware pipelines, event loops.' },
      { name: 'Python', level: 'Intermediate', description: 'Data processing, scripting automation, algorithmic problem solving.' },
      { name: 'PostgreSQL', level: 'Intermediate', description: 'Relational schema design, indexed queries, data consistency.' },
      { name: 'MongoDB', level: 'Intermediate', description: 'Document stores, aggregation frameworks, flexible schema patterns.' },
    ],
  },
  {
    category: 'Tools & motion',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Version control workflow, PR reviews, branch strategies.' },
      { name: 'Vite & Next.js', level: 'Advanced', description: 'Fast dev servers, static generation, optimized production bundles.' },
      { name: 'GSAP & Motion', level: 'Intermediate', description: 'Timelines, scroll triggers, spring physics.' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first styling systems and design tokens.' },
    ],
  },
]

export const TOOLS = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Tailwind CSS', 'GSAP', 'Motion', 'Vite', 'Git', 'Spline',
]

export const MILESTONES = [
  {
    year: '2024 — Present',
    role: 'Full Stack Software Engineer',
    company: 'Independent & Client Projects',
    description:
      'Architecting end-to-end web applications with React, Node.js, and modern UI design systems. Focusing on 3D interactions, accessibility, and high-performance frontend interfaces.',
  },
  {
    year: '2023 — 2024',
    role: 'Frontend Web Developer',
    company: 'Digital Solutions Agency',
    description:
      'Developed responsive client portals, brand websites, and interactive dashboards. Integrated custom animations using GSAP and Spline.',
  },
  {
    year: '2022 — 2023',
    role: 'Software Development Immersion',
    company: 'Tech Academy & Community',
    description:
      'Deepened core skills in JavaScript, Python algorithms, data structures, and chess strategy calculation. Built multi-tier web projects and contributed to open source repositories.',
  },
]
