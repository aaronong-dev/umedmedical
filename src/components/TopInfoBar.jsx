import './TopInfoBar.css'

export default function TopInfoBar() {
  return (
    <div className="top-info-bar">
      <div className="top-info-bar__content">
        <span className="top-info-bar__text">
          Trusted by physicians nationwide • 24/7 support
        </span>
        <a href="tel:+18001234567" className="top-info-bar__link">1-800-123-4567</a>
      </div>
    </div>
  )
}
