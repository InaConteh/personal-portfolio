import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Joe Abass Website',
    description: 'A responsive portfolio website built with React and Vite.',
    tags: ['React', 'Vite', 'CSS'],
    link: 'https://job-abass-website.vercel.app/',
    image: 'Joe.PNG'
  },
  {
    title: 'Vulture',
    description: 'An electric car company website with interactive 3D elements.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Spline'],
    link: 'https://volture-red.vercel.app/',
    image: 'image.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="reveal-up section__title">
        <span className="section__title-accent">03.</span> Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}


