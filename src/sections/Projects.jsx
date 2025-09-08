import ProjectCard from '../components/ProjectCard'

const sampleProjects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio built with React and Vite.',
    tags: ['React', 'Vite', 'CSS'],
    link: 'https://example.com',
  },
  {
    title: 'Todo App',
    description: 'A simple todo app with local storage persistence.',
    tags: ['JavaScript', 'LocalStorage'],
    link: 'https://example.com',
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


