import { MailIcon, PhoneIcon, LinkedInIcon, LocationIcon, ArrowIcon } from '../common/Icons'
import { personalInfo } from '../../data/portfolioData'
import './Contact.css'

export default function Contact({ onOpenResume, onCopy }) {
  return (
    <section className="contact-section section-wrap" id="contact">
      <p className="eyebrow">READY TO COLLABORATE?</p>
      <h2>
        Let&apos;s build
        <br />
        <span>something exceptional.</span>
      </h2>
      <p className="contact-copy">
        I am currently open to full-time roles as a <strong>Software Developer</strong>,{' '}
        <strong>Web Developer</strong>, <strong>PHP Developer</strong>, or <strong>IT Support Engineer</strong> in Bengaluru or Remote.
      </p>

      <div className="contact-cards-grid">
        <div className="contact-info-card">
          <div className="contact-info-icon"><MailIcon /></div>
          <div className="contact-info-body">
            <span className="contact-card-label">EMAIL ADDRESS</span>
            <a href={`mailto:${personalInfo.email}`} className="contact-card-value">
              {personalInfo.email}
            </a>
          </div>
          <button
            className="contact-copy-btn"
            onClick={() => onCopy(personalInfo.email, 'Email')}
            title="Copy Email"
          >
            Copy
          </button>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon"><PhoneIcon /></div>
          <div className="contact-info-body">
            <span className="contact-card-label">PHONE NUMBER</span>
            <a href={`tel:${personalInfo.phone}`} className="contact-card-value">
              {personalInfo.phone}
            </a>
          </div>
          <button
            className="contact-copy-btn"
            onClick={() => onCopy(personalInfo.phone, 'Phone number')}
            title="Copy Phone"
          >
            Copy
          </button>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon"><LinkedInIcon /></div>
          <div className="contact-info-body">
            <span className="contact-card-label">LINKEDIN PROFILE</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-value"
            >
              linkedin.com/in/prajwallgouda
            </a>
          </div>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-copy-btn"
          >
            Visit &rarr;
          </a>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon"><LocationIcon /></div>
          <div className="contact-info-body">
            <span className="contact-card-label">CURRENT LOCATION</span>
            <span className="contact-card-value">{personalInfo.location}</span>
          </div>
          <span className="contact-location-status">Available</span>
        </div>
      </div>

      <div className="contact-buttons-row">
        <a className="button button-light" href={`mailto:${personalInfo.email}?subject=Job%20Opportunity%20-%20Prajwal%20Gouda`}>
          Send Direct Email <ArrowIcon diagonal />
        </a>
        <button className="button button-secondary" onClick={onOpenResume}>
          View Complete Resume
        </button>
      </div>

      <span className="contact-spark" aria-hidden="true">&lowast;</span>
    </section>
  )
}
