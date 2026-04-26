import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

type Mission = {
  title: string;
  description: string;
};

const MISSION_IMAGES = [
  '/assets/main/raagiji.jpeg',
  '/assets/main/vidya.JPG',
] as const;

export async function HomeMissions() {
  const t = await getTranslations('HomeMissions');
  const missions: Mission[] = [
    {
      title: t('missions.0.title'),
      description: t('missions.0.description'),
    },
    {
      title: t('missions.1.title'),
      description: t('missions.1.description'),
    },
  ];

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
            {t('eyebrow')}
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
            {t('title')}
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(245,241,232,0.60)',
              margin: 0,
            }}
          >
            {t('description')}
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
          {missions.map((mission, index) => (
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
                  src={MISSION_IMAGES[index] ?? MISSION_IMAGES[0]}
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
