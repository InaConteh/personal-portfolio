const skills = [
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

export default function Skills() {
  return (
    <section id="skills" className="section section--skills">
      <h2 className="reveal-up section__title">
        <span className="section__title-accent">02.</span> Skills
      </h2>
      <ul className="skills skills--grid">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-chip skill-chip--icon">
            <i className={skill.icon} aria-hidden="true" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


