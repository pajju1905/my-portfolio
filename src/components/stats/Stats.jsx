import { stats } from '../../data/portfolioData'
import './Stats.css'

export default function Stats() {
  return (
    <section className="stats-section section-wrap" aria-label="Key statistics">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
            <div className="stat-sub">{item.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
