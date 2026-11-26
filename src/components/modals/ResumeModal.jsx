import { personalInfo, experience, projects, education, certifications } from '../../data/portfolioData'
import './Modals.css'

export default function ResumeModal({ isOpen, onClose, onCopy }) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container resume-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-resume-title"
      >
        <div className="modal-header">
          <div>
            <span className="modal-badge">Official Resume</span>
            <h2 id="modal-resume-title">Prajwal Gouda — Resume</h2>
            <p className="modal-subtitle">Bengaluru, Karnataka &middot; {personalInfo.phone} &middot; {personalInfo.email}</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            &times;
          </button>
        </div>

        <div className="modal-body resume-body">
          <div className="resume-section">
            <h3>Professional Summary</h3>
            <p>{personalInfo.summary}</p>
          </div>

          <div className="resume-section">
            <h3>Work Experience</h3>
            {experience.map((exp, idx) => (
              <div className="resume-item" key={idx}>
                <div className="resume-item-header">
                  <strong>{exp.role} &mdash; {exp.company}</strong>
                  <span>{exp.period}</span>
                </div>
                <ul className="resume-sub-list">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3>Projects</h3>
            {projects.map((p) => (
              <div className="resume-item" key={p.id}>
                <div className="resume-item-header">
                  <strong>{p.name} &mdash; {p.subtitle}</strong>
                  <span>{p.year}</span>
                </div>
                <p className="resume-item-desc">{p.description}</p>
                <div className="resume-tags">
                  Technologies: {p.tags.join(', ')}
                </div>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3>Technical Skills</h3>
            <div className="resume-skills-grid">
              <div><strong>Languages:</strong> Java, Python, PHP, JavaScript, SQL</div>
              <div><strong>Web Development:</strong> HTML5, CSS3, Bootstrap, React</div>
              <div><strong>Backend &amp; Databases:</strong> Django, Node.js, MySQL, CRUD, REST APIs</div>
              <div><strong>Tools:</strong> VS Code, GitHub, XAMPP</div>
              <div><strong>Concepts:</strong> OOP, Responsive Web Design, Database Architecture</div>
            </div>
          </div>

          <div className="resume-section">
            <h3>Education</h3>
            {education.map((edu, idx) => (
              <div className="resume-item" key={idx}>
                <div className="resume-item-header">
                  <strong>{edu.degree} &mdash; {edu.institution}</strong>
                  <span>{edu.year}</span>
                </div>
                <div className="resume-edu-score">Aggregate / Score: <strong>{edu.score}</strong></div>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3>Certifications</h3>
            <ul className="resume-sub-list">
              {certifications.map((c, idx) => (
                <li key={idx}>
                  <strong>{c.title}</strong> &mdash; {c.issuer} ({c.date})
                </li>
              ))}
            </ul>
          </div>

          <div className="resume-section">
            <h3>Languages &amp; Soft Skills</h3>
            <p><strong>Languages:</strong> English, Kannada, Hindi</p>
            <p><strong>Soft Skills:</strong> Problem Solving, Teamwork, Time Management, Adaptability</p>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="button button-dark"
            onClick={() => {
              window.print()
            }}
          >
            Print / Save as PDF
          </button>
          <button
            className="button button-outline"
            onClick={() => onCopy(personalInfo.summary, 'Summary')}
          >
            Copy Text
          </button>
          <button className="button button-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
