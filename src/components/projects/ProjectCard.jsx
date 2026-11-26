import { ArrowIcon } from '../common/Icons'

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <article
      className="project-card"
      onClick={() => onSelectProject(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelectProject(project)
        }
      }}
    >
      <div className={`project-art ${project.className}`}>
        <span className="project-number">{project.number} / 03</span>
        <span className="project-badge-tag">{project.badge}</span>
        <span className="project-mark">{project.mark}</span>
        <span className="project-open" aria-label={`View details for ${project.name}`}>
          <ArrowIcon diagonal />
        </span>
      </div>

      <div className="project-meta">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.name}</h3>
          <p className="project-subtitle-text">{project.subtitle}</p>
        </div>
        <p className="project-description">{project.description}</p>
      </div>

      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
        {project.tags.length > 4 && (
          <li className="tag-more">+{project.tags.length - 4} more</li>
        )}
      </ul>

      <div className="project-card-footer">
        <span className="project-click-hint">Click to view full architecture &rarr;</span>
      </div>
    </article>
  )
}
