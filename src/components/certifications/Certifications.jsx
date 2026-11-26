import { certifications } from '../../data/portfolioData'
import './Certifications.css'

export default function Certifications() {
  return (
    <section className="certifications-section section-wrap" id="certifications">
      <div className="section-heading">
        <div>
          <p className="eyebrow">VERIFIED CREDENTIALS</p>
          <h2>Certifications<span className="heading-period">.</span></h2>
        </div>
        <p className="section-aside">
          Industry-recognized skills certifications
          <br />
          in software engineering and full-stack development.
        </p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-top">
              <span className="cert-badge">{cert.badge}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <h4 className="cert-issuer">Issued by: <strong>{cert.issuer}</strong></h4>
            <p className="cert-desc">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
