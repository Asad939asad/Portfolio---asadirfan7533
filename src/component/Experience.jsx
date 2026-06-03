import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [e1Open, setE1Open] = useState(false);
  const [e2Open, setE2Open] = useState(false);

  return (
    <div className="services-section-container" id="experience">
      {/* Header aligned exactly like mockup */}
      <div className="services-section-header">
        <div className="services-section-header__left">
          <h2 className="services-section-header__heading">
            Experience<span className="asterisk-symbol">*</span>
          </h2>
        </div>
        <div className="services-section-header__right">
          <div className="rotating-seal-wrapper">
            <svg viewBox="0 0 100 100" width="120" height="120" className="rotating-seal">
              <path id="serviceCirclePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
              <text fill="#4b5563" fontSize="7.5" fontWeight="700" letterSpacing="1.75">
                <textPath href="#serviceCirclePath">
                  {"INTELLIGENCE \u2022 SCALABILITY \u2022 AUTOMATION \u2022 "}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="services-list">
        {/* Experience 1 */}
        <div className="service-row">
          <div className="service-row__trigger-bar" onClick={() => setE1Open(!e1Open)}>
            <div className="service-row__trigger-left">
              <span className="service-row__num">01</span>
              <h3 className="service-row__title">Aangan (NICAT) - AI/ML Intern</h3>
            </div>
            <button className="service-row__toggle-btn" aria-expanded={e1Open}>
              {e1Open ? '×' : '+'}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {e1Open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="service-row__expanded-content"
              >
                <div className="service-content-grid">
                  <div className="service-content-left">
                    <div className="scope-label">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="scope-icon">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <span>Jun 2025 - Jun 2026 | Islamabad, Pakistan</span>
                    </div>
                    <h4 className="service-subheading">
                      Brought the Aangan app to a live production environment by designing and deploying its core AI backend.
                    </h4>
                    <ul className="service-bullets">
                      <li className="service-bullet">Developed personalization pipelines and cloud microservices.</li>
                      <li className="service-bullet">Collaborated with cross-functional teams.</li>
                      <li className="service-bullet">Integrated real-time recommendation logic into the final product.</li>
                    </ul>
                  </div>

                  <div className="service-content-right">
                    <div className="expertise-card">
                      <span className="expertise-label">FOCUS</span>
                      <div className="expertise-chips">
                        <span className="expertise-chip">AI Backend</span>
                        <span className="expertise-chip">Microservices</span>
                        <span className="expertise-chip">Recommendations</span>
                        <span className="expertise-chip">Cloud</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Experience 2 */}
        <div className="service-row">
          <div className="service-row__trigger-bar" onClick={() => setE2Open(!e2Open)}>
            <div className="service-row__trigger-left">
              <span className="service-row__num">02</span>
              <h3 className="service-row__title">Itsolera - AI/ML Intern</h3>
            </div>
            <button className="service-row__toggle-btn" aria-expanded={e2Open}>
              {e2Open ? '×' : '+'}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {e2Open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="service-row__expanded-content"
              >
                <div className="service-content-grid">
                  <div className="service-content-left">
                    <div className="scope-label">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="scope-icon">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="4"/>
                      </svg>
                      <span>Jun 2025 - Aug 2025 | Islamabad, Pakistan</span>
                    </div>
                    <h4 className="service-subheading">
                      Worked with cross-functional teams to develop ML solutions for client projects.
                    </h4>
                    <ul className="service-bullets">
                      <li className="service-bullet">Contributed to building and evaluating models.</li>
                      <li className="service-bullet">Prepared datasets and deployed workflows.</li>
                      <li className="service-bullet">Worked across NLP, Computer Vision, and service-focused applications.</li>
                    </ul>
                  </div>

                  <div className="service-content-right">
                    <div className="expertise-card">
                      <span className="expertise-label">FOCUS</span>
                      <div className="expertise-chips">
                        <span className="expertise-chip">NLP</span>
                        <span className="expertise-chip">Computer Vision</span>
                        <span className="expertise-chip">Model Evaluation</span>
                        <span className="expertise-chip">ML Workflows</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
