import { ArrowIcon, LinkedInIcon, GithubIcon, MailIcon } from '../common/Icons'
import { personalInfo } from '../../data/portfolioData'
import './Hero.css'

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-arch" aria-hidden="true">
        <span className="arch-spark arch-spark-left">✳</span>
        <span className="arch-spark arch-spark-right">✳</span>
      </div>

      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="availability-dot" />
          AVAILABLE FOR DEVELOPER ROLES <span className="eyebrow-divider">/</span> BENGALURU, KA
        </p>
        <p className="hero-kicker">HELLO, I&apos;M {personalInfo.name.toUpperCase()}</p>
        <h1>
          Building thoughtful
          <br />
          <span className="serif-accent">digital experiences.</span>
        </h1>
        <p className="hero-description">
          Python full-stack developer turning ideas into useful, human-friendly products.
          I work across <strong>Python, React, PHP, and MySQL</strong> — and love solving
          real-world problems with clean, considered code.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <ArrowIcon />
          </a>
          <button className="button button-outline" onClick={onOpenResume}>
            View resume
          </button>
        </div>

        <div className="hero-social-strip" aria-label="Social links">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
            title="LinkedIn Profile"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
            title="GitHub Profile"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-pill" title="Email Prajwal">
            <MailIcon />
            <span>Say hello</span>
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>PYTHON FULL STACK DEVELOPER <span className="hero-bottom-dot">•</span> BCA, 87%</span>
        <a href="#about">
          SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
