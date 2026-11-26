import { LocationIcon } from '../common/Icons'
import { languages } from '../../data/portfolioData'
import './About.css'

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner section-wrap">
        <div className="about-label">
          <div>
            <p className="eyebrow">ABOUT PRAJWAL</p>
            <h3 className="about-role-sub">Full Stack Web Engineer</h3>
          </div>
          <div className="location-pill">
            <LocationIcon />
            <span>Bengaluru, India</span>
          </div>
          <span className="about-star" aria-hidden="true">&lowast;</span>
        </div>

        <div className="about-copy">
          <h2>
            Crafting dependable web solutions
            <br />
            <span>where logic meets purpose.</span>
          </h2>
          <p>
            I am a BCA graduate with an <strong>87.0% Aggregate</strong> and a passionate{' '}
            <strong>Python Full Stack Developer Intern at Cravita Technologies</strong>. My journey centers
            around building end-to-end web applications that solve tangible problems — from architecting
            normalized relational databases in <strong>MySQL</strong> to implementing responsive interfaces in{' '}
            <strong>React &amp; Bootstrap</strong> and scalable backend APIs in <strong>Python and PHP</strong>.
          </p>
          <p>
            My projects include <strong>Farmogram</strong>, a smart agricultural marketplace,{' '}
            <strong>TrackBook</strong>, a book management system, and this React.js{' '}
            <strong>personal portfolio</strong>.
          </p>
          <p>
            I thrive in environments where I can write clean code, solve algorithmic challenges, collaborate with
            cross-functional teams, and continuously absorb modern software engineering best practices.
          </p>

          <div className="about-highlights-grid">
            <div className="about-highlight-box">
              <div className="highlight-tag">Academics</div>
              <h4>BCA Graduate (87.0%)</h4>
              <p>Himalaya BCA College, Ankola. Graduated with an 87.0% aggregate.</p>
            </div>
            <div className="about-highlight-box">
              <div className="highlight-tag">Internship</div>
              <h4>Cravita Technologies</h4>
              <p>Building responsive web apps, APIs, and MySQL CRUD operations in Bengaluru.</p>
            </div>
            <div className="about-highlight-box">
              <div className="highlight-tag">Focus Areas</div>
              <h4>Full Stack Engineering</h4>
              <p>Python, PHP, React, MySQL, REST APIs, Django, Node.js, and Object-Oriented Design.</p>
            </div>
          </div>

          <div className="languages-wrap">
            <p className="eyebrow">LANGUAGES SPOKEN</p>
            <div className="lang-chips">
              {languages.map((l) => (
                <div className="lang-chip" key={l.name}>
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-level">&middot; {l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
