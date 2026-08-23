import ChessCard from './ChessCard'

export default function VideoCaseStudy({ project }) {
  if (!project) return null

  const { title, subtitle, description, video, tags, highlight, caseStudy } = project

  return (
    <div className="video-case-study-wrapper">
      <ChessCard className="video-case-study-card">
        {/* Header Information */}
        <div className="vcs-header">
          <div className="vcs-header__top">
            {highlight && <span className="vcs-badge">{highlight}</span>}
            <span className="vcs-subtitle">{subtitle}</span>
          </div>
          <h3 className="vcs-title">{title}</h3>
          <p className="vcs-description">{description}</p>

          {tags?.length > 0 && (
            <ul className="vcs-tags">
              {tags.map((tag) => (
                <li key={tag} className="vcs-tag">{tag}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Embedded HTML5 Video Player */}
        {video && (
          <div className="vcs-media-container">
            <div className="vcs-media__frame">
              <video
                className="vcs-video-element"
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>
            </div>
            <span className="vcs-media__caption">
              🎥 Video Showcase: Salone Water Watch Operational Interface & Telemetry Demo
            </span>
          </div>
        )}

        {/* Built-In Case Study Deep Dive Breakdown */}
        {caseStudy && (
          <div className="vcs-breakdown">
            <div className="vcs-breakdown__header">
              <span className="vcs-breakdown__subtitle">System Blueprint</span>
              <h4 className="vcs-breakdown__title">{caseStudy.title}</h4>
              <p className="vcs-breakdown__tagline">{caseStudy.tagline}</p>
            </div>

            <div className="vcs-grid">
              {/* Challenge */}
              <div className="vcs-block">
                <div className="vcs-block__header">
                  <span className="vcs-block__icon">♟</span>
                  <h4>The Opening Gambit (Challenge)</h4>
                </div>
                <p>{caseStudy.problem}</p>
              </div>

              {/* Architecture */}
              <div className="vcs-block">
                <div className="vcs-block__header">
                  <span className="vcs-block__icon">♞</span>
                  <h4>Tactical Architecture</h4>
                </div>
                <p>{caseStudy.architecture}</p>
              </div>

              {/* Features */}
              {caseStudy.keyFeatures?.length > 0 && (
                <div className="vcs-block vcs-block--wide">
                  <div className="vcs-block__header">
                    <span className="vcs-block__icon">♜</span>
                    <h4>Key Execution Highlights</h4>
                  </div>
                  <ul className="vcs-features-list">
                    {caseStudy.keyFeatures.map((feat, idx) => (
                      <li key={idx}>
                        <span className="vcs-check-icon">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact */}
              <div className="vcs-block vcs-block--impact vcs-block--wide">
                <div className="vcs-block__header">
                  <span className="vcs-block__icon">♚</span>
                  <h4>Endgame Impact & Results</h4>
                </div>
                <p>{caseStudy.impact}</p>
              </div>
            </div>
          </div>
        )}
      </ChessCard>
    </div>
  )
}
