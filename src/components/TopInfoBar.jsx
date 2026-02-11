import './TopInfoBar.css'

export default function TopInfoBar() {
  return (
    <div className="top-info-bar">
      <div className="top-info-bar__content">
        <div className="top-info-bar__right">
          <span className="top-info-bar__phone" aria-hidden>+1 (555) 123-4567</span>
          <form className="top-info-bar__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            className="top-info-bar__search-input"
            placeholder="Search..."
            aria-label="Search"
          />
          <button type="submit" className="top-info-bar__search-btn" aria-label="Submit search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}
