export default function About() {
  return (
    <section id="about" className="section section--about">
      <h2 className="reveal-up section__title">
        <span className="section__title-accent">01.</span> About Me
      </h2>
      <div className="about-card reveal-up">
        <div className="about-card__image-wrapper">
          <div className="about-card__image-glow"></div>
          <img
            className="about-card__image"
            src="My.jpg"
            alt="Portrait of Ina Moses Conteh"
            loading="lazy"
          />
        </div>
        <div className="about-card__content">
          <p className="reveal-up about-card__text">
            I'm a passionate developer focused on building clean, accessible, and
            performant web experiences. I enjoy working with modern JavaScript,
            React, and crafting thoughtful UI/UX.
          </p>
          <p className="reveal-up about-card__text">
            Outside coding, I explore new tools, contribute to open source, and
            share knowledge with the community.
          </p>
          <p className="reveal-up about-card__text">
            I am also a chess enthusiast and I love to play chess.
          </p>
          <div className="about-card__stats reveal-up">
            <div className="stat-item">
              <span className="stat-item__number">100+</span>
              <span className="stat-item__label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">50+</span>
              <span className="stat-item__label">Contributions</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">3+</span>
              <span className="stat-item__label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


