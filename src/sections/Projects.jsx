import ProjectCard from '../components/ProjectCard'

const sampleProjects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio built with React and Vite.',
    tags: ['React', 'Vite', 'CSS'],
    link: 'https://example.com',
  },
  {
    title: 'Vulture',
    description: 'An electric car company.',
    tags: ['JavaScript', 'Html','Css'],
    link: 'https://volture-red.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="reveal-up">Projects</h2>
      <div className="projects-grid">
        {sampleProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />)
        )}
      </div>
    </section>
  )
}


