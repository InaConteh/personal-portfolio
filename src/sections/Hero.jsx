export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__kicker reveal-up">Hi, I’m</p>
        <h1 className="hero__title reveal-up reveal-chars">Ina Moses Conteh</h1>
        <p className="hero__subtitle reveal-up">Full Stack Developer </p>
        <p className="hero__blurb reveal-up">
          I build clean, accessible, and performant web apps. I love turning ideas
          into delightful user experiences.
        </p>
        <div className="hero__actions reveal-up">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  )
}


