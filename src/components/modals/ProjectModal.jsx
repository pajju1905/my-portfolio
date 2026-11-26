import { CheckIcon, GithubIcon, ArrowIcon } from '../common/Icons'
import { personalInfo } from '../../data/portfolioData'
import './Modals.css'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <div className="modal-header">
          <div>
            <span className="modal-badge">{project.badge}</span>
            <h2 id="modal-project-title">{project.name}</h2>
            <p className="modal-subtitle">{project.subtitle} &middot; {project.year}</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Project Overview</h3>
            <p>{project.fullDescription}</p>
          </div>

          <div className="modal-section">
            <h3>Key Features &amp; Capabilities</h3>
            <ul className="modal-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckIcon />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Technology Stack</h3>
            <div className="tag-list">
              {project.tags.map((t) => (
                <span className="tag-chip tag-chip-modal" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              View Live Project <ArrowIcon diagonal />
            </a>
          )}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            <GithubIcon /> View on GitHub
          </a>
          <button className="button button-outline" onClick={onClose}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  )
}
