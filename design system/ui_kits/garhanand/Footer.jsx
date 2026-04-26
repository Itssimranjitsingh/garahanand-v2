// Footer.jsx — GarhAnand
const Footer = ({ onNav }) => {
  const links = {
    Learn: ['Courses', 'Camps', 'Texts & Manuscripts', 'Self-paced Study'],
    About: ['Our Mission', 'The Teacher', 'Philosophy', 'Contact'],
    Contribute: ['Seva / Donate', 'Monthly Contribution', 'Volunteer'],
  };

  return (
    <footer
      style={{
        background: 'var(--primary-dark)',
        borderTop: '1px solid rgba(194,163,107,0.10)',
        padding: '64px 0 32px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 400,
                color: 'var(--text-light)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: 'var(--accent)' }}>ੴ</span> GarhAnand
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
                fontFamily: 'var(--font-gu)',
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
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 16,
                  opacity: 0.7,
                }}
              >
                {col}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      style={{
                        fontSize: 13,
                        color: 'rgba(245,241,232,0.45)',
                        textDecoration: 'none',
                        transition: 'color 200ms ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = 'rgba(245,241,232,0.8)')
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = 'rgba(245,241,232,0.45)')
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
            © 2026 GarhAnand. All rights reserved.
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
};

Object.assign(window, { Footer });
