import { useState } from 'react'
import { ArrowIcon } from '../common/Icons'
import './Header.css'

export default function Header({ onOpenResume }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Prajwal Gouda, home">
        <span className="wordmark-mark">PG</span>
        <span className="wordmark-name">Prajwal Gouda</span>
      </a>

      <button
        className="mobile-nav-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`} />
      </button>

      <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`} aria-label="Main navigation">
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#experience" onClick={handleNavClick}>Experience</a>
        <a href="#work" onClick={handleNavClick}>Projects</a>
        <a href="#skills" onClick={handleNavClick}>Skills</a>
        <a href="#education" onClick={handleNavClick}>Education</a>
        <a href="#certifications" onClick={handleNavClick}>Certifications</a>
        <button
          className="nav-resume-btn"
          onClick={() => {
            handleNavClick()
            onOpenResume()
          }}
        >
          Resume
        </button>
        <a className="nav-contact" href="#contact" onClick={handleNavClick}>
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  )
}
