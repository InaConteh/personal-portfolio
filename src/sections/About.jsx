export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="reveal-up">About Me</h2>
      <div className="about-card reveal-up">
        <img
          className="about-card__image"
          src="My.jpg"
          alt="Portrait of Ina Moses Conteh"
          loading="lazy"
        />
        <div className="about-card__content">
          <p className="reveal-up">
            I’m a passionate developer focused on building clean, accessible, and
            performant web experiences. I enjoy working with modern JavaScript,
            React, and crafting thoughtful UI/UX.
          </p>
          <p className="reveal-up">
            Outside coding, I explore new tools, contribute to open source, and
            share knowledge with the community.
          </p>
          <p className="reveal-up">
            I am also a chess enthusiast and I love to play chess.
          </p>
        </div>
      </div>
    </section>
  )
}


