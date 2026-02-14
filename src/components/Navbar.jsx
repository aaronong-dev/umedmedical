import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand" aria-label="UMed Medical home">
        <img src="/logo.png" alt="" className="navbar__logo" />
      </Link>
      <nav className="navbar__nav">
        <Link to="/about" className="navbar__link">About</Link>
        <Link to="/for-physicians" className="navbar__link">For Physicians</Link>
        <Link to="/for-patients" className="navbar__link">For Patients</Link>
        <Link to="/resources" className="navbar__link">Resources</Link>
      </nav>
      <a href="#refer" className="navbar__cta">Refer a patient</a>
    </header>
  )
}
