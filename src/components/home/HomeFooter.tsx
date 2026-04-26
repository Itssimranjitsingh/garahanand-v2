'use client';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';

const LINKS: Record<string, string[]> = {
  Learn: ['Courses', 'Camps', 'Texts & Manuscripts', 'Self-paced Study'],
  About: ['Our Mission', 'The Teacher', 'Philosophy', 'Contact'],
  Contribute: ['Seva / Donate', 'Monthly Contribution', 'Volunteer'],
};

export function HomeFooter() {
  return (
    <footer
      style={{
        background: '#0A1E1E',
        borderTop: '1px solid rgba(194,163,107,0.10)',
        padding: '64px 0 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))',
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 22,
                fontWeight: 400,
                color: '#F5F1E8',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: '#C2A36B' }}>ੴ</span> GarhAnand
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: 'rgba(245,241,232,0.45)',
                maxWidth: 240,
                marginBottom: 20,
              }}
            >
              A sacred learning platform dedicated to the preservation and
              teaching of Larivaar Gurmukhi in the Sikh tradition.
            </p>
            <div
              style={{
                fontFamily: FONT_GU,
                fontSize: 14,
                color: 'rgba(194,163,107,0.4)',
                lineHeight: 2,
                wordSpacing: '-0.45em',
              }}
            >
              ਸਤਿਨਾਮੁਕਰਤਾਪੁਰਖੁ
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#C2A36B',
                  marginBottom: 16,
                  opacity: 0.7,
                }}
              >
                {col}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{
                        fontSize: 13,
                        color: 'rgba(245,241,232,0.45)',
                        textDecoration: 'none',
                        transition: 'color 200ms ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'rgba(245,241,232,0.8)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'rgba(245,241,232,0.45)')
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(194,163,107,0.10)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: 'rgba(245,241,232,0.25)',
              letterSpacing: '0.03em',
            }}
          >
            © {new Date().getFullYear()} GarhAnand. All rights reserved.
          </div>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(245,241,232,0.25)',
              letterSpacing: '0.03em',
            }}
          >
            Built with care for the Sikh tradition.
          </div>
        </div>
      </div>
    </footer>
  );
}
