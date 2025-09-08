

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './App.css'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Ina Moses Conteh</small>
      </footer>
    </>
  )
}

export default App
