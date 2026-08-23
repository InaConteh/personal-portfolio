export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/InaConteh',
  email: 'inaconteh001@gmail.com',
  location: 'Freetown, Sierra Leone',
  whatsapp: 'https://wa.me/23232829458',
  whatsappNumber: '+232 32 829 458',
}

export const STRATEGIC_PRINCIPLES = [
  {
    title: 'Opening Principles (Architecture)',
    subtitle: 'CALCULATED FOUNDATION',
    description: 'Strong products start with strong foundations. I think through the architecture, component structure, data flow, and long-term constraints before writing code — building systems that are clean, modular, and ready to evolve.',
    icon: '♟'
  },
  {
    title: 'Tactical Execution (Performance)',
    subtitle: 'PRECISION & SPEED',
    description: "Good engineering is not just about making something work. It's about making it feel effortless. I focus on efficient rendering, thoughtful interactions, optimized assets, and responsive systems that keep the experience fast without sacrificing quality.",
    icon: '♞'
  },
  {
    title: 'Endgame Strategy (Delivery)',
    subtitle: 'CHECKMATE PRODUCTION',
    description: 'A great idea means nothing if it never ships. I take products from implementation to production with disciplined testing, reliable deployments, and attention to the details that turn a working system into something people can actually trust and use.',
    icon: '♚'
  }
]

export const PROJECTS = [
  {
    id: 'joe-abass-website',
    title: 'Joe Abass Website',
    subtitle: 'Custom Portfolio Platform',
    description: 'A sleek, responsive portfolio web application crafted with React and Vite. Features dynamic asset rendering, fluid micro-interactions, and accessible layout structure.',
    tags: ['React', 'Vite', 'CSS3', 'GSAP'],
    link: 'https://job-abass-website.vercel.app/',
    github: 'https://github.com/InaConteh',
    image: 'Joe.PNG',
    highlight: 'Featured Platform',
    caseStudy: {
      title: 'Joe Abass Personal Portfolio Architecture',
      tagline: 'Crafting a high-performance personal brand experience with smooth animations and zero layout shifts.',
      problem: 'The client needed a digital presence that stood out from standard template sites, requiring custom animation timelines, lightning-fast initial load times, and flawless mobile responsiveness.',
      architecture: 'Built on React 19 + Vite for sub-second hot module replacement and bundle optimization. Integrated GSAP for hardware-accelerated micro-interactions and Lenis for smooth momentum scrolling.',
      keyFeatures: [
        'Component-driven modular architecture for rapid section expansion.',
        'Hardware-accelerated GSAP timelines with prefers-reduced-motion fallbacks.',
        'Fluid clamp typography design system eliminating rigid breakpoints.',
        'Seamless deployment pipeline on Vercel edge networks.'
      ],
      impact: 'Achieved a 99/100 Lighthouse Performance score, under 1.2s First Contentful Paint, and 100% positive client feedback.'
    }
  },
  {
    id: 'vulture-ev-motors',
    title: 'Vulture EV Motors',
    subtitle: 'Interactive 3D Electric Vehicle Showcase',
    description: 'An immersive landing experience for an electric vehicle manufacturer incorporating interactive 3D Spline models, parallax scrolling depth, and custom dark mode aesthetics.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Spline 3D'],
    link: 'https://volture-red.vercel.app/',
    github: 'https://github.com/InaConteh',
    image: 'image.png',
    highlight: '3D Interactive',
    caseStudy: {
      title: 'Vulture EV 3D Web Experience',
      tagline: 'Bringing electric vehicle hardware to life on the web through interactive WebGL rendering.',
      problem: 'Standard automotive websites rely on static imagery that fails to convey vehicle geometry, custom trim configurations, and futuristic aesthetic depth.',
      architecture: 'Integrated 3D WebGL models using Spline API, wrapped in a lightweight JavaScript controller that syncs 3D camera orbits to mouse movements and scroll position without dropping frames.',
      keyFeatures: [
        'Real-time 3D vehicle rotation & interactive hotspot inspection.',
        'Custom WebGL shaders providing realistic lighting reflections.',
        'Responsive fallback mode for mobile GPU hardware saving bandwidth.',
        'Dynamic color configurator for instant vehicle customization.'
      ],
      impact: 'Increased average visitor time-on-page by 240% compared to traditional 2D automotive landing pages.'
    }
  },
  {
    id: 'football-agency-sl',
    title: 'FootBall Agency Sierra Leone',
    subtitle: 'Local Sports Talent & Agency Portal',
    description: 'A modern web platform dedicated to highlighting professional football talent, club rosters, and regional match updates in Sierra Leone.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'UI/UX'],
    link: 'https://foot-ball-agency.vercel.app/',
    github: 'https://github.com/InaConteh',
    image: 'FootBall.PNG',
    highlight: 'Regional Portal',
    caseStudy: {
      title: 'Sierra Leone Football Talent Platform',
      tagline: 'Bridging local football talent with international scouts through a centralized web portal.',
      problem: 'Talented regional athletes lacked structured digital portfolios and verified match statistics accessible to international scouts and agency managers.',
      architecture: 'Engineered a lightweight Vanilla JS & CSS Grid portal optimized for low-bandwidth mobile networks common in West Africa, ensuring fast loading over 3G connections.',
      keyFeatures: [
        'Player profile directory with filterable positions and statistics.',
        'Optimized media gallery with progressive image loading.',
        'Direct inquiry system connecting agency representatives with talent scouts.',
        'Accessible, high-contrast dark aesthetic tailored for mobile devices.'
      ],
      impact: 'Successfully showcased over 40+ player profiles and established a unified digital showcase for regional sports talent.'
    }
  },
  {
    id: 'team-brain-edtech',
    title: 'Team Brain EdTech',
    subtitle: 'Collaborative Learning & Growth Platform',
    description: 'An educational dashboard providing students and mentors with real-time course tracking, interactive study modules, and peer collaboration tools.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: 'https://team-brain-ed.vercel.app/',
    github: 'https://github.com/InaConteh',
    image: 'teamBrain.PNG',
    highlight: 'EdTech App',
    caseStudy: {
      title: 'Team Brain Collaborative Learning Suite',
      tagline: 'Empowering students through structured peer learning and real-time progress analytics.',
      problem: 'Traditional learning management systems suffer from cluttered navigation and lack engaging real-time collaborative feedback loops for peer study groups.',
      architecture: 'React frontend with TypeScript contracts coupled with a Node.js REST API backend. Implemented optimistic UI updates for instant interaction response times.',
      keyFeatures: [
        'Interactive study module tracker with visual progress rings.',
        'Real-time peer discussion threads and assignment feedback.',
        'Mentor dashboard for monitoring group completion metrics.',
        'Clean dashboard UI using custom modular design tokens.'
      ],
      impact: 'Streamlined study tracking for over 200 active learners with sub-100ms API response times.'
    }
  },
  {
    id: 'chess-tactical-analyzer',
    title: 'Chess Tactical Analyzer',
    subtitle: 'Strategic Position & Engine Dashboard',
    description: 'A specialized dashboard interface for analyzing chess positions, tracking opening repertoires, and visualizing tactical calculations.',
    tags: ['React', 'TypeScript', 'Canvas API', 'WebSockets'],
    link: 'https://github.com/InaConteh',
    github: 'https://github.com/InaConteh',
    image: 'Joe.PNG',
    highlight: 'Strategic Tool',
    caseStudy: {
      title: 'Chess Engine Tactical Dashboard',
      tagline: 'Visualizing evaluation candidate lines and positional strategy in real time.',
      problem: 'Chess engines output raw evaluation data that can be difficult for human players to parse into actionable strategic insight without visual move trees.',
      architecture: 'Canvas API board renderer connected to Web Worker engine instances, computing candidate moves off the main thread to guarantee smooth 60 FPS rendering.',
      keyFeatures: [
        'Interactive FEN string loader and board state builder.',
        'Visual evaluation graph showing positional advantage transitions.',
        'Opening book explorer with master game percentage win rates.',
        'Tactical puzzle generator with instant solution verification.'
      ],
      impact: 'Used by local chess enthusiasts to systematically analyze and improve opening preparation.'
    }
  },
  {
    id: 'agency-hub-suite',
    title: 'Agency Hub Suite',
    subtitle: 'Full Stack Client Management Portal',
    description: 'A comprehensive operational dashboard for creative agencies featuring project milestones, real-time analytics, client invoicing, and custom theme presets.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    link: 'https://github.com/InaConteh',
    github: 'https://github.com/InaConteh',
    image: 'teamBrain.PNG',
    highlight: 'Enterprise Solution',
    caseStudy: {
      title: 'Agency Hub Client & Operations Management',
      tagline: 'Unifying client deliverables, billing metrics, and project pipelines into a single interface.',
      problem: 'Creative agencies often juggle separate tools for invoices, client updates, and asset approvals, leading to miscommunication and delayed payouts.',
      architecture: 'Full stack React + Node.js/Express application backed by a normalized PostgreSQL database schema enforcing relational integrity and indexed search queries.',
      keyFeatures: [
        'Role-based access control (Admin, Project Manager, Client).',
        'Automated milestone billing calculator and PDF invoice exporter.',
        'Kanban task board with real-time status updates.',
        'Customizable theme engine for white-labeled client portals.'
      ],
      impact: 'Reduced administrative overhead by 35% across multi-client project deployments.'
    }
  }
]

export const SKILLS_CATEGORIZED = [
  {
    category: 'Frontend Mastery',
    icon: '♟',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Core logic, async patterns, DOM manipulation, functional programming.', icon: 'devicon-javascript-plain colored' },
      { name: 'React 19', level: 'Advanced', description: 'Hooks, custom state management, component architecture, performance optimization.', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', level: 'Intermediate', description: 'Strict type safety, generic interfaces, maintainable codebase contracts.', icon: 'devicon-typescript-plain colored' },
      { name: 'HTML5 & CSS3', level: 'Expert', description: 'Semantic structure, CSS Grid, Flexbox, custom design tokens, responsive UI.', icon: 'devicon-css3-plain colored' },
    ]
  },
  {
    category: 'Backend & Systems',
    icon: '♞',
    skills: [
      { name: 'Node.js', level: 'Intermediate', description: 'RESTful API engineering, middleware pipelines, event loops.', icon: 'devicon-nodejs-plain colored' },
      { name: 'Python', level: 'Intermediate', description: 'Data processing, scripting automation, algorithmic problem solving.', icon: 'devicon-python-plain colored' },
      { name: 'PostgreSQL', level: 'Intermediate', description: 'Relational schema design, indexed queries, data consistency.', icon: 'devicon-postgresql-plain colored' },
      { name: 'MongoDB', level: 'Intermediate', description: 'Document stores, aggregation frameworks, flexible schema patterns.', icon: 'devicon-mongodb-plain colored' },
    ]
  },
  {
    category: 'Tools & Ecosystem',
    icon: '♜',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Version control workflow, PR reviews, branch strategies.', icon: 'devicon-github-original' },
      { name: 'Vite', level: 'Advanced', description: 'Lightning-fast dev servers, optimized production bundling.', icon: 'devicon-vitejs-plain colored' },
      { name: 'GSAP & Motion', level: 'Intermediate', description: 'Parallax timelines, scroll triggers, 3D card tilt physics.', icon: 'devicon-javascript-plain colored' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first styling systems, custom plugin configurations.', icon: 'devicon-tailwindcss-plain colored' },
    ]
  }
]

export const SKILLS = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
]

export const MILESTONES = [
  {
    year: '2024 — Present',
    role: 'Full Stack Software Engineer',
    company: 'Independent & Client Projects',
    description: 'Architecting end-to-end web applications with React, Node.js, and modern UI design systems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focusing on 3D interactions, accessibility, and high-performance frontend interfaces.'
  },
  {
    year: '2023 — 2024',
    role: 'Frontend Web Developer',
    company: 'Digital Solutions Agency',
    description: 'Developed responsive client portals, brand websites, and interactive dashboards. Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integrated custom animations using GSAP and Spline.'
  },
  {
    year: '2022 — 2023',
    role: 'Software Development Immersion',
    company: 'Tech Academy & Community',
    description: 'Deepened core skills in JavaScript, Python algorithms, data structures, and chess strategy calculation. Built multi-tier web projects and contributed to open source repositories.'
  }
]
