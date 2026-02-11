import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__brand" aria-label="UMed Medical home">
        <img src="/logo.png" alt="" className="navbar__logo" />
      </a>
      <nav className="navbar__nav">
        <a href="#about" className="navbar__link">About Us</a>
        <a href="#for-physicians" className="navbar__link">For Physicians</a>
        <a href="#how-it-works" className="navbar__link">How It Works</a>
        <a href="#services" className="navbar__link">Services</a>
        <a href="#resources" className="navbar__link">Resources</a>
      </nav>
      <a href="#refer" className="navbar__cta">Refer a patient</a>
    </header>
  )
}
