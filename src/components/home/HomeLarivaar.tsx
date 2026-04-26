'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';

type LarivaarWord = {
  gurmukhi: string;
  roman: string;
  meaning: string;
};

type InfoCard = {
  title: string;
  description: string;
};

const toggleBtn = (active: boolean) => ({
  fontSize: 12,
  fontWeight: 500 as const,
  letterSpacing: '0.05em',
  padding: '8px 18px',
  borderRadius: 3,
  border: 'none',
  cursor: 'pointer' as const,
  background: active ? '#7FAF9B' : 'transparent',
  color: active ? '#0F2A2A' : 'rgba(245,241,232,0.5)',
  transition: 'all 200ms ease',
});

export function HomeLarivaar() {
  const t = useTranslations('HomeLarivaar');
  const words: LarivaarWord[] = [
    {
      gurmukhi: t('words.0.gurmukhi'),
      roman: t('words.0.roman'),
      meaning: t('words.0.meaning'),
    },
    {
      gurmukhi: t('words.1.gurmukhi'),
      roman: t('words.1.roman'),
      meaning: t('words.1.meaning'),
    },
    {
      gurmukhi: t('words.2.gurmukhi'),
      roman: t('words.2.roman'),
      meaning: t('words.2.meaning'),
    },
    {
      gurmukhi: t('words.3.gurmukhi'),
      roman: t('words.3.roman'),
      meaning: t('words.3.meaning'),
    },
    {
      gurmukhi: t('words.4.gurmukhi'),
      roman: t('words.4.roman'),
      meaning: t('words.4.meaning'),
    },
    {
      gurmukhi: t('words.5.gurmukhi'),
      roman: t('words.5.roman'),
      meaning: t('words.5.meaning'),
    },
    {
      gurmukhi: t('words.6.gurmukhi'),
      roman: t('words.6.roman'),
      meaning: t('words.6.meaning'),
    },
    {
      gurmukhi: t('words.7.gurmukhi'),
      roman: t('words.7.roman'),
      meaning: t('words.7.meaning'),
    },
    {
      gurmukhi: t('words.8.gurmukhi'),
      roman: t('words.8.roman'),
      meaning: t('words.8.meaning'),
    },
    {
      gurmukhi: t('words.9.gurmukhi'),
      roman: t('words.9.roman'),
      meaning: t('words.9.meaning'),
    },
  ];
  const infoCards: InfoCard[] = [
    {
      title: t('cards.0.title'),
      description: t('cards.0.description'),
    },
    {
      title: t('cards.1.title'),
      description: t('cards.1.description'),
    },
    {
      title: t('cards.2.title'),
      description: t('cards.2.description'),
    },
  ];
  const [mode, setMode] = useState<'larivaar' | 'padched'>('larivaar');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const isLarivaar = mode === 'larivaar';

  return (
    <section
      id="learn"
      style={{
        background: '#0F2A2A',
        borderTop: '1px solid rgba(194,163,107,0.10)',
        borderBottom: '1px solid rgba(194,163,107,0.10)',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
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
              fontSize: 'clamp(28px,4vw,42px)',
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
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(245,241,232,0.60)',
              maxWidth: 520,
            }}
          >
            {t('description')}
          </p>
        </div>

        {/* Toggle */}
        <div
          style={{
            display: 'inline-flex',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(194,163,107,0.2)',
            borderRadius: 5,
            padding: 3,
            marginBottom: 32,
          }}
        >
          <button
            type="button"
            style={toggleBtn(isLarivaar)}
            onClick={() => {
              setMode('larivaar');
            }}
          >
            {t('larivaar_toggle')}
          </button>
          <button
            type="button"
            style={toggleBtn(!isLarivaar)}
            onClick={() => {
              setMode('padched');
            }}
          >
            {t('pad_ched_toggle')}
          </button>
        </div>

        {/* Text display */}
        <div
          style={{
            background: 'rgba(22,53,53,0.4)',
            border: '1px solid rgba(194,163,107,0.15)',
            borderRadius: 4,
            padding: '32px 40px',
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontFamily: FONT_GU,
              fontSize: 'clamp(20px,2.5vw,26px)',
              fontWeight: 400,
              lineHeight: 2,
              letterSpacing: '-0.01em',
              wordSpacing: isLarivaar ? '-0.48em' : '0.08em',
              transition: 'word-spacing 350ms ease',
              color: '#F5F1E8',
            }}
          >
            {words.map((w, i) => (
              <span key={w.gurmukhi}>
                <span
                  onMouseEnter={() => {
                    setHoveredIdx(i);
                  }}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                  }}
                  style={{
                    display: 'inline',
                    borderRadius: 2,
                    padding: '2px 2px',
                    background:
                      hoveredIdx === i
                        ? 'rgba(194,163,107,0.22)'
                        : 'transparent',
                    transition: 'background 180ms ease',
                    cursor: 'default',
                    position: 'relative',
                  }}
                >
                  {w.gurmukhi}
                  {hoveredIdx === i && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#163535',
                        border: '1px solid rgba(194,163,107,0.3)',
                        borderRadius: 4,
                        padding: '6px 10px',
                        whiteSpace: 'nowrap',
                        zIndex: 10,
                        pointerEvents: 'none',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'system-ui, sans-serif',
                          fontSize: 11,
                          color: '#C2A36B',
                          fontWeight: 500,
                          marginBottom: 2,
                        }}
                      >
                        {w.roman}
                      </div>
                      <div
                        style={{
                          fontFamily: 'system-ui, sans-serif',
                          fontSize: 11,
                          color: 'rgba(245,241,232,0.75)',
                        }}
                      >
                        {w.meaning}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          border: '5px solid transparent',
                          borderTopColor: 'rgba(194,163,107,0.3)',
                        }}
                      />
                    </span>
                  )}
                </span>
                {i < words.length - 1 ? ' ' : null}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.05em',
            color: 'rgba(194,163,107,0.6)',
            textAlign: 'right',
          }}
        >
          {t('source')}
        </div>

        {/* Info cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
            gap: 20,
            marginTop: 48,
          }}
        >
          {infoCards.map((c) => (
            <div
              key={c.title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(194,163,107,0.12)',
                borderRadius: 4,
                padding: '20px 22px',
              }}
            >
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 18,
                  fontWeight: 400,
                  color: '#F5F1E8',
                  marginBottom: 8,
                }}
              >
                {c.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: 'rgba(245,241,232,0.60)',
                }}
              >
                {c.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
