import { useEffect, useRef, useState, Component } from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/Untitled.png";
import ScrollRevealText from "./component/ScrollRevealText";
import Dock from "./component/Dock";
import ProjectsGrid from "./component/ProjectsGrid";
import UiUxWork from "./component/UiUxWork";
import Services from "./component/Services";
import Academics from "./component/Academics";
import Experience from "./component/Experience";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./App.css";

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (selector) => (e) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(selector);
    } else {
      const target = document.querySelector(selector);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <a href="#hero" className="navbar__brand" onClick={handleScrollTo("#hero")}>
        <span className="navbar__brand-dot">*</span> PortFolio.
      </a>
      <ul className="navbar__links">
        <li>
          <a href="#work" onClick={handleScrollTo("#work")}>Work</a>
        </li>
        <li>
          <a href="#uiux" onClick={handleScrollTo("#uiux")}>UI/UX</a>
        </li>
        <li>
          <a href="#services" onClick={handleScrollTo("#services")}>Services</a>
        </li>
        <li>
          <a href="#academics" onClick={handleScrollTo("#academics")}>Academics</a>
        </li>
        <li>
          <a href="#experience" onClick={handleScrollTo("#experience")}>Experience</a>
        </li>
        <li>
          <a href="#contact" onClick={handleScrollTo("#contact")}>Contact</a>
        </li>
      </ul>
      <a href="#contact" className="navbar__cta" onClick={handleScrollTo("#contact")}>
        Let's talk →
      </a>
    </nav>
  );
}

/* ---------- Social Side Panel ---------- */
function SocialPanel() {
  return (
    <aside className="social-panel">
      <a
        href="https://github.com/Asad939asad"
        target="_blank"
        rel="noreferrer"
        className="social-panel__link"
        aria-label="GitHub"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </a>
      <div className="social-panel__divider" />
      <a
        href="https://www.linkedin.com/in/malikasadirfan/"
        target="_blank"
        rel="noreferrer"
        className="social-panel__link"
        aria-label="LinkedIn"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
      <div className="social-panel__line" />
    </aside>
  );
}

/* ---------- Grid Lines Hero ---------- */
function HeroSection() {
  const lenis = useLenis();

  const handleScrollTo = (selector) => (e) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(selector);
    } else {
      const target = document.querySelector(selector);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* 10 vertical grid lines */}
      <div className="hero-grid" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="hero-grid__line" />
        ))}
      </div>

      <div className="hero-container-split">
        {/* Left Side Content with properly spaced typography */}
        <div className="hero-content-left">
          <div
            className="hero-cursive-tagline"
            style={{ height: "100px", display: "flex", alignItems: "center" }}
          >
            <svg
              width="100%"
              height="100"
              viewBox="0 0 1000 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: "visible" }}
            >
              <motion.text
                x="0"
                y="95"
                fill="transparent"
                stroke="#080c08ff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fontSize="98"
                fontFamily="'Great Vibes', cursive"
                initial={{
                  strokeDasharray: 1000,
                  strokeDashoffset: 1000,
                  fill: "rgba(8, 12, 8, 0)",
                }}
                animate={{
                  strokeDashoffset: [1000, 0, 0, 1000],
                  fill: [
                    "rgba(8, 12, 8, 0)",
                    "rgba(8, 12, 8, 0)",
                    "rgba(8, 12, 8, 1)",
                    "rgba(8, 12, 8, 1)",
                    "rgba(8, 12, 8, 0)",
                  ],
                }}
                transition={{ 
                  strokeDashoffset: { 
                    duration: 16, 
                    times: [0, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                  fill: { 
                    duration: 16, 
                    times: [0, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              >
                Architect, Researcher, Builder, Creative
              </motion.text>
            </svg>
          </div>

          <h1 className="hero-name-left">
            FULL STACK
            <br />
            AI/ML <span className="hero-name-left--outline">ENGINEER</span>
          </h1>

          <div className="hero-actions-left">
            <a href="#work" className="btn btn--primary" onClick={handleScrollTo("#work")}>
              View Work
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={handleScrollTo("#contact")}>
              Get in Touch
            </a>
          </div>

          {/* Liquid Glass Interactive Container */}
          <div className="hero-interactive-glass">
            <div className="interactive-glass__bg" />
            <div className="interactive-glass__name">Asad Irfan</div>
            <Dock
              items={[
                {
                  icon: <span className="dock-text-btn">RESUME</span>,
                  label: "Resume",
                  onClick: () => window.open("https://drive.google.com/file/d/1U5L72AUSfTVrDQlwj4MXgDq75IriFQgX/view?usp=sharing", "_blank"),
                },
                {
                  icon: <span className="dock-text-btn">HIRE ME</span>,
                  label: "Hire Me",
                  onClick: () => {
                    if (lenis) {
                      lenis.scrollTo("#contact");
                    } else {
                      const contactSec = document.getElementById("contact");
                      if (contactSec)
                        contactSec.scrollIntoView({ behavior: "smooth" });
                    }
                  },
                },
              ]}
              magnification={58}
              baseItemSize={42}
              panelHeight={52}
            />
          </div>
        </div>
      </div>

      {/* Right Side Content with Profile Image */}
      <div className="hero-image-right">
        <div className="hero-image-wrapper">
          <img src={profileImg} alt="Profile" className="hero-profile-img" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint-left" aria-hidden="true">
        <div className="hero-scroll-hint__bar" />
        <span>scroll</span>
      </div>
    </section>
  );
}

/* ---------- Introduction Section ---------- */
function IntroSection() {
  return (
    <section className="intro-reveal-section">
      <div className="intro-reveal-inner">
        <ScrollRevealText />
      </div>
      <ProjectsGrid />
      <UiUxWork />
      <Services />
      {/* Academics Section */}
      <Academics />

      {/* Experience Section */}
      <Experience />
    </section>
  );
}

/* ---------- About Section ---------- */


/* ---------- Contact Section ---------- */
function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("asadirfan7533@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section--contact">
      <div className="contact-bento-container">
        {/* Header */}
        <div className="contact-section-header">
          <div className="contact-section-header__left">
            <h2 className="contact-section-header__heading">
              Let's Connect<span className="asterisk-symbol">*</span>
            </h2>
          </div>
          <div className="contact-section-header__right">
            <p className="contact-section-header__subheading">
              Ready to scale? Book a slot directly on my calendar or reach out
              through my socials.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="contact-grid">
          {/* Card 1: Direct Booking */}
          <div className="contact-card contact-card--booking">
            <div className="contact-card__left">
              <div className="contact-badge contact-badge--booking">
                <svg
                  className="contact-badge-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>DIRECT BOOKING</span>
              </div>
              <h3 className="booking-title">Schedule a Discovery Call</h3>
              <p className="booking-subtitle">
                Available for 30-min technical consultations
              </p>
            </div>

            <div className="contact-card__right">
              <div className="booking-bg-graphic" aria-hidden="true">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                >
                  <path d="M10,50 Q30,20 50,50 T90,50" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                </svg>
              </div>

              <a
                href="https://calendly.com/asadirfan7533/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="book-now-btn"
              >
                <span>BOOK NOW</span>
                <svg
                  className="video-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Row 2: Two columns */}
          <div className="contact-row-two">
            {/* Card 2: Email Me */}
            <div
              className="contact-card contact-card--email"
              onClick={copyEmail}
            >
              <div className="contact-card__top">
                <div className="contact-badge contact-badge--email">
                  <svg
                    className="contact-badge-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>EMAIL ME</span>
                </div>
                <h4 className="email-value">asadirfan7533@gmail.com</h4>
              </div>

              <button className="copy-btn" aria-label="Copy email to clipboard">
                {copied ? (
                  <span className="copied-toast">Copied!</span>
                ) : (
                  <svg
                    className="copy-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>

            {/* Card 3: LinkedIn */}
            <a
              href="https://www.linkedin.com/in/malikasadirfan/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-card--linkedin"
            >
              <div className="contact-card__top">
                <div className="contact-badge contact-badge--linkedin">
                  <svg
                    className="contact-badge-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LINKEDIN</span>
                </div>
                <h4 className="linkedin-value">Connect Professionally</h4>
              </div>

              <div className="arrow-circle-btn">
                <svg
                  className="card-external-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span>© 2026 Asad Irfan.</span>
      </div>
      <div className="footer__right">
        <a
          href="https://www.linkedin.com/in/malikasadirfan/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          LinkedIn
        </a>
        <span className="footer__divider">·</span>
        <a
          href="https://github.com/Asad939asad"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <>
      {/* 1. Move Navbar and SocialPanel OUTSIDE the smooth scroller */}
      <Navbar />
      <SocialPanel />
      
      {/* 2. Keep only the scrollable content INSIDE Lenis */}
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        }}
      >
        <main>
          <HeroSection />
          <IntroSection />
          <ContactSection />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
}
