'use client';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';

export function HomeHero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#0A1E1E',
        backgroundImage: 'url("/assets/others/manuscript-bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,30,30,0.82)',
          pointerEvents: 'none',
        }}
      />

      {/* Ghost ੴ glyph */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          fontSize: 320,
          fontFamily: FONT_GU,
          color: 'rgba(194,163,107,0.04)',
          lineHeight: 1,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        ੴ
      </div>

      {/* Gold rule under navbar */}
      <div
        aria-hidden
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
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#C2A36B',
            marginBottom: 24,
          }}
        >
          ੴ &nbsp; A Sacred Learning Platform
        </div>

        <h1
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 'clamp(40px,6vw,72px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#F5F1E8',
            maxWidth: 720,
            margin: '0 auto 16px',
          }}
        >
          Return to the Unbroken
          <br />
          <em style={{ fontStyle: 'italic', color: '#C2A36B', fontWeight: 300 }}>
            Word of the Guru
          </em>
        </h1>

        {/* Gold divider */}
        <div
          aria-hidden
          style={{
            width: 48,
            height: 1,
            background: 'rgba(194,163,107,0.4)',
            margin: '24px auto',
          }}
        />

        <p
          style={{
            fontFamily: FONT_DISPLAY,
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
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#learn"
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '13px 30px',
              background: '#7FAF9B',
              color: '#0F2A2A',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = '#8FBFAB')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = '#7FAF9B')
            }
          >
            Begin Learning
          </a>
          <a
            href="#about"
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              padding: '13px 30px',
              background: 'transparent',
              color: '#C2A36B',
              border: '1px solid #C2A36B',
              borderRadius: 4,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(194,163,107,0.08)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            Our Mission
          </a>
        </div>

        {/* Mool Mantar Larivaar specimen */}
        <div style={{ marginTop: 64, opacity: 0.35 }}>
          <div
            style={{
              fontFamily: FONT_GU,
              fontSize: 'clamp(14px,1.8vw,18px)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              lineHeight: 1.9,
              color: '#F5F1E8',
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
        aria-hidden
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
}
