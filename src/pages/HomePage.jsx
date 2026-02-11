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

        <blockquote className="home__quote">
          <p className="home__quote-text">
            "One of my colleagues referred us to Yesenia with Medical Choice Home Health for Telemonitoring. They have been my patients’ choice for Telemonitoring and Home Health Services since 2020. 
            The staff here is great, Yesenia is always available and more than all my patients are very satisfied. 
            I highly recommend this agency and their nursing support staff."
          </p>
          <footer className="home__quote-attribution home__quote-attribution--left">
            <div className="home__quote-name-row">
              <cite className="home__quote-name">Dr. P</cite>
              <span className="home__quote-stars" aria-hidden>★★★★★</span>
            </div>
            <span className="home__quote-title">Brownsville, TX</span>
          </footer>
        </blockquote>
      </section>

    </main>
  )
}
