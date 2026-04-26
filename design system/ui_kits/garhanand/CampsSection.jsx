// CampsSection.jsx — GarhAnand
const CampsSection = () => {
  const camps = [
    {
      year: '2024',
      location: 'Anandpur Sahib',
      title: 'Winter Larivaar Camp',
      days: '5 days',
      snippet:
        'Forty-two students gathered in the sacred city of Anandpur for five days of morning paath, afternoon study, and evening reflection.',
    },
    {
      year: '2023',
      location: 'Amritsar',
      title: 'Darbar Sahib Intensive',
      days: '3 days',
      snippet:
        'Held in the shadow of Harmandir Sahib, participants studied Larivaar in the context of kirtan and seva.',
    },
    {
      year: '2023',
      location: 'Himachal Pradesh',
      title: 'Mountain Retreat',
      days: '7 days',
      snippet:
        'A remote study camp in the hills — minimal distraction, deep learning, and the sound of Gurbani in the open air.',
    },
  ];

  const glyphColors = [
    'rgba(194,163,107,0.15)',
    'rgba(127,175,155,0.12)',
    'rgba(194,163,107,0.10)',
  ];

  return (
    <section
      style={{
        background: 'var(--primary)',
        borderTop: '1px solid rgba(194,163,107,0.08)',
      }}
    >
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--cta)',
              marginBottom: 10,
            }}
          >
            Immersive Learning
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px,3.5vw,38px)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text-light)',
            }}
          >
            Camps & Retreats
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 20,
          }}
        >
          {camps.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(22,53,53,0.45)',
                border: '1px solid rgba(194,163,107,0.15)',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'border-color 200ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(194,163,107,0.38)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(194,163,107,0.15)')
              }
            >
              {/* Image placeholder — desaturated heritage texture */}
              <div
                style={{
                  height: 120,
                  background: `radial-gradient(ellipse at center, ${glyphColors[i]} 0%, transparent 70%), #0F2A2A`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(194,163,107,0.1)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-gu)',
                    fontSize: 56,
                    color: 'rgba(194,163,107,0.25)',
                  }}
                >
                  ੴ
                </span>
              </div>
              <div style={{ padding: '20px 22px 22px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--cta)',
                    }}
                  >
                    {c.location}
                  </span>
                  <span
                    style={{ fontSize: 10, color: 'rgba(194,163,107,0.5)' }}
                  >
                    {c.year} · {c.days}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'var(--text-light)',
                    marginBottom: 10,
                    lineHeight: 1.25,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                  }}
                >
                  {c.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          style={{
            marginTop: 64,
            textAlign: 'center',
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background: 'rgba(194,163,107,0.3)',
              margin: '0 auto 24px',
            }}
          />
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px,2.2vw,22px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.65,
              color: 'rgba(245,241,232,0.75)',
              marginBottom: 14,
            }}
          >
            "Learning Larivaar at the camp changed my relationship with Gurbani
            entirely. The text came alive in a way I had never experienced in
            twenty years of reading."
          </blockquote>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(194,163,107,0.6)',
            }}
          >
            Camp Participant, Anandpur 2024
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { CampsSection });
