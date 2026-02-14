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
        <a href="/" className="footer__brand" aria-label="UMed Medical home">
          <img src="/logo.png" alt="" className="footer__logo" />
        </a>
        <nav className="footer__links">
          <a href="#hipaa-notice">HIPAA Notice</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-of-use">Terms of Use</a>
          <a href="#medical-disclaimer">Medical Disclaimer</a>
        </nav>
        <p className="footer__copyright">
          © {currentYear} UMED Medical. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
