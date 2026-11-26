import { skillCategories, softSkills } from '../../data/portfolioData'
import './Skills.css'

export default function Skills() {
  return (
    <section className="skills-section section-wrap" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CAPABILITIES &amp; TOOLSET</p>
          <h2>Technical Skills<span className="heading-period">.</span></h2>
        </div>
        <p className="section-aside">
          Comprehensive stack spanning languages,
          <br />
          databases, web frameworks, and dev tools.
        </p>
      </div>

      <div className="skills-categories-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skill-cat-card" key={idx}>
            <div className="skill-cat-header">
              <div className="skill-cat-num">0{idx + 1}</div>
              <h3>{cat.title}</h3>
            </div>
            <ul className="skill-pill-list">
              {cat.skills.map((s) => (
                <li className="skill-pill-item" key={s}>
                  <span className="skill-bullet">&bull;</span>
                  <span className="skill-text">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="soft-skills-strip">
        <div className="soft-skills-label">
          <span className="eyebrow">CORE PROFESSIONAL STRENGTHS</span>
        </div>
        <div className="soft-skills-chips">
          {softSkills.map((sk) => (
            <span className="soft-skill-chip" key={sk}>
              &check; {sk}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
