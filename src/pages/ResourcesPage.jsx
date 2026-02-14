import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ResourcesPage.css'

const CATEGORIES = [
  'Getting Started',
  'Benefits & Evidence',
  'Blood Pressure & Hypertension',
  'Telehealth Basics',
]

const RESOURCES = [
  {
    category: 'Getting Started',
    title: 'Introduction to telehealth and remote patient monitoring',
    source: 'Telehealth.HHS.gov',
    summary: 'Explain what RPM is and how patients share health data from home.',
    link: 'https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring',
  },
  {
    category: 'Getting Started',
    title: 'What is remote patient monitoring? (Getting started)',
    source: 'Telehealth.HHS.gov',
    summary: 'Simple explanation of how RPM devices collect and send data for care teams to review.',
    link: 'https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/getting-started',
  },
  {
    category: 'Telehealth Basics',
    title: 'Telehealth: Technology meets health care',
    source: 'Mayo Clinic',
    summary: 'Overview of telehealth, including remote monitoring and how it supports care outside the clinic.',
    link: 'https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/telehealth/art-20044878',
  },
  {
    category: 'Benefits & Evidence',
    title: 'The Impact of Telemedicine and Remote Patient Monitoring on Healthcare Delivery',
    source: 'PubMed Central (PMC)',
    summary: 'Research overview describing benefits like improved outcomes and patient satisfaction.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10993086/',
  },
  {
    category: 'Blood Pressure & Hypertension',
    title: 'Remote Cardiovascular Hypertension Program Enhanced Blood Pressure Control',
    source: 'American Heart Association Journals (JAHA)',
    summary: 'Study showing remote management programs can improve blood pressure control.',
    link: 'https://www.ahajournals.org/doi/10.1161/JAHA.122.027296',
  },
  {
    category: 'Blood Pressure & Hypertension',
    title: 'Remote monitoring and pharmacist helped improve hard-to-control blood pressure',
    source: 'American Heart Association Newsroom',
    summary: 'News summary about remote BP monitoring programs improving BP outcomes.',
    link: 'https://newsroom.heart.org/news/remote-monitoring-and-pharmacist-helped-improve-hard-to-control-blood-pressure',
  },
]

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredResources =
    activeFilter === 'All'
      ? RESOURCES
      : RESOURCES.filter((r) => r.category === activeFilter)

  return (
    <main className="resources">
      <section className="resources__header" aria-labelledby="resources-title">
        <div className="resources__header-inner">
          <div className="resources__header-content">
            <nav className="resources__breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="resources__breadcrumb-link">
                <svg className="resources__breadcrumb-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>UMED Medical</span>
              </Link>
              <span className="resources__breadcrumb-sep" aria-hidden>/</span>
              <span className="resources__breadcrumb-current">Resources</span>
            </nav>

            <h1 id="resources-title" className="resources__title">Resources</h1>

            <p className="resources__intro">
              Curated articles and guides on telehealth and remote monitoring—whether you're a patient learning the basics or a provider looking for evidence. Browse by topic or get in touch with questions.
            </p>
          </div>
        </div>
      </section>

      <div className="resources__container">
        <section className="resources__section" aria-labelledby="resources-filter-label">
          <h2 id="resources-filter-label" className="visually-hidden">Filter by category</h2>
          <div className="resources__filters" role="group" aria-label="Category filter">
            <button
              type="button"
              className={`resources__chip ${activeFilter === 'All' ? 'resources__chip--active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`resources__chip ${activeFilter === cat ? 'resources__chip--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="resources__cards">
            {filteredResources.map((resource) => (
              <article key={resource.link} className="resources__card">
                <h3 className="resources__card-title">{resource.title}</h3>
                <p className="resources__card-source">{resource.source}</p>
                <p className="resources__card-summary">{resource.summary}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resources__card-link"
                >
                  Read More
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
