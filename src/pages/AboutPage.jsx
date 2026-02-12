import { Link } from 'react-router-dom'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <main className="about">
      <section className="about__header" aria-labelledby="about-title">
        <div className="about__header-inner">
          <div className="about__header-content">
            <nav className="about__breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="about__breadcrumb-link">
                <svg className="about__breadcrumb-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>UMED Medical</span>
              </Link>
              <span className="about__breadcrumb-sep" aria-hidden>/</span>
              <span className="about__breadcrumb-current">About UMED Medical</span>
            </nav>

            <h1 id="about-title" className="about__title">About UMED Medical</h1>

            <p className="about__intro">
            Our telemonitoring program was built with one clear purpose — to keep high-risk patients stable at home through continuous, clinically guided monitoring. 
            We partner with physicians, clinics, hospital discharge planners, and 
            specialty providers across Texas to reduce preventable hospitalizations, 
            improve patient stability, and support value-based performance metrics — 
            without increasing workload for your staff.
            </p>
          </div>
          <div className="about__header-image-wrap">
            <img
              src="/about-image.png"
              alt=""
              className="about__header-image"
            />
          </div>
        </div>
      </section>

      <div className="about__container">
        <section className="about__mission" aria-label="Our mission">
          <p className="about__mission-text">
            Our mission is to extend physician care beyond the walls of the clinic through skilled nursing oversight, real-time clinical monitoring, and proactive patient engagement — we exist to:
          </p>
          <div className="about__mission-cards">
            <div className="about__mission-card">
              <p className="about__mission-card-text">Detect clinical deterioration early</p>
            </div>
            <div className="about__mission-card">
              <p className="about__mission-card-text">Reduce ER visits and readmissions</p>
            </div>
            <div className="about__mission-card">
              <p className="about__mission-card-text">Improve chronic disease management</p>
            </div>
            <div className="about__mission-card">
              <p className="about__mission-card-text">Strengthen patient compliance and engagement</p>
            </div>
          </div>
        </section>

        <section className="about__different" aria-labelledby="about-different-heading">
          <div className="about__different-image-wrap">
            <img
              src="/program.png"
              alt=""
              className="about__different-image"
            />
          </div>
          <div className="about__different-content">
            <h2 id="about-different-heading" className="about__different-title">What makes our program different</h2>
            <div className="about__different-description">
              <p>Many remote patient monitoring programs focus only on devices and automated alerts.</p>
              <p>We focus on clinical oversight.</p>
              <p>Our patients are monitored by licensed nursing professionals who:</p>
              <ul className="about__different-list">
                <li>Evaluate trends — not just numbers</li>
                <li>Contact patients when readings change</li>
                <li>Provide compliance coaching</li>
                <li>Escalate concerns directly to physicians when appropriate</li>
              </ul>
              <p>This is not a call center alert system.</p>
              <p>This is structured, clinically guided monitoring.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
