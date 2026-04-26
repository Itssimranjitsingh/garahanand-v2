// Hero.jsx — GarhAnand
const Hero = ({ onNav }) => {
  const heroStyle = {
    minHeight: '100vh',
    background: '#0A1E1E',
    backgroundImage: 'url("../../assets/manuscript-bg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 64,
  };

  // Dark teal overlay over the manuscript image
  const grainStyle = {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'rgba(10,30,30,0.82)',
  };

  const glyphBgStyle = {
    position: 'absolute',
    fontSize: 320,
    fontFamily: 'var(--font-gu)',
    color: 'rgba(194,163,107,0.04)',
    lineHeight: 1,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    pointerEvents: 'none',
    userSelect: 'none',
    letterSpacing: '-0.02em',
  };

  const dividerStyle = {
    width: 48,
    height: 1,
    background: 'rgba(194,163,107,0.4)',
    margin: '24px auto',
  };

  return (
    <section style={heroStyle}>
      <div style={grainStyle} />
      <div style={glyphBgStyle}>ੴ</div>

      {/* Gold horizontal rule top */}
      <div
        style={{
          position: 'absolute',
          top: 64,
          left: 0,
          right: 0,
          height: 1,
          background: 'rgba(194,163,107,0.1)',
        }}
      />

      <div
        className="container"
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 24,
          }}
        >
          ੴ &nbsp; A Sacred Learning Platform
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px,6vw,72px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-light)',
            maxWidth: 720,
            margin: '0 auto 16px',
          }}
        >
          Return to the Unbroken
          <br />
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--accent)',
              fontWeight: 300,
            }}
          >
            Word of the Guru
          </em>
        </h1>

        <div style={dividerStyle} />

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(16px,2vw,20px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: 'rgba(245,241,232,0.65)',
            maxWidth: 540,
            margin: '0 auto 36px',
          }}
        >
          GarhAnand teaches the ancient art of Larivaar — continuous Gurmukhi
          script — as a path toward deeper understanding of Gurbani.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => onNav('learn')}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '13px 30px',
              background: 'var(--cta)',
              color: 'var(--primary)',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = 'var(--cta-hover)')
            }
            onMouseLeave={(e) => (e.target.style.background = 'var(--cta)')}
          >
            Begin Learning
          </button>
          <button
            onClick={() => onNav('about')}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '13px 30px',
              background: 'transparent',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              borderRadius: 4,
              cursor: 'pointer',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(194,163,107,0.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
            }}
          >
            Our Mission
          </button>
        </div>

        {/* Gurmukhi specimen */}
        <div style={{ marginTop: 64, opacity: 0.35 }}>
          <div
            style={{
              fontFamily: 'var(--font-gu)',
              fontSize: 'clamp(14px,1.8vw,18px)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.9,
              color: 'var(--text-light)',
              wordSpacing: '-0.45em',
            }}
          >
            ਸਤਿਨਾਮੁਕਰਤਾਪੁਰਖੁਨਿਰਭਉਨਿਰਵੈਰੁਅਕਾਲਮੂਰਤਿਅਜੂਨੀਸੈਭੰਗੁਰਪ੍ਰਸਾਦਿ
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(194,163,107,0.5)',
              marginTop: 8,
            }}
          >
            Mool Mantar — Guru Granth Sahib, Ang 1 (Larivaar form)
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(245,241,232,0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{ width: 1, height: 32, background: 'rgba(194,163,107,0.25)' }}
        />
        scroll
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
