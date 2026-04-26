import Image from 'next/image';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

const MISSIONS = [
  {
    image: '/assets/main/raagiji.jpeg',
    title: 'Raag te Saaj',
    description:
      'Promoting the traditional way of Kirtan by teaching Guru ke Raag and Guru ke Saaj.',
  },
  {
    image: '/assets/main/vidya.JPG',
    title: 'Vidyalay',
    description:
      'Establishing a center to train Sikhs in Gatka, Santhia, Raag Vidya, and Akharkaari.',
  },
];

export function HomeMissions() {
  return (
    <section
      id="missions"
      style={{
        background: '#0F2A2A',
        borderTop: '1px solid rgba(194,163,107,0.08)',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            textAlign: 'center',
            maxWidth: 680,
            margin: '0 auto 48px',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#7FAF9B',
              marginBottom: 12,
            }}
          >
            Upcoming Missions
          </div>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(26px,3.5vw,38px)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#F5F1E8',
              marginBottom: 16,
            }}
          >
            Expanding the Seva
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(245,241,232,0.60)',
              margin: 0,
            }}
          >
            Building dedicated spaces for learning, preserving sacred musical
            traditions, and training the next generation in the disciplines of
            the Panth.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 24,
            maxWidth: 960,
            margin: '0 auto',
          }}
        >
          {MISSIONS.map((mission) => (
            <article
              key={mission.title}
              style={{
                background: 'rgba(22,53,53,0.45)',
                border: '1px solid rgba(194,163,107,0.15)',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: 224,
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(194,163,107,0.12)',
                }}
              >
                <Image
                  src={mission.image}
                  alt={mission.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{
                    objectFit: 'cover',
                    filter: 'saturate(0.84)',
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10,30,30,0.12)',
                  }}
                />
              </div>
              <div style={{ padding: '24px 26px 28px' }}>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: '#F5F1E8',
                    marginBottom: 10,
                  }}
                >
                  {mission.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(245,241,232,0.60)',
                    margin: 0,
                  }}
                >
                  {mission.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
