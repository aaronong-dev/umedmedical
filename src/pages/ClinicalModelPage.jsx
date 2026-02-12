import { Link } from 'react-router-dom'
import './ClinicalModelPage.css'

export default function ClinicalModelPage() {
  return (
    <main className="clinical-model">
      <section className="clinical-model__header" aria-labelledby="clinical-model-title">
        <div className="clinical-model__header-inner">
          <div className="clinical-model__header-content">
            <nav className="clinical-model__breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="clinical-model__breadcrumb-link">
                <svg className="clinical-model__breadcrumb-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>UMED Medical</span>
              </Link>
              <span className="clinical-model__breadcrumb-sep" aria-hidden>/</span>
              <span className="clinical-model__breadcrumb-current">Clinical Model</span>
            </nav>

            <h1 id="clinical-model-title" className="clinical-model__title">Our Clinical Model</h1>

            <p className="clinical-model__intro">
              UMED Medical’s telemonitoring program is built on structured clinical oversight — not just device alerts. Licensed nursing professionals evaluate trends, engage patients, and escalate to physicians when it matters, so care stays coordinated and patients stay stable at home.
            </p>
          </div>
          <div className="clinical-model__header-image-wrap">
            <img
              src="https://placehold.co/480x320/e8eef4/9ca3af?text=Clinical+Model"
              alt=""
              className="clinical-model__header-image"
            />
          </div>
        </div>
      </section>

      <div className="clinical-model__container">
        {/* Core Framework (Quick Overview) */}
        <section className="clinical-model__section" aria-labelledby="core-framework-heading">
          <h2 id="core-framework-heading" className="clinical-model__section-title">Core Framework</h2>
          <div className="clinical-model__blocks">
            <div className="clinical-model__block">
              <div className="clinical-model__block-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="clinical-model__block-title">Continuous Remote Monitoring</h3>
              <p className="clinical-model__block-desc">Patient vital signs and symptoms are collected and reviewed daily. Data flows into a structured workflow so nothing falls through the cracks.</p>
            </div>
            <div className="clinical-model__block">
              <div className="clinical-model__block-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="clinical-model__block-title">Licensed Nursing Review</h3>
              <p className="clinical-model__block-desc">Clinical staff with appropriate licensure evaluate patient data and make judgment calls — not algorithms alone.</p>
            </div>
            <div className="clinical-model__block">
              <div className="clinical-model__block-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="clinical-model__block-title">Trend-Based Evaluation</h3>
              <p className="clinical-model__block-desc">We focus on patterns over time rather than single readings. Trends inform outreach and escalation decisions.</p>
            </div>
            <div className="clinical-model__block">
              <div className="clinical-model__block-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                </svg>
              </div>
              <h3 className="clinical-model__block-title">Protocol-Driven Escalation</h3>
              <p className="clinical-model__block-desc">Clear criteria guide when to contact patients, adjust coaching, or escalate to the ordering provider.</p>
            </div>
          </div>
        </section>

        {/* Nursing Oversight & Trend Monitoring */}
        <section className="clinical-model__section" aria-labelledby="nursing-oversight-heading">
          <h2 id="nursing-oversight-heading" className="clinical-model__section-title">Nursing Oversight &amp; Trend Monitoring</h2>
          <ul className="clinical-model__bullets">
            <li>Daily review of patient data</li>
            <li>Evaluation of trends (not isolated readings)</li>
            <li>Patient outreach when clinically indicated</li>
            <li>Documentation of interactions</li>
          </ul>
          <p className="clinical-model__tagline">Monitoring is proactive and structured — not automated alert management.</p>
        </section>

        {/* Escalation & Physician Communication */}
        <section className="clinical-model__section clinical-model__section--card" aria-labelledby="escalation-heading">
          <h2 id="escalation-heading" className="clinical-model__section-title">Escalation &amp; Physician Communication</h2>
          <ul className="clinical-model__bullets">
            <li>Defined clinical thresholds</li>
            <li>Nursing triage before escalation</li>
            <li>Direct communication with ordering provider</li>
            <li>Documentation support</li>
            <li>Physician retains clinical decision authority</li>
          </ul>
        </section>

        {/* Patient Engagement Model */}
        <section className="clinical-model__section" aria-labelledby="patient-engagement-heading">
          <h2 id="patient-engagement-heading" className="clinical-model__section-title">Patient Engagement Model</h2>
          <ul className="clinical-model__bullets">
            <li>Compliance coaching</li>
            <li>Medication reinforcement</li>
            <li>Bilingual support (English &amp; Spanish)</li>
            <li>Follow-up for missed readings</li>
          </ul>
        </section>

        {/* Quality & Operational Alignment */}
        <section className="clinical-model__section" aria-labelledby="quality-heading">
          <h2 id="quality-heading" className="clinical-model__section-title">Quality &amp; Operational Alignment</h2>
          <ul className="clinical-model__bullets">
            <li>May support value-based care metrics</li>
            <li>Designed to reduce avoidable utilization</li>
            <li>Onboarding within 24–48 hours</li>
            <li>Statewide Texas coverage</li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <section className="clinical-model__section clinical-model__section--cta" aria-labelledby="clinical-cta-heading">
          <h2 id="clinical-cta-heading" className="clinical-model__cta-title">Extend your clinical reach between visits.</h2>
          <div className="clinical-model__cta-actions">
            <Link to="/for-physicians" className="clinical-model__cta-button">Refer a Patient</Link>
            <Link to="/for-physicians" className="clinical-model__cta-link">For Physicians</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
