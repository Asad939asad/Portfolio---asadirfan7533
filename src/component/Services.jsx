import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [s1Open, setS1Open] = useState(false);
  const [s2Open, setS2Open] = useState(false);
  const [s3Open, setS3Open] = useState(false);

  return (
    <div className="services-section-container" id="services">
      {/* Header aligned exactly like mockup */}
      <div className="services-section-header">
        <div className="services-section-header__left">
          <h2 className="services-section-header__heading">
            Services<span className="asterisk-symbol">*</span>
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

      {/* Services List */}
      <div className="services-list">
        {/* Service 1 */}
        <div className="service-row">
          <div className="service-row__trigger-bar" onClick={() => setS1Open(!s1Open)}>
            <div className="service-row__trigger-left">
              <span className="service-row__num">01</span>
              <h3 className="service-row__title">AI Integration & Agentic Workflows</h3>
            </div>
            <button className="service-row__toggle-btn" aria-expanded={s1Open}>
              {s1Open ? '×' : '+'}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {s1Open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="service-row__expanded-content"
              >
                <div className="service-content-grid">
                  {/* Left Column */}
                  <div className="service-content-left">
                    <div className="scope-label">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="scope-icon">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <span>SCOPE OF WORK</span>
                    </div>
                    <h4 className="service-subheading">
                      Engineering autonomous AI agents, multi-agent workflows, and intelligent tool integrations.
                    </h4>
                    <ul className="service-bullets">
                      <li className="service-bullet">Multi-agent orchestration via LangGraph</li>
                      <li className="service-bullet">Deep knowledge of LLM fine-tuning for edge cases</li>
                      <li className="service-bullet">Full-stack AI engineering with React & TypeScript</li>
                      <li className="service-bullet">Deployment of scalable agentic AI architectures</li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="service-content-right">
                    <div className="expertise-card">
                      <span className="expertise-label">EXPERTISE</span>
                      <div className="expertise-chips">
                        <span className="expertise-chip">Python</span>
                        <span className="expertise-chip">LangGraph</span>
                        <span className="expertise-chip">Fine-Tuning</span>
                        <span className="expertise-chip">TypeScript</span>
                        <span className="expertise-chip">React</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Service 2 */}
        <div className="service-row">
          <div className="service-row__trigger-bar" onClick={() => setS2Open(!s2Open)}>
            <div className="service-row__trigger-left">
              <span className="service-row__num">02</span>
              <h3 className="service-row__title">Full-Stack & Cloud Architecture</h3>
            </div>
            <button className="service-row__toggle-btn" aria-expanded={s2Open}>
              {s2Open ? '×' : '+'}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {s2Open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="service-row__expanded-content"
              >
                <div className="service-content-grid">
                  {/* Left Column */}
                  <div className="service-content-left">
                    <div className="scope-label">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="scope-icon">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="4"/>
                      </svg>
                      <span>SCOPE OF WORK</span>
                    </div>
                    <h4 className="service-subheading">
                      Designing highly scalable backend architectures, microservices, and responsive client applications.
                    </h4>
                    <ul className="service-bullets">
                      <li className="service-bullet">High-performance React & TypeScript frontends</li>
                      <li className="service-bullet">Robust REST API & microservice design</li>
                      <li className="service-bullet">Relational & distributed database architecture</li>
                      <li className="service-bullet">Secure cloud deployments & containerization</li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="service-content-right">
                    <div className="expertise-card">
                      <span className="expertise-label">EXPERTISE</span>
                      <div className="expertise-chips">
                        <span className="expertise-chip">React</span>
                        <span className="expertise-chip">TypeScript</span>
                        <span className="expertise-chip">Docker</span>
                        <span className="expertise-chip">AWS / Render</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Service 3 */}
        <div className="service-row">
          <div className="service-row__trigger-bar" onClick={() => setS3Open(!s3Open)}>
            <div className="service-row__trigger-left">
              <span className="service-row__num">03</span>
              <h3 className="service-row__title">Custom Machine Learning & RAG</h3>
            </div>
            <button className="service-row__toggle-btn" aria-expanded={s3Open}>
              {s3Open ? '×' : '+'}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {s3Open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="service-row__expanded-content"
              >
                <div className="service-content-grid">
                  {/* Left Column */}
                  <div className="service-content-left">
                    <div className="scope-label">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="scope-icon">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      <span>SCOPE OF WORK</span>
                    </div>
                    <h4 className="service-subheading">
                      Architecting end-to-end data pipelines, advanced semantic search engines, and highly specialized predictive models.
                    </h4>
                    <ul className="service-bullets">
                      <li className="service-bullet">Advanced Retrieval-Augmented Generation (RAG) with hybrid search</li>
                      <li className="service-bullet">Custom NLP model development and LLM prompt engineering</li>
                      <li className="service-bullet">End-to-end Computer Vision pipelines for image segmentation and processing</li>
                      <li className="service-bullet">Designing scalable reinforcement learning environments for complex agentic behavior</li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="service-content-right">
                    <div className="expertise-card">
                      <span className="expertise-label">EXPERTISE</span>
                      <div className="expertise-chips">
                        <span className="expertise-chip">PyTorch</span>
                        <span className="expertise-chip">Hugging Face</span>
                        <span className="expertise-chip">Jupyter</span>
                        <span className="expertise-chip">NLP</span>
                        <span className="expertise-chip">Computer Vision</span>
                        <span className="expertise-chip">LanceDB & Pinecone</span>
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