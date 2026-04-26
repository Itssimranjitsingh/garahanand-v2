'use client';

import { useTranslations } from 'next-intl';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

type Camp = {
  year: string;
  location: string;
  title: string;
  days: string;
  snippet: string;
};

export function HomeCamps() {
  const t = useTranslations('HomeCamps');
  const camps: Camp[] = [
    {
      year: t('camps.0.year'),
      location: t('camps.0.location'),
      title: t('camps.0.title'),
      days: t('camps.0.days'),
      snippet: t('camps.0.snippet'),
    },
    {
      year: t('camps.1.year'),
      location: t('camps.1.location'),
      title: t('camps.1.title'),
      days: t('camps.1.days'),
      snippet: t('camps.1.snippet'),
    },
    {
      year: t('camps.2.year'),
      location: t('camps.2.location'),
      title: t('camps.2.title'),
      days: t('camps.2.days'),
      snippet: t('camps.2.snippet'),
    },
  ];

  return (
    <section
      id="camps"
      style={{
        background: '#0F2A2A',
        borderTop: '1px solid rgba(194,163,107,0.08)',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#7FAF9B',
              marginBottom: 10,
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
            }}
          >
            {t('title')}
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
            gap: 20,
          }}
        >
          {camps.map((c) => (
            <div
              key={c.title}
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
              {/* Image placeholder */}
              <div
                style={{
                  height: 120,
                  background: '#0F2A2A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(194,163,107,0.1)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-noto-gurmukhi), sans-serif',
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
                      color: '#7FAF9B',
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
                    fontFamily: FONT_DISPLAY,
                    fontSize: 18,
                    fontWeight: 400,
                    color: '#F5F1E8',
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
                    color: 'rgba(245,241,232,0.60)',
                    fontStyle: 'italic',
                  }}
                >
                  {c.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
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
            aria-hidden
            style={{
              width: 1,
              height: 40,
              background: 'rgba(194,163,107,0.3)',
              margin: '0 auto 24px',
            }}
          />
          <blockquote
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(18px,2.2vw,22px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.65,
              color: 'rgba(245,241,232,0.75)',
              marginBottom: 14,
            }}
          >
            &quot;{t('quote')}&quot;
          </blockquote>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(194,163,107,0.6)',
            }}
          >
            {t('quote_attribution')}
          </div>
        </div>
      </div>
    </section>
  );
}
