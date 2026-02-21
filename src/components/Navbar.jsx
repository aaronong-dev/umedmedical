import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/for-physicians', label: 'For Physicians' },
  { to: '/for-patients', label: 'For Patients' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand" aria-label="AllMed Home Care home">
        <img src="/allmed-logo.png" alt="" className="navbar__logo" />
      </Link>

      <nav className="navbar__nav">
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} className="navbar__link">
            {label}
          </Link>
        ))}
      </nav>
      <a href="#refer" className="navbar__cta">
        Refer a patient
      </a>

      {/* Mobile: hamburger / close */}
      <button
        type="button"
        className={`navbar__toggle ${mobileMenuOpen ? 'navbar__toggle--open' : ''}`}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-close" aria-hidden>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </span>
      </button>

      {/* Mobile: dropdown under navbar */}
      <div
        className={`navbar__dropdown ${mobileMenuOpen ? 'navbar__dropdown--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="navbar__dropdown-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="navbar__dropdown-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{label}</span>
              <svg className="navbar__dropdown-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          ))}
          <a
            href="#refer"
            className="navbar__dropdown-link navbar__dropdown-link--cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Refer a patient</span>
            <svg className="navbar__dropdown-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
