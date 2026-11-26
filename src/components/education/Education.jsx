import { education } from '../../data/portfolioData'
import './Education.css'

export default function Education() {
  return (
    <section className="education-section section-wrap" id="education">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ACADEMIC BACKGROUND</p>
          <h2>Education<span className="heading-period">.</span></h2>
        </div>
        <p className="section-aside">
          Consistent academic excellence with
          <br />
          87.0% aggregate in Computer Applications.
        </p>
      </div>

      <div className="education-grid">
        {education.map((edu, idx) => (
          <div className="education-card" key={idx}>
            <div className="edu-top">
              <div className="edu-badge">{edu.badge}</div>
              <span className="edu-year">{edu.year}</span>
            </div>
            <h3 className="edu-degree">{edu.degree}</h3>
            <h4 className="edu-school">{edu.institution}</h4>
            <div className="edu-score-highlight">
              <span>Score:</span> <strong>{edu.score}</strong>
            </div>
            <p className="edu-desc">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
