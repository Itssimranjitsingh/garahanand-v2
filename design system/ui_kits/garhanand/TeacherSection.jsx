// TeacherSection.jsx — GarhAnand
const TeacherSection = () => (
  <section style={{ background: 'var(--secondary)', padding: '80px 0' }}>
    <div className="container">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Teacher photo */}
        <div
          style={{
            aspectRatio: '4/5',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(194,163,107,0.15)',
          }}
        >
          <img
            src="../../assets/jathedar-simranjeet-singh.jpeg"
            alt="Jathedar Simranjeet Singh"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              filter: 'saturate(0.85)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px 24px',
              background: 'linear-gradient(transparent, rgba(10,30,30,0.92))',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 400,
                color: '#F5F1E8',
              }}
            >
              Jathedar Simranjeet Singh
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'rgba(194,163,107,0.7)',
                letterSpacing: '0.05em',
                marginTop: 4,
              }}
            >
              Lead Teacher · GarhAnand
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--cta)',
              marginBottom: 12,
            }}
          >
            Teacher
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px,3.5vw,38px)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text-dark)',
              marginBottom: 20,
            }}
          >
            Learning from a Living Tradition
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(26,46,46,0.7)',
              marginBottom: 16,
            }}
          >
            Jathedar Simranjeet Singh has spent over thirty years studying
            Gurmukhi script and Gurbani in its original forms. Trained in the
            classical Giani tradition, he brings scholarly rigour and spiritual
            depth to every class.
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(26,46,46,0.7)',
              marginBottom: 32,
            }}
          >
            His approach is neither purely academic nor devotional alone — it
            lives in the space between, where language and spirit are
            inseparable.
          </p>

          <div
            style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 20 }}
          >
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.65,
                color: 'var(--text-dark)',
                marginBottom: 10,
              }}
            >
              "Larivaar is not a barrier. It is an invitation — to slow down, to
              be present, and to meet the Guru on the Guru's own terms."
            </blockquote>
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(194,163,107,0.8)',
              }}
            >
              Jathedar Simranjeet Singh
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { TeacherSection });
