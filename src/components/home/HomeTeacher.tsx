'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';
const TEACHER_IMAGE = '/assets/others/jathedar-simranjeet-singh.jpeg';

export function HomeTeacher() {
  const locale = useLocale();
  const t = useTranslations('HomeTeacher');
  const letterParagraphs = [
    t('letter_paragraphs.0'),
    t('letter_paragraphs.1'),
    t('letter_paragraphs.2'),
    t('letter_paragraphs.3'),
    t('letter_paragraphs.4'),
    t('letter_paragraphs.5'),
    t('letter_paragraphs.6'),
    t('letter_paragraphs.7'),
    t('letter_paragraphs.8'),
    t('letter_paragraphs.9'),
  ];
  const openingVerseLines = t('opening_verse').split('\n');
  const [isWisdomOpen, setIsWisdomOpen] = useState(false);

  return (
    <section
      id="about"
      style={{
        background: '#EAE3D5',
        borderTop: '1px solid rgba(26,46,46,0.08)',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
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
              maxWidth: 420,
            }}
          >
            <Image
              src={TEACHER_IMAGE}
              alt={t('image_alt')}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{
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
                background: 'rgba(10,30,30,0.9)',
              }}
            >
              <div
                style={{
                  fontFamily: FONT_GU,
                  fontSize: 18,
                  fontWeight: 400,
                  color: '#F5F1E8',
                  lineHeight: 1.7,
                }}
              >
                {t('name')}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(194,163,107,0.7)',
                  letterSpacing: '0.05em',
                  marginTop: 4,
                }}
              >
                {t('role')}
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
                color: '#1A2E2E',
                marginBottom: 20,
              }}
            >
              {t('title')}
            </h2>
            <p
              lang={locale}
              style={{
                fontFamily: FONT_GU,
                fontSize: 15,
                lineHeight: 1.9,
                color: 'rgba(26,46,46,0.7)',
                marginBottom: 16,
              }}
            >
              {openingVerseLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
            <p
              lang={locale}
              style={{
                fontFamily: FONT_GU,
                fontSize: 15,
                lineHeight: 1.9,
                color: 'rgba(26,46,46,0.7)',
                marginBottom: 24,
                maxHeight: 108,
                overflow: 'hidden',
              }}
            >
              {t('excerpt')}
            </p>

            <div
              style={{
                borderLeft: '2px solid #C2A36B',
                paddingLeft: 20,
              }}
            >
              <blockquote
                style={{
                  fontFamily: FONT_GU,
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#1A2E2E',
                  marginBottom: 10,
                }}
                lang={locale}
              >
                {t('pull_quote')}
              </blockquote>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(194,163,107,0.8)',
                }}
              >
                {t('pull_quote_caption')}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsWisdomOpen(true);
              }}
              style={{
                marginTop: 28,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                padding: '12px 24px',
                background: '#1A2E2E',
                color: '#F5F1E8',
                border: '1px solid #1A2E2E',
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'background 200ms ease, border-color 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#163535';
                e.currentTarget.style.borderColor = '#163535';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1A2E2E';
                e.currentTarget.style.borderColor = '#1A2E2E';
              }}
            >
              {t('read_complete_letter')}
            </button>
          </div>
        </div>
      </div>

      {isWisdomOpen && (
        <div
          aria-labelledby="jathedar-modal-title"
          aria-modal="true"
          role="dialog"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <button
            type="button"
            aria-label={t('close_letter_aria')}
            onClick={() => {
              setIsWisdomOpen(false);
            }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10,30,30,0.78)',
              border: 'none',
              cursor: 'default',
            }}
          />

          <div
            className="flex max-h-[90vh] w-full max-w-[980px] flex-col overflow-hidden rounded-[4px] md:flex-row"
            style={{
              position: 'relative',
              background: '#F5F1E8',
              border: '1px solid rgba(194,163,107,0.32)',
            }}
          >
            <div
              className="relative min-h-[260px] shrink-0 md:min-h-0 md:w-[34%]"
              style={{
                borderRight: '1px solid rgba(194,163,107,0.18)',
                background: '#0F2A2A',
              }}
            >
              <Image
                src={TEACHER_IMAGE}
                alt={t('image_alt')}
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'saturate(0.85)',
                }}
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10,30,30,0.14)',
                }}
              />
            </div>

            <div
              className="min-w-0 flex-1 overflow-y-auto md:max-h-[90vh]"
              style={{
                padding: '36px clamp(24px, 4vw, 48px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 16,
                  alignItems: 'flex-start',
                  marginBottom: 28,
                }}
              >
                <div>
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
                  <h3
                    id="jathedar-modal-title"
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontSize: 'clamp(28px, 4vw, 40px)',
                      fontWeight: 300,
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      color: '#1A2E2E',
                      margin: 0,
                    }}
                  >
                    {t('title')}
                  </h3>
                  <p
                    lang={locale}
                    style={{
                      fontFamily: FONT_GU,
                      color: '#C2A36B',
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      lineHeight: 1.7,
                      marginTop: 8,
                    }}
                  >
                    {t('name')}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsWisdomOpen(false);
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(26,46,46,0.22)',
                    borderRadius: 4,
                    color: 'rgba(26,46,46,0.65)',
                    cursor: 'pointer',
                    flexShrink: 0,
                    fontSize: 12,
                    letterSpacing: '0.05em',
                    padding: '8px 14px',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('close_letter')}
                </button>
              </div>

              <div
                lang={locale}
                style={{
                  color: 'rgba(26,46,46,0.82)',
                  fontFamily: FONT_GU,
                  fontSize: 14,
                  lineHeight: 2,
                }}
              >
                <p
                  style={{
                    borderLeft: '2px solid #C2A36B',
                    color: '#1A2E2E',
                    fontSize: 16,
                    lineHeight: 2,
                    margin: '0 0 28px',
                    paddingLeft: 18,
                  }}
                >
                  {openingVerseLines.map((line, index) => (
                    <span key={line}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </p>

                {letterParagraphs.slice(0, 7).map((paragraph) => (
                  <p key={paragraph} style={{ margin: '0 0 22px' }}>
                    {paragraph}
                  </p>
                ))}

                <div
                  style={{
                    borderLeft: '2px solid rgba(194,163,107,0.55)',
                    margin: '4px 0 24px',
                    padding: '12px 0 12px 18px',
                  }}
                >
                  <p
                    style={{
                      color: '#C2A36B',
                      fontWeight: 500,
                      margin: '0 0 8px',
                    }}
                  >
                    {t('pull_quote')}
                  </p>
                  <p
                    style={{
                      color: 'rgba(26,46,46,0.68)',
                      fontSize: 13,
                      margin: 0,
                    }}
                  >
                    {t('reflection')}
                  </p>
                </div>

                {letterParagraphs.slice(7).map((paragraph) => (
                  <p key={paragraph} style={{ margin: '0 0 22px' }}>
                    {paragraph}
                  </p>
                ))}

                <p
                  style={{
                    color: 'rgba(26,46,46,0.72)',
                    fontStyle: 'italic',
                    margin: '0 0 28px',
                  }}
                >
                  {t('closing_prayer')}
                </p>

                <div
                  style={{
                    borderTop: '1px solid rgba(194,163,107,0.22)',
                    paddingTop: 18,
                  }}
                >
                  <p
                    style={{
                      color: '#1A2E2E',
                      fontWeight: 500,
                      margin: '0 0 6px',
                    }}
                  >
                    {t('closing_line')}
                  </p>
                  <p
                    style={{
                      color: '#C2A36B',
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                      margin: '0 0 10px',
                    }}
                  >
                    {t('role')}
                  </p>
                  <p
                    style={{
                      color: '#1A2E2E',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {t('name')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
