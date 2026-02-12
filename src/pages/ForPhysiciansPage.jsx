import { Link } from 'react-router-dom'
import './ForPhysiciansPage.css'

export default function ForPhysiciansPage() {
  return (
    <main className="physicians">
      <section className="physicians__header" aria-labelledby="physicians-title">
        <div className="physicians__header-inner">
          <div className="physicians__header-content">
            <nav className="physicians__breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="physicians__breadcrumb-link">
                <svg className="physicians__breadcrumb-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>UMED Medical</span>
              </Link>
              <span className="physicians__breadcrumb-sep" aria-hidden>/</span>
              <span className="physicians__breadcrumb-current">For Physicians</span>
            </nav>

            <h1 id="physicians-title" className="physicians__title">Partnering with Physicians</h1>

            <p className="physicians__intro">
              Partner with UMED Medical to extend your care beyond the clinic. Our telemonitoring program gives you visibility into high-risk patients while our nursing team handles day-to-day monitoring, patient outreach, and timely escalation — so you can focus on clinical decisions when they matter most.
            </p>
          </div>
          <div className="physicians__header-image-wrap">
            <img
              src="https://placehold.co/480x320/e8eef4/9ca3af?text=For+Physicians"
              alt=""
              className="physicians__header-image"
            />
          </div>
        </div>
      </section>

      <div className="physicians__container">
        {/* 2) The Gap Between Visits */}
        <section className="physicians__section" aria-labelledby="physicians-gap-heading">
          <h2 id="physicians-gap-heading" className="physicians__section-title">The Gap Between Visits</h2>
          <p className="physicians__section-copy">
            Hospitalizations and acute events often occur between appointments when early signs of deterioration go unnoticed. Chronic disease patients require consistent oversight, but most practices lack the staffing/infrastructure for daily monitoring without adding administrative burden. UMED Medical bridges that gap.
          </p>
        </section>

        {/* 3) How We Support Your Practice */}
        <section className="physicians__section physicians__section--support" aria-labelledby="physicians-support-heading">
          <h2 id="physicians-support-heading" className="physicians__section-title">Designed to Reduce Workload — Not Add to It</h2>
          <ul className="physicians__bullets">
            <li>We manage patient onboarding, equipment logistics, device setup/training</li>
            <li>Daily monitoring, trend evaluation, compliance follow-ups</li>
            <li>Documentation support, escalation communication</li>
          </ul>
          <p className="physicians__section-tagline">You retain clinical authority. We provide structured oversight.</p>
        </section>

        {/* 4) Differentiator */}
        <section className="physicians__section" aria-labelledby="physicians-differentiator-heading">
          <h2 id="physicians-differentiator-heading" className="physicians__section-title">Skilled Nursing Monitoring — Not Just Device Alerts</h2>
          <p className="physicians__section-copy">
            Many RPM programs rely on automated alerts or call centers. Our patients are monitored by licensed clinical staff who evaluate trends (not isolated readings), contact patients when changes occur, reinforce care plans, and escalate clinically significant findings to physicians via structured protocols.
          </p>
        </section>

        {/* 5) Conditions / Ideal Referrals */}
        <section className="physicians__section physicians__section--referrals" aria-labelledby="physicians-referrals-heading">
          <h2 id="physicians-referrals-heading" className="physicians__section-title">Ideal Referral Profiles</h2>
          <ul className="physicians__bullets physicians__bullets--grid">
            <li>CHF</li>
            <li>COPD</li>
            <li>Diabetes</li>
            <li>Hypertension</li>
            <li>Post-hospital discharge</li>
            <li>Multiple chronic conditions</li>
            <li>Frequent ER utilizers</li>
            <li>Medication management challenges</li>
          </ul>
        </section>

        {/* 6) Communication & Escalation */}
        <section className="physicians__section" aria-labelledby="physicians-communication-heading">
          <h2 id="physicians-communication-heading" className="physicians__section-title">Clear Physician Communication</h2>
          <ul className="physicians__bullets">
            <li>Protocol-based escalation thresholds</li>
            <li>Direct notification to ordering provider</li>
            <li>Documentation available for medical records</li>
            <li>Trend reporting available (weekly/monthly or as requested)</li>
          </ul>
        </section>

        {/* 7) Value-Based / Practice Benefits */}
        <section className="physicians__section" aria-labelledby="physicians-value-heading">
          <h2 id="physicians-value-heading" className="physicians__section-title">Support Outcomes and Performance Metrics</h2>
          <p className="physicians__section-copy">
            Telemonitoring may support reimbursement opportunities depending on payer eligibility and program structure. We handle operational components so practice staff do not absorb additional workload. Supports quality metric performance, reduces readmissions, improves chronic disease stability.
          </p>
        </section>

        {/* 8) Simple Referral Process */}
        <section className="physicians__section physicians__section--steps" aria-labelledby="physicians-steps-heading">
          <h2 id="physicians-steps-heading" className="physicians__section-title">Simple Referral Process</h2>
          <ol className="physicians__steps">
            <li className="physicians__step">
              <span className="physicians__step-num" aria-hidden="true" />
              <span className="physicians__step-label">Send Referral Order</span>
            </li>
            <li className="physicians__step">
              <span className="physicians__step-num" aria-hidden="true" />
              <span className="physicians__step-label">Patient Contact &amp; Setup within 24–48 hours</span>
            </li>
            <li className="physicians__step">
              <span className="physicians__step-num" aria-hidden="true" />
              <span className="physicians__step-label">Monitoring Begins with ongoing skilled nursing oversight</span>
            </li>
          </ol>
        </section>

        {/* 9) Final CTA */}
        <section className="physicians__section physicians__section--cta" aria-labelledby="physicians-cta-heading">
          <h2 id="physicians-cta-heading" className="physicians__section-title">Extend Your Clinical Reach</h2>
          <p className="physicians__cta-copy">
            Protect patients between visits, reduce preventable hospitalizations, strengthen chronic disease management.
          </p>
          <a href="/contact" className="physicians__cta-button">Refer a Patient</a>
          <p className="physicians__cta-contact">Questions or referrals? <a href="/contact" className="physicians__cta-link">Contact us</a>.</p>
        </section>
      </div>
    </main>
  )
}
