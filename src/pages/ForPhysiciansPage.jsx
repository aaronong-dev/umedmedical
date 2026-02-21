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
                <span>AllMed Home Care</span>
              </Link>
              <span className="physicians__breadcrumb-sep" aria-hidden>/</span>
              <span className="physicians__breadcrumb-current">For Physicians</span>
            </nav>

            <h1 id="physicians-title" className="physicians__title">Partnering with Physicians</h1>

            <p className="physicians__intro">
              Partner with AllMed Home Care to extend your care beyond the clinic. Our telemonitoring program gives you visibility into high-risk patients while our nursing team handles day-to-day monitoring, patient outreach, and timely escalation — so you can focus on clinical decisions when they matter most.
            </p>
          </div>
          <div className="physicians__header-image-wrap">
            <img
              src="/physician3.png"
              alt="Physician in white coat with stethoscope in a medical office"
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
            Hospitalizations and acute events often occur between appointments when early signs of deterioration go unnoticed. Chronic disease patients require consistent oversight, but most practices lack the staffing/infrastructure for daily monitoring without adding administrative burden. AllMed Home Care bridges that gap.
          </p>
        </section>

        {/* 3) How We Support Your Practice */}
        <section className="physicians__section physicians__section--support" aria-labelledby="physicians-support-heading">
          <h2 id="physicians-support-heading" className="physicians__section-title">Designed to Reduce Workload. Not Add to It</h2>
          <p className="physicians__section-tagline">You retain clinical authority. We provide structured oversight.</p>
        </section>

        {/* 4) Skilled Nursing Monitoring – image left (outside container), white container right */}
        <div className="physicians__nursing-wrap">
          <div className="physicians__nursing-image-wrap">
            <img
              src="/monitoring.jpg"
              alt="Healthcare professional holding a medical monitoring device"
              className="physicians__nursing-image"
            />
          </div>
          <div className="physicians__nursing-container">
            <section className="physicians__section physicians__section--nursing" aria-labelledby="physicians-differentiator-heading">
              <h2 id="physicians-differentiator-heading" className="physicians__section-title">Skilled Nursing Monitoring</h2>
              <p className="physicians__section-copy">
                Many RPM programs rely on automated alerts or call centers. Our patients are monitored by licensed clinical staff who evaluate trends (not isolated readings), contact patients when changes occur, reinforce care plans, and escalate clinically significant findings to physicians via structured protocols.
              </p>
            </section>
          </div>
        </div>

        {/* 5) Conditions / Ideal Referrals */}
        <section className="physicians__section physicians__section--referrals" aria-labelledby="physicians-referrals-heading">
          <h2 id="physicians-referrals-heading" className="physicians__section-title">Ideal Referral Profiles</h2>
          <div className="physicians__referral-cards">
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/chf.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Congestive Heart Failure</span>
            </div>
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/copd.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Chronic Obstructive Pulmonary Disease</span>
            </div>
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/diabetes.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Diabetes</span>
            </div>
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/hypertension.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Hypertension</span>
            </div>
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/post-hospital.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Post-hospital discharge</span>
            </div>
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/chronic.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Multiple chronic conditions</span>
            </div>
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/frequent-er.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Frequent ER utilizers</span>
            </div>
            <div className="physicians__referral-card">
              <span className="physicians__referral-card-icon" aria-hidden>
                <img src="/icons/management.png" alt="" />
              </span>
              <span className="physicians__referral-card-label">Medication management challenges</span>
            </div>
          </div>
        </section>

        {/* Simple Referral Process */}
        <section className="physicians__section physicians__section--steps" aria-labelledby="physicians-steps-heading">
          <h2 id="physicians-steps-heading" className="physicians__section-title">Simple Referral Process</h2>
          <ol className="physicians__steps" aria-label="Referral process steps">
            <li className="physicians__step">
              <div className="physicians__step-icon-wrap">
                <span className="physicians__step-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M12 18v-6M9 15h6" />
                  </svg>
                </span>
                <span className="physicians__step-badge">1</span>
              </div>
              <h3 className="physicians__step-title">Send Referral Order</h3>
              <p className="physicians__step-desc">Submit your referral order through your preferred channel; we'll receive it and prepare for patient outreach.</p>
            </li>
            <span className="physicians__step-arrow" aria-hidden><svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></span>
            <li className="physicians__step">
              <div className="physicians__step-icon-wrap">
                <span className="physicians__step-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="physicians__step-badge">2</span>
              </div>
              <h3 className="physicians__step-title">Patient Contact &amp; Setup</h3>
              <p className="physicians__step-desc">Our team contacts the patient within 24–48 hours, enrolls them in the program, and arranges equipment and education.</p>
            </li>
            <span className="physicians__step-arrow" aria-hidden><svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></span>
            <li className="physicians__step">
              <div className="physicians__step-icon-wrap">
                <span className="physicians__step-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </span>
                <span className="physicians__step-badge">3</span>
              </div>
              <h3 className="physicians__step-title">Monitoring Begins</h3>
              <p className="physicians__step-desc">Skilled nursing oversight begins with ongoing monitoring, trend review, and escalation per protocol.</p>
            </li>
          </ol>
          <div className="physicians__steps-wave-wrap">
            <div className="physicians__steps-wave" aria-hidden="true">
              <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24c120 0 240-24 360-24s240 24 360 24 240-24 360-24 240 24 360 24v24H0V24z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
