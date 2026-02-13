import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <main className="home">
      <section className="home__hero" aria-label="Hero">
        <div className="hero-overlay">
          <div className="hero-overlay__content">
            <h1 className="hero-overlay__header">Statewide Texas Telemonitoring Services with Ongoing Skilled Nursing Oversight and Bilingual Patient Support.</h1>
            <p className="hero-overlay__subheader">Continuous remote patient monitoring backed by licensed nurses, early intervention, and physician-aligned escalation.</p>
          </div>
          <Link to="/about" className="hero-overlay__cta">Learn More</Link>
        </div>
      </section>

      <section className="home__section home__section--audience" aria-label="Get started">
        <div className="home__cards home__cards--audience">
          <Link to="/for-physicians" className="home__card home__card--audience">
            <div className="home__card-image-wrap">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" alt="" className="home__card-image" />
            </div>
            <h3 className="home__card-title">For physicians</h3>
            <span className="home__card-cta">Explore opportunities <span className="home__card-chevron" aria-hidden>→</span></span>
          </Link>
          <Link to="/for-patients" className="home__card home__card--audience">
            <div className="home__card-image-wrap">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" alt="" className="home__card-image" />
            </div>
            <h3 className="home__card-title">For patients</h3>
            <span className="home__card-cta">See our care in action <span className="home__card-chevron" aria-hidden>→</span></span>
          </Link>
        </div>
      </section>

      <section className="home__section home__section--quote" aria-label="Quote">
        <blockquote className="home__quote">
          <p className="home__quote-text">
            <span className="neu-text--heavy neu-text--hca-healthcare-orange" aria-hidden>"</span>Telemonitoring services with UMED is a very important part of our practice.
            Patient feedback is always positive, reports are always on time and the
            nurses are always available for our staff. Continuing to work with them is a long-term plan.<span className="neu-text--heavy neu-text--hca-healthcare-orange" aria-hidden>"</span>
          </p>
          <footer className="home__quote-attribution">
            <div className="home__quote-name-row">
              <span className="home__quote-stars" aria-hidden>★★★★★</span>
              <cite className="home__quote-name">Dr. D</cite>
            </div>
            <span className="home__quote-title">Brownsville, TX</span>
          </footer>
        </blockquote>

      </section>

      <section className="home__section home__section--how-it-works" aria-label="How it works">
        <div className="home__how-content">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="home__how-image"
          />
          <div className="home__how-gradient" aria-hidden />
          <header className="home__how-header">
            <h2 className="home__how-title">How It Works</h2>
            <p className="home__how-description">
              
            </p>
          </header>
          <div className="home__how-cards">
            <div className="home__how-card-wrapper">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <div className="home__how-card">
                <span className="home__how-card-step">Step 1</span>
                <h3 className="home__how-card-title">Initial Setup & Training</h3>
                <p className="home__how-card-text">We begin by installing telemonitoring equipment in your home and providing comprehensive training on its use, ensuring you feel confident and comfortable with the technology.</p>
              </div>
            </div>
            <div className="home__how-card-wrapper">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <div className="home__how-card">
                <span className="home__how-card-step">Step 2</span>
                <h3 className="home__how-card-title">Daily Monitoring</h3>
                <p className="home__how-card-text">The system automatically records vital health data, such as blood pressure, heart rate, and oxygen levels, which is then securely transmitted to our health care team.</p>
              </div>
            </div>
            <div className="home__how-card-wrapper">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <div className="home__how-card">
                <span className="home__how-card-step">Step 3</span>
                <h3 className="home__how-card-title">Real-Time Alerts & Response</h3>
                <p className="home__how-card-text">Any readings that fall outside of predetermined safe ranges trigger immediate alerts to our team, allowing for swift response and intervention if necessary.</p>
              </div>
            </div>
            <div className="home__how-card-wrapper">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <div className="home__how-card">
                <span className="home__how-card-step">Step 4</span>
                <h3 className="home__how-card-title">Regular Health Reviews</h3>
                <p className="home__how-card-text">Our healthcare professionals regularly review your health data, providing feedback, adjusting care plans, and coordinating with your primary care providers as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home__section home__section--faq" aria-label="Frequently asked questions">
        <div className="home__faq-layout">
          <div className="home__faq-image-wrap">
            <img src="/FAQ-Section.png" alt="" className="home__faq-image" />
            <div className="home__faq-image-gradient" aria-hidden />
          </div>
          <div className="home__faq-inner">
            <div className="home__faq-title-wrap">
              <h2 className="home__faq-title">Frequently Asked Questions</h2>
            </div>
            <dl className="home__faq-list">
            <div className="home__faq-item">
              <dt className="home__faq-question">
                <span>What is telemonitoring?</span>
              </dt>
              <dd className="home__faq-answer">
                Telemonitoring is remote patient monitoring that lets our care team track your vital signs (such as blood pressure, heart rate, and oxygen levels) from your home. Data is sent securely so we can spot changes early and coordinate with your doctor when needed.
              </dd>
            </div>
            <div className="home__faq-item">
              <dt className="home__faq-question">
                <span>Is the equipment difficult to use?</span>
              </dt>
              <dd className="home__faq-answer">
                No. We install the equipment in your home and train you (and any family or caregivers) on how to use it. Our team is available to answer questions and help you feel comfortable with the technology.
              </dd>
            </div>
            <div className="home__faq-item">
              <dt className="home__faq-question">
                <span>Who has access to my health data?</span>
              </dt>
              <dd className="home__faq-answer">
                Your data is used only by our licensed nursing and clinical team and is shared with your physician as part of your care plan. We follow strict privacy and security standards to protect your information.
              </dd>
            </div>
            <div className="home__faq-item">
              <dt className="home__faq-question">
                <span>What if I need help in Spanish?</span>
              </dt>
              <dd className="home__faq-answer">
                We offer bilingual patient support so you can get help in English or Spanish. Our nurses and staff can assist you in the language you prefer.
              </dd>
            </div>
            <div className="home__faq-item">
              <dt className="home__faq-question">
                <span>How do I get started?</span>
              </dt>
              <dd className="home__faq-answer">
                Talk to your doctor about whether telemonitoring is right for you. If they refer you to our program, we will coordinate setup, equipment delivery, and training. You can also contact us directly to learn more about our Texas-wide services.
              </dd>
            </div>
          </dl>
            <p className="home__faq-contact">
              Have a different question? <a href="/contact" className="home__faq-contact-link">Contact us</a>
            </p>
          </div>
        </div>
        <div className="home__faq-bottom-gradient" aria-hidden />
      </section>

    </main>
  )
}
