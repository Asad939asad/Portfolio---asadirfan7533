import React from 'react';

// Dot Grid cluster visual helper for the header background
function CardDotGrid() {
  const dots = Array.from({ length: 15 });
  return (
    <div className="uiux-card__dot-grid">
      {dots.map((_, idx) => (
        <span key={idx} className="uiux-dot" />
      ))}
    </div>
  );
}

export default function UiUxWork() {
  return (
    <div className="uiux-section-container" id="uiux">
      {/* Header aligned exactly like mockup */}
      <div className="uiux-section-header">
        <div className="uiux-section-header__left">
          <h2 className="uiux-section-header__heading">
            UiUx Work<span className="asterisk-symbol">*</span>
          </h2>
        </div>
        <div className="uiux-section-header__right">
          <p className="uiux-section-header__subheading">
            From wireframes to high-fidelity logic—explore the full design system and prototypes directly in the source.
          </p>
        </div>
      </div>

      {/* Grid of Mockup Containers */}
      <div className="uiux-grid">
        {/* Box 1: VERIFY PX */}
        <div className="uiux-card">
          <div className="uiux-card__badge-row">
            <span className="uiux-card__badge">LEARNLY</span>
          </div>

          <div className="uiux-card__content">
            <video src="./Learnly Demo Final.mp4" autoPlay loop muted playsInline className="uiux-video" />
          </div>

          {/* Accent bottom-right bar */}
          <div className="uiux-card__accent-bar" />
        </div>

        {/* Box 2: CUBE PROGRAMMING */}
        <div className="uiux-card">
          <div className="uiux-card__badge-row">
            <span className="uiux-card__badge">TRICON</span>
          </div>

          <div className="uiux-card__content">
            <video src="./Tricon-Video.mp4" autoPlay loop muted playsInline className="uiux-video" />
          </div>

          {/* Accent bottom-right bar */}
          <div className="uiux-card__accent-bar" />
        </div>
      </div>
    </div>
  );
}
