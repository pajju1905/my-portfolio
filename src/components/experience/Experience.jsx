import { CheckIcon } from '../common/Icons'
import { experience } from '../../data/portfolioData'
import './Experience.css'

export default function Experience() {
  return (
    <section className="experience-section section-wrap" id="experience">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WORK HISTORY &amp; INDUSTRY EXPERIENCE</p>
          <h2>Professional Experience<span className="heading-period">.</span></h2>
        </div>
        <p className="section-aside">
          Industry immersion developing scalable
          <br />
          full-stack systems and clean backend APIs.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="exp-card-header">
              <div className="exp-title-block">
                <span className="exp-badge">{exp.badge}</span>
                <h3>{exp.role}</h3>
                <h4 className="exp-company">
                  {exp.company} &bull; <span>{exp.location}</span>
                </h4>
              </div>
              <div className="exp-period-pill">{exp.period}</div>
            </div>

            <p className="exp-summary">{exp.description}</p>

            <div className="exp-highlights-title">Key Responsibilities &amp; Impact:</div>
            <ul className="exp-bullets">
              {exp.highlights.map((point, pIdx) => (
                <li key={pIdx}>
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="exp-tech-strip">
              <span className="tech-label">Technologies:</span>
              <div className="tag-list">
                {exp.technologies.map((t) => (
                  <span className="tag-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
