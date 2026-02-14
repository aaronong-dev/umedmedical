import { useState, useRef, useEffect } from 'react'
import './TopInfoBar.css'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
]

export default function TopInfoBar() {
  const [language, setLanguage] = useState(LANGUAGES[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className="top-info-bar">
      <div className="top-info-bar__content">
        <div className="top-info-bar__right">
          <div className="top-info-bar__translate" ref={dropdownRef}>
            <button
              type="button"
              className="top-info-bar__translate-btn"
              onClick={() => setDropdownOpen((o) => !o)}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
              id="translate-button"
            >
              <span className="top-info-bar__translate-label">{language.label}</span>
              <span className="top-info-bar__translate-arrow" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            {dropdownOpen && (
              <ul
                className="top-info-bar__translate-dropdown"
                role="listbox"
                aria-labelledby="translate-button"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang.code} role="option" aria-selected={language.code === lang.code}>
                    <button
                      type="button"
                      className={`top-info-bar__translate-option ${language.code === lang.code ? 'top-info-bar__translate-option--selected' : ''}`}
                      onClick={() => {
                        setLanguage(lang)
                        setDropdownOpen(false)
                      }}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
