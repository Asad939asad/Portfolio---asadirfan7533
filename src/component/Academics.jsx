import React from 'react';
import { motion } from 'framer-motion';

export default function Academics() {
  return (
    <div className="academics-section-container" id="academics">
      {/* Header matching services & projects layout */}
      <div className="academics-section-header">
        <div className="academics-section-header__left">
          <h2 className="academics-section-header__heading">
            Academics<span className="asterisk-symbol">*</span>
          </h2>
        </div>
        <div className="academics-section-header__right">
          <p className="academics-section-header__subheading">
            A curated journey of formal education, peer-reviewed research, and technical certifications.
          </p>
        </div>
      </div>

      {/* 4-Column Bento Grid */}
      <div className="academics-grid">
        
        {/* Card 1: GIKI Card (Col span 3) */}
        <motion.div 
          className="academics-card academics-card--giki"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle Background Book Icon */}
          <div className="academics-card__bg-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>

          <div className="academics-card__top">
            {/* Alumnus Capsule Badge */}
            <div className="academics-badge academics-badge--alumnus">
              <svg className="badge-star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>ALUMNUS</span>
            </div>
            
            <h3 className="giki-title">GIKI</h3>
            <p className="giki-subtitle">
              Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
            </p>
          </div>

          <div className="academics-card__bottom">
            <div className="degree-info">
              <span className="info-label">DEGREE PROGRAM</span>
              <span className="info-value">Bachelor of Sciences in Artificial Intelligence</span>
            </div>
            
            {/* Dean's Honor List Pill Button */}
            <a 
              href="https://www.linkedin.com/in/malikasadirfan/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="deans-list-btn"
            >
              {/* Award / Medal outline icon */}
              <svg className="deans-list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span>DEAN'S HONOR LIST</span>
              <svg className="deans-list-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Card 2: 3rd Position Card (Col span 1) */}
        <motion.div 
          className="academics-card academics-card--distinction"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => window.open('https://www.linkedin.com/in/malikasadirfan/details/certifications/', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <div className="distinction-header">
            {/* Circular medal badge wrapper */}
            <div className="medal-circle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            
            {/* Top-Right Arrow */}
            <svg className="card-external-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>

          <div className="distinction-footer">
            <span className="info-label">ENGINEERING DISTINCTION</span>
            <h4 className="distinction-title">1st Position</h4>
            <p className="distinction-desc">FYP Industrial Expo @ GIKI 2026</p>
          </div>
        </motion.div>

        {/* Card 3: Research Paper Card (Col span 2) */}
        <motion.div 
          className="academics-card academics-card--paper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Subtle Faint Background Genetic Grid */}
          <div className="academics-card__bg-grid" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="20" cy="30" r="2" />
              <circle cx="50" cy="20" r="2.5" />
              <circle cx="80" cy="40" r="2" />
              <circle cx="35" cy="65" r="3" />
              <circle cx="65" cy="75" r="2.5" />
              <line x1="20" y1="30" x2="50" y2="20" />
              <line x1="50" y1="20" x2="80" y2="40" />
              <line x1="20" y1="30" x2="35" y2="65" />
              <line x1="35" y1="65" x2="65" y2="75" />
              <line x1="80" y1="40" x2="65" y2="75" />
              <line x1="50" y1="20" x2="35" y2="65" />
              <line x1="50" y1="20" x2="65" y2="75" />
            </svg>
          </div>

          <div className="paper-top">
            <div className="paper-badges">
              <div className="academics-badge academics-badge--published">
                WINNER
              </div>
              <span className="paper-year-tag">NetSol Hackathon 2025</span>
            </div>
            
            <h3 className="paper-title">
              NetSol Transcend AI Hackathon 2025
            </h3>
          </div>

          <div className="paper-bottom">
            <a 
              href="https://netsoltech.com/blog/transcend-ai-hackathon-2025" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ieee-link"
            >
              <span>Read Blog</span>
              <svg className="ieee-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Card 4: CareCloud Tour Card (Col span 1) */}
        <motion.div 
          className="academics-card academics-card--residency"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => window.open('https://www.linkedin.com/in/malikasadirfan/details/certifications/', '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <div className="residency-header">
            <div className="globe-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          </div>

          <div className="residency-footer">
            <span className="residency-label">BOOTCAMP</span>
            <h4 className="residency-title">SkyLabs & SkyElectric Bootcamp</h4>
          </div>
        </motion.div>

        {/* Card 5: Advanced React Card (Col span 1) */}
        <motion.div 
          className="academics-card academics-card--react"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="react-header">
            {/* Lightning bolt badge wrapper */}
            <div className="lightning-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>

            {/* Top-Right Arrow */}
            <svg className="card-external-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>

          <div className="react-footer">
            <span className="info-label">NVIDIA CERTIFIED</span>
            <h4 className="react-title">Deep Learning & Generative AI</h4>
            <p className="react-desc">Fundamentals of Deep Learning with Diffusion Models</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
