import { Link } from 'react-router-dom'
import './ForPatientsPage.css'

export default function ForPatientsPage() {
  return (
    <main className="patients">
      <section className="patients__header" aria-labelledby="patients-title">
        <div className="patients__header-inner">
          <div className="patients__header-content">
            <nav className="patients__breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="patients__breadcrumb-link">
                <svg className="patients__breadcrumb-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>UMED Medical</span>
              </Link>
              <span className="patients__breadcrumb-sep" aria-hidden>/</span>
              <span className="patients__breadcrumb-current">For Patients</span>
            </nav>

            <h1 id="patients-title" className="patients__title">Care That Follows You Home</h1>

            <p className="patients__intro">
              UMED Medical’s telemonitoring program keeps you connected to your care team between office visits. We help you manage chronic conditions with regular check-ins, remote monitoring, and timely support — so you can stay on track with your health goals and get help when you need it.
            </p>
          </div>
        </div>
      </section>

      <div className="patients__container">
        {/* 1) How telemonitoring works */}
        <section className="patients__section" aria-labelledby="patients-how-heading">
          <div className="patients__how-box">
            <div className="patients__how-image-wrap">
              <img
                src="/telemonitoring.jpg"
                alt=""
                className="patients__how-image"
              />
            </div>
            <div className="patients__how-content">
              <h2 id="patients-how-heading" className="patients__section-title">How Telemonitoring Works</h2>
          <p className="patients__section-lead">It’s simple. Here’s what happens:</p>
          <ul className="patients__list">
            <li>You receive easy-to-use monitoring equipment (for example, a blood pressure device).</li>
            <li>You take readings at home.</li>
            <li>Our clinical team reviews them securely.</li>
            <li>If something changes, we contact you and coordinate with your doctor when needed.</li>
          </ul>
          <p className="patients__section-text">It’s not complicated — and support is always available when you need it.</p>
            </div>
          </div>
        </section>

        {/* 2) Who this program is for - same cards as Ideal Referral Profiles (For Physicians) */}
        <section className="patients__section patients__section--who-cards" aria-labelledby="patients-who-heading">
          <h2 id="patients-who-heading" className="patients__section-title">Who This Program Is For</h2>
          <p className="patients__section-text">This may be right for you if:</p>
          <div className="patients__referral-cards">
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/chf.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Congestive Heart Failure</span>
            </div>
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/copd.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Chronic Obstructive Pulmonary Disease</span>
            </div>
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/diabetes.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Diabetes</span>
            </div>
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/hypertension.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Hypertension</span>
            </div>
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/post-hospital.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Post-hospital discharge</span>
            </div>
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/chronic.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Multiple chronic conditions</span>
            </div>
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/frequent-er.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Frequent ER utilizers</span>
            </div>
            <div className="patients__referral-card">
              <span className="patients__referral-card-icon" aria-hidden>
                <img src="/icons/management.png" alt="" />
              </span>
              <span className="patients__referral-card-label">Medication management challenges</span>
            </div>
          </div>
        </section>

        {/* 3) What support you'll receive */}
        <section className="patients__section" aria-labelledby="patients-support-heading">
          <div className="patients__support-wrap">
            <div className="patients__support-box">
              <h2 id="patients-support-heading" className="patients__section-title">What Support You’ll Receive</h2>
              <p className="patients__section-lead">You’re not just sending numbers.</p>
              <p className="patients__section-text">Our licensed nursing team provides real support:</p>
              <ul className="patients__list">
                <li>Reviews your readings regularly</li>
                <li>Calls when something looks concerning</li>
                <li>Helps you understand your care plan</li>
                <li>Encourages medication and care plan follow-through</li>
                <li>Communicates with your physician when needed</li>
              </ul>
            </div>
            <div className="patients__support-image-wrap">
              <img
                src="/support-receive.jpg"
                alt="Healthcare professional on a support call"
                className="patients__support-image"
              />
            </div>
          </div>
        </section>

        {/* 4) Bilingual care */}
        <section className="patients__section patients__section--highlight" aria-labelledby="patients-bilingual-heading">
          <h2 id="patients-bilingual-heading" className="patients__section-title">Bilingual Care</h2>
          <p className="patients__section-text">We offer support in English and Spanish. Our team can help you understand instructions, medications, and care plans in the language you’re most comfortable with. You’ll work with a real clinical team — not a call center.</p>
        </section>

        <div className="patients__white-wrap">
          {/* 5) Benefits for patients */}
          <section className="patients__section patients__section--benefits" aria-labelledby="patients-benefits-heading">
            <h2 id="patients-benefits-heading" className="patients__section-title">Benefits for Patients</h2>
            <p className="patients__section-text">
              Our telemonitoring program gives you peace of mind between appointments. When your readings change, our team can respond quickly — so you get support when it matters, not only at your next visit. We help you stay on track with your health goals through regular check-ins and clear guidance.
            </p>
            <p className="patients__section-text">
              For many patients, this kind of support may help reduce preventable ER visits and readmissions. After a hospital stay, having a nurse in your corner as you recover at home can make your recovery safer and more confident.
            </p>
          </section>

          {/* 6) What to expect after your doctor refers you - timeline */}
          <section className="patients__section patients__section--expect" aria-labelledby="patients-expect-heading">
          <h2 id="patients-expect-heading" className="patients__section-title">What to Expect After Your Doctor Refers You</h2>
          <ol className="patients__timeline" aria-label="Referral process steps">
            <li className="patients__timeline-item">
              <span className="patients__timeline-marker" aria-hidden>1</span>
              <div className="patients__timeline-content">
                <span className="patients__timeline-label">Step 1</span>
                <p className="patients__timeline-text">Your doctor sends a referral.</p>
              </div>
            </li>
            <li className="patients__timeline-item">
              <span className="patients__timeline-marker" aria-hidden>2</span>
              <div className="patients__timeline-content">
                <span className="patients__timeline-label">Step 2</span>
                <p className="patients__timeline-text">We contact you within 24–48 hours.</p>
              </div>
            </li>
            <li className="patients__timeline-item">
              <span className="patients__timeline-marker" aria-hidden>3</span>
              <div className="patients__timeline-content">
                <span className="patients__timeline-label">Step 3</span>
                <p className="patients__timeline-text">Equipment delivery/setup and a quick training.</p>
              </div>
            </li>
            <li className="patients__timeline-item">
              <span className="patients__timeline-marker" aria-hidden>4</span>
              <div className="patients__timeline-content">
                <span className="patients__timeline-label">Step 4</span>
                <p className="patients__timeline-text">Monitoring begins with ongoing support.</p>
              </div>
            </li>
          </ol>
          <div className="patients__expect-wave-wrap">
            <div className="patients__expect-wave" aria-hidden="true">
              <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24c120 0 240-24 360-24s240 24 360 24 240-24 360-24 240 24 360 24v24H0V24z" fill="currentColor" />
              </svg>
            </div>
          </div>
          </section>
        </div>

        {/* 7) Final CTA */}
        <section className="patients__section patients__section--cta" aria-labelledby="patients-cta-heading">
          <h2 id="patients-cta-heading" className="patients__section-title">You’re Not Doing This Alone</h2>
          <p className="patients__cta-copy">We’re here to support you between visits and keep you connected to your care.</p>
          <Link to="/resources" className="patients__cta-button">Ask Your Doctor About Telemonitoring</Link>
        </section>
      </div>
    </main>
  )
}
