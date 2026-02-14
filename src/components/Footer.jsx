import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24c120 0 240-24 360-24s240 24 360 24 240-24 360-24 240 24 360 24v24H0V24z" fill="currentColor" />
        </svg>
      </div>
      <div className="footer__content">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <a href="/" className="footer__brand" aria-label="UMed Medical home">
              <img src="/logo.png" alt="" className="footer__logo" />
            </a>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <nav className="footer__nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/for-patients">For Patients</a>
              <a href="/for-physicians">For Physicians</a>
              <a href="/resources">Resources</a>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <address className="footer__contact">
              <p>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </p>
              <p>
                <a href="tel:+15559876543">(555) 987-6543</a>
              </p>
              <p>
                <a href="mailto:info@umedmedical.com">info@umedmedical.com</a>
              </p>
            </address>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Legal</h3>
            <nav className="footer__nav">
              <a href="#hipaa-notice">HIPAA Notice</a>
              <a href="#privacy-policy">Privacy Policy</a>
              <a href="#terms-of-use">Terms of Use</a>
              <a href="#medical-disclaimer">Medical Disclaimer</a>
            </nav>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} UMED Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
