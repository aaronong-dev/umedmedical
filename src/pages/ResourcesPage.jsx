import { Link } from 'react-router-dom'
import './ResourcesPage.css'

export default function ResourcesPage() {
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
              Find information for patients and physicians, learn about our clinical model, and get in touch. All in one place.
            </p>
          </div>
          <div className="resources__header-image-wrap">
            <img
              src="https://placehold.co/480x320/e8eef4/9ca3af?text=Resources"
              alt=""
              className="resources__header-image"
            />
          </div>
        </div>
      </section>

      <div className="resources__container">
        {/* 2) Clinical Insights */}
        <section className="resources__section" aria-labelledby="clinical-insights-heading">
          <h2 id="clinical-insights-heading" className="resources__section-title">Clinical Insights</h2>
          <div className="resources__cards">
            <article className="resources__card">
              <h3 className="resources__card-title">How Remote Monitoring Supports Chronic Disease Stability</h3>
              <p className="resources__card-summary">
                Remote patient monitoring allows clinicians to track vital signs and symptoms between office visits. When used as part of a care plan, it can help identify trends and support medication and lifestyle adjustments to promote stability.
              </p>
              <Link to="#" className="resources__card-link">Read More</Link>
            </article>
            <article className="resources__card">
              <h3 className="resources__card-title">Early Detection and Trend-Based Monitoring in CHF</h3>
              <p className="resources__card-summary">
                For heart failure patients, weight and symptom trends often precede acute events. Continuous monitoring and skilled review of trends can support earlier intervention and help reduce avoidable hospitalizations.
              </p>
              <Link to="#" className="resources__card-link">Read More</Link>
            </article>
            <article className="resources__card">
              <h3 className="resources__card-title">The Role of Skilled Nursing in Remote Patient Monitoring</h3>
              <p className="resources__card-summary">
                Licensed nurses can interpret device data in context, communicate with patients about readings, reinforce care plans, and escalate findings to physicians. This differs from automated alerts alone and can improve coordination of care.
              </p>
              <Link to="#" className="resources__card-link">Read More</Link>
            </article>
            <article className="resources__card">
              <h3 className="resources__card-title">Reducing Avoidable Readmissions Through Continuous Oversight</h3>
              <p className="resources__card-summary">
                Post-discharge monitoring can help catch early signs of deterioration and support medication adherence and follow-up. When combined with clear escalation pathways, it may contribute to lower readmission rates for at-risk patients.
              </p>
              <Link to="#" className="resources__card-link">Read More</Link>
            </article>
          </div>
        </section>

        {/* 3) Patient Education Materials */}
        <section className="resources__section" aria-labelledby="patient-education-heading">
          <h2 id="patient-education-heading" className="resources__section-title">Patient Education</h2>
          <div className="resources__pdf-grid">
            <div className="resources__pdf-card">
              <h3 className="resources__pdf-title">What Is Telemonitoring?</h3>
              <p className="resources__pdf-desc">A brief overview of how remote monitoring works and what to expect when you participate in a telemonitoring program.</p>
              <button type="button" className="resources__pdf-btn" disabled>Download PDF</button>
            </div>
            <div className="resources__pdf-card">
              <h3 className="resources__pdf-title">How to Use Your Blood Pressure Monitor</h3>
              <p className="resources__pdf-desc">Step-by-step instructions for taking accurate blood pressure readings at home and when to report results.</p>
              <button type="button" className="resources__pdf-btn" disabled>Download PDF</button>
            </div>
            <div className="resources__pdf-card">
              <h3 className="resources__pdf-title">Understanding High Blood Pressure Readings</h3>
              <p className="resources__pdf-desc">What your numbers mean, target ranges, and how to discuss readings with your care team.</p>
              <button type="button" className="resources__pdf-btn" disabled>Download PDF</button>
            </div>
            <div className="resources__pdf-card">
              <h3 className="resources__pdf-title">Managing Chronic Conditions at Home</h3>
              <p className="resources__pdf-desc">Practical tips for daily self-care, medication adherence, and when to seek help while living with chronic disease.</p>
              <button type="button" className="resources__pdf-btn" disabled>Download PDF</button>
            </div>
          </div>
        </section>

        {/* 4) Referral Materials */}
        <section className="resources__section resources__section--referral" aria-labelledby="referral-heading">
          <h2 id="referral-heading" className="resources__section-title">Referral Resources</h2>
          <p className="resources__section-copy">
            Physicians can download the materials below to simplify the referral process. Having the right forms and a brief program overview on hand helps streamline onboarding and ensures we receive the information needed to get patients started quickly.
          </p>
          <ul className="resources__referral-list">
            <li><span className="resources__referral-label">Referral Form (Download)</span> — Standard form for submitting a patient referral.</li>
            <li><span className="resources__referral-label">Program Overview One-Pager (Download)</span> — Summary of our remote monitoring program and eligibility.</li>
            <li><span className="resources__referral-label">Contact Information for Referrals</span> — How to reach our team for questions or to submit referrals.</li>
          </ul>
          <div className="resources__referral-buttons">
            <button type="button" className="resources__download-btn" disabled>Download Referral Form</button>
            <button type="button" className="resources__download-btn" disabled>Download One-Pager</button>
          </div>
        </section>

        {/* 5) FAQ */}
        <section className="resources__section" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="resources__section-title">Additional Questions</h2>
          <dl className="resources__faq">
            <div className="resources__faq-item">
              <dt className="resources__faq-q">Is telemonitoring covered by insurance?</dt>
              <dd className="resources__faq-a">Coverage for remote patient monitoring varies by plan and state. Many Medicare and commercial plans offer some level of coverage for RPM when certain conditions are met. We can help you understand your options; specific benefits depend on your individual plan.</dd>
            </div>
            <div className="resources__faq-item">
              <dt className="resources__faq-q">Does telemonitoring replace my doctor?</dt>
              <dd className="resources__faq-a">No. Telemonitoring supplements your regular care by giving your care team more information between visits. Your physician remains in charge of your treatment plan; monitoring helps them stay informed and respond when needed.</dd>
            </div>
            <div className="resources__faq-item">
              <dt className="resources__faq-q">How do I get the equipment?</dt>
              <dd className="resources__faq-a">Equipment logistics are typically handled by the monitoring program. You may receive devices by mail or in person, with setup and training provided so you know how to use them correctly. Your care team can explain the process for your situation.</dd>
            </div>
            <div className="resources__faq-item">
              <dt className="resources__faq-q">Is my data private and secure?</dt>
              <dd className="resources__faq-a">Yes. Patient data is transmitted and stored in accordance with HIPAA and other privacy regulations. Only authorized clinical staff and your care team have access to your monitoring information.</dd>
            </div>
            <div className="resources__faq-item">
              <dt className="resources__faq-q">Who is eligible for remote monitoring?</dt>
              <dd className="resources__faq-a">Eligibility depends on your diagnosis, insurance, and your physician’s assessment. Typically, patients with certain chronic conditions (e.g., heart failure, diabetes, hypertension) or recent hospital discharge may qualify. Your doctor can determine if it’s right for you.</dd>
            </div>
          </dl>
        </section>

        {/* 6) Evidence & Research */}
        <section className="resources__section resources__section--evidence" aria-labelledby="evidence-heading">
          <h2 id="evidence-heading" className="resources__section-title">Evidence & Research</h2>
          <p className="resources__section-copy">
            Remote patient monitoring has been studied in chronic disease management, including heart failure, diabetes, and hypertension. Research has explored its impact on outcomes such as hospitalizations, quality of life, and patient engagement. Evidence continues to evolve as programs and technology develop.
          </p>
          <div className="resources__citations">
            <div className="resources__citation-card">[Citation placeholder — peer-reviewed study]</div>
            <div className="resources__citation-card">[Citation placeholder — clinical guidelines]</div>
            <div className="resources__citation-card">[Citation placeholder — systematic review]</div>
          </div>
        </section>

        {/* 7) Final CTA */}
        <section className="resources__section resources__section--cta" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="resources__section-title">Ready to Learn More or Refer a Patient?</h2>
          <p className="resources__cta-copy">
            Partner with us to extend care beyond the clinic, or reach out with any questions.
          </p>
          <div className="resources__cta-actions">
            <Link to="/for-physicians" className="resources__cta-button">Refer a Patient</Link>
            <Link to="#" className="resources__cta-link">Contact Our Team</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
