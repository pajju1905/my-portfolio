import ProjectCard from './ProjectCard'
import { projects } from '../../data/portfolioData'
import './Projects.css'

export default function Projects({ onSelectProject }) {
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FEATURED FULL-STACK WORK</p>
          <h2>Selected Projects<span className="heading-period">.</span></h2>
        </div>
        <p className="section-aside">
          End-to-end web applications built from scratch
          <br />
          with PHP, MySQL, Python, and modern frontends.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  )
}
