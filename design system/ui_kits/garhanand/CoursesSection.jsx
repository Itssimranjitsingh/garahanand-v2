// CoursesSection.jsx — GarhAnand
const CoursesSection = ({ onNav }) => {
  const courses = [
    {
      tag: 'Foundational',
      title: 'Introduction to Larivaar',
      duration: '8 weeks',
      desc: 'Begin your journey into continuous Gurmukhi script, its origins, and its spiritual significance in Sikh tradition.',
    },
    {
      tag: 'Intermediate',
      title: 'Reading the Pothi Sahib',
      duration: '6 weeks',
      desc: 'Learn to read manuscript-style Larivaar in historical Pothi Sahibs with guidance through common patterns and forms.',
    },
    {
      tag: 'Advanced',
      title: 'Gurbani Paath in Larivaar',
      duration: '12 weeks',
      desc: 'A rigorous programme for students who wish to develop fluency in reciting Gurbani in the original Larivaar form.',
    },
    {
      tag: 'Self-Paced',
      title: 'Gurmukhi Script Foundations',
      duration: 'Self-paced',
      desc: 'For those new to Gurmukhi script entirely. Build your alphabet, vowel marks, and basic vocabulary at your own pace.',
    },
  ];

  return (
    <section style={{ background: 'var(--secondary)', padding: '80px 0' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
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
              Learning Paths
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px,3.5vw,38px)',
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--text-dark)',
              }}
            >
              Courses & Programmes
            </h2>
          </div>
          <button
            onClick={() => onNav('learn')}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.05em',
              padding: '10px 22px',
              background: 'transparent',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            View all courses
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))',
            gap: 20,
          }}
        >
          {courses.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid rgba(26,46,46,0.09)',
                borderRadius: 4,
                padding: '24px 24px 20px',
                cursor: 'pointer',
                transition: 'border-color 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(194,163,107,0.45)';
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,46,46,0.09)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 12,
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
                  {c.tag}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: 'rgba(26,46,46,0.4)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {c.duration}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: 'var(--text-dark)',
                  marginBottom: 10,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: 'rgba(26,46,46,0.6)',
                  marginBottom: 18,
                }}
              >
                {c.desc}
              </p>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--accent)',
                  letterSpacing: '0.03em',
                }}
              >
                Explore →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { CoursesSection });
