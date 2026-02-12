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
          <div className="patients__header-image-wrap">
            <img
              src="https://placehold.co/480x320/e8eef4/9ca3af?text=For+Patients"
              alt=""
              className="patients__header-image"
            />
          </div>
        </div>
      </section>

      <div className="patients__container">
        {/* 1) How telemonitoring works */}
        <section className="patients__section" aria-labelledby="patients-how-heading">
          <h2 id="patients-how-heading" className="patients__section-title">How Telemonitoring Works</h2>
          <p className="patients__section-lead">It’s simple. Here’s what happens:</p>
          <ul className="patients__list">
            <li>You receive easy-to-use monitoring equipment (for example, a blood pressure device).</li>
            <li>You take readings at home.</li>
            <li>Our clinical team reviews them securely.</li>
            <li>If something changes, we contact you and coordinate with your doctor when needed.</li>
          </ul>
          <p className="patients__section-text">It’s not complicated — and support is always available when you need it.</p>
        </section>

        {/* 2) Who this program is for */}
        <section className="patients__section" aria-labelledby="patients-who-heading">
          <h2 id="patients-who-heading" className="patients__section-title">Who This Program Is For</h2>
          <p className="patients__section-text">This may be right for you if:</p>
          <ul className="patients__list patients__list--bullets">
            <li>You have CHF (congestive heart failure)</li>
            <li>You have COPD</li>
            <li>You have diabetes</li>
            <li>You have high blood pressure</li>
            <li>You recently left the hospital</li>
            <li>You have multiple chronic conditions</li>
            <li>You face medication management challenges</li>
          </ul>
        </section>

        {/* 3) What support you'll receive */}
        <section className="patients__section" aria-labelledby="patients-support-heading">
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
        </section>

        {/* 4) Bilingual care */}
        <section className="patients__section patients__section--highlight" aria-labelledby="patients-bilingual-heading">
          <h2 id="patients-bilingual-heading" className="patients__section-title">Bilingual Care (English & Spanish)</h2>
          <p className="patients__section-text">We offer support in English and Spanish. Our team can help you understand instructions, medications, and care plans in the language you’re most comfortable with. You’ll work with a real clinical team — not a call center.</p>
        </section>

        {/* 5) Benefits for patients */}
        <section className="patients__section" aria-labelledby="patients-benefits-heading">
          <h2 id="patients-benefits-heading" className="patients__section-title">Benefits for Patients</h2>
          <ul className="patients__list patients__list--benefits">
            <li>Peace of mind between appointments</li>
            <li>Faster response when readings change</li>
            <li>Support staying on track with your health goals</li>
            <li>May help reduce preventable ER visits and readmissions</li>
            <li>Safer recovery after discharge</li>
          </ul>
        </section>

        {/* 6) What to expect after your doctor refers you */}
        <section className="patients__section" aria-labelledby="patients-expect-heading">
          <h2 id="patients-expect-heading" className="patients__section-title">What to Expect After Your Doctor Refers You</h2>
          <ol className="patients__steps">
            <li className="patients__step">
              <span className="patients__step-num">Step 1</span>
              <span className="patients__step-text">Your doctor sends a referral.</span>
            </li>
            <li className="patients__step">
              <span className="patients__step-num">Step 2</span>
              <span className="patients__step-text">We contact you within 24–48 hours.</span>
            </li>
            <li className="patients__step">
              <span className="patients__step-num">Step 3</span>
              <span className="patients__step-text">Equipment delivery/setup and a quick training.</span>
            </li>
            <li className="patients__step">
              <span className="patients__step-num">Step 4</span>
              <span className="patients__step-text">Monitoring begins with ongoing support.</span>
            </li>
          </ol>
        </section>

        {/* 7) Final reassurance + CTA */}
        <section className="patients__section patients__section--cta" aria-labelledby="patients-cta-heading">
          <h2 id="patients-cta-heading" className="patients__section-title">You’re Not Doing This Alone</h2>
          <p className="patients__section-text">Our team is here to support you between visits, keep you connected to your care plan, and respond when your numbers change. Whether you’re managing a chronic condition or recovering from a hospital stay, we’re with you every step of the way.</p>
          <div className="patients__cta-wrap">
            <Link to="/resources" className="patients__cta-button">Ask Your Doctor About Telemonitoring</Link>
            <p className="patients__cta-note">If you’re a patient or caregiver interested in telemonitoring, enrollment typically starts with a physician referral. Ask your doctor if this program is right for you, or contact our team to learn more.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
