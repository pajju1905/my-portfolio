import { personalInfo } from '../../data/portfolioData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <div className="footer-left">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">PG</span>
          <span>{personalInfo.name}</span>
        </a>
        <p className="footer-copy-text">Python Full Stack Developer &bull; Cravita Technologies Intern</p>
      </div>

      <div className="footer-links">
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={`mailto:${personalInfo.email}`}>Email</a>
        <a href={`tel:${personalInfo.phone}`}>Phone</a>
      </div>

      <a className="back-to-top" href="#home">
        BACK TO TOP &uarr;
      </a>
    </footer>
  )
}
