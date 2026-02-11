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
          <a href="/about" className="hero-overlay__cta">Learn More</a>
        </div>
      </section>

      <section className="home__section home__section--audience" aria-label="Get started">
        <div className="home__cards home__cards--audience">
          <a href="/patients" className="home__card home__card--audience">
            <div className="home__card-image-wrap">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" alt="" className="home__card-image" />
            </div>
            <h3 className="home__card-title">For patients</h3>
            <span className="home__card-cta">See our care in action <span className="home__card-chevron" aria-hidden>→</span></span>
          </a>
          <a href="/doctors" className="home__card home__card--audience">
            <div className="home__card-image-wrap">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" alt="" className="home__card-image" />
            </div>
            <h3 className="home__card-title">For physicians</h3>
            <span className="home__card-cta">Explore opportunities <span className="home__card-chevron" aria-hidden>→</span></span>
          </a>
        </div>
      </section>

      <section className="home__section home__section--quote" aria-label="Quote">
        <blockquote className="home__quote">
          <p className="home__quote-text">
            "Telemonitoring services with Umed is a very important part of our practice.
            Patient feedback is always positive, reports are always on time and the
            nurses are always available for our staff. Continuing to work with them is a long-term plan."
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
              Hello
            </p>
          </header>
          <div className="home__how-cards">
            <div className="home__how-card">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <span className="home__how-card-step">Step 1</span>
              <h3 className="home__how-card-title">Initial Setup & Training</h3>
              <p className="home__how-card-text">We begin by installing telemonitoring equipment in your home and providing comprehensive training on its use, ensuring you feel confident and comfortable with the technology.</p>
            </div>
            <div className="home__how-card">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <span className="home__how-card-step">Step 2</span>
              <h3 className="home__how-card-title">Daily Monitoring</h3>
              <p className="home__how-card-text">The system automatically records vital health data, such as blood pressure, heart rate, and oxygen levels, which is then securely transmitted to our health care team.</p>
            </div>
            <div className="home__how-card">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <span className="home__how-card-step">Step 3</span>
              <h3 className="home__how-card-title">Real-Time Alerts & Response</h3>
              <p className="home__how-card-text">Any readings that fall outside of predetermined safe ranges trigger immediate alerts to our team, allowing for swift response and intervention if necessary.</p>
            </div>
            <div className="home__how-card">
              <div className="home__how-card-image-wrap">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=120&q=80" alt="" className="home__how-card-image" />
              </div>
              <span className="home__how-card-step">Step 4</span>
              <h3 className="home__how-card-title">Regular Health Reviews</h3>
              <p className="home__how-card-text">Our healthcare professionals regularly review your health data, providing feedback, adjusting care plans, and coordinating with your primary care providers as needed.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
