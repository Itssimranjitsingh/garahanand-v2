'use client';

import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';

const WORDS = [
  { gu: 'ਸਤਿ', roman: 'Sati', meaning: 'Truth, the Eternal' },
  { gu: 'ਨਾਮੁ', roman: 'Naamu', meaning: 'The Name' },
  { gu: 'ਕਰਤਾ', roman: 'Kartaa', meaning: 'The Creator' },
  { gu: 'ਪੁਰਖੁ', roman: 'Purakhu', meaning: 'The All-Pervading Being' },
  { gu: 'ਨਿਰਭਉ', roman: 'Nirbhau', meaning: 'Without Fear' },
  { gu: 'ਨਿਰਵੈਰੁ', roman: 'Nirvair', meaning: 'Without Enmity' },
  { gu: 'ਅਕਾਲ', roman: 'Akaal', meaning: 'Beyond Time' },
  { gu: 'ਮੂਰਤਿ', roman: 'Moorati', meaning: 'Embodiment' },
  { gu: 'ਅਜੂਨੀ', roman: 'Ajooni', meaning: 'Beyond Birth & Death' },
  { gu: 'ਸੈਭੰ', roman: 'Saibhan', meaning: 'Self-Illumined' },
];

const INFO_CARDS = [
  {
    title: 'Larivaar',
    desc: 'Continuous, unbroken script as found in historical manuscripts and the original Guru Granth Sahib.',
  },
  {
    title: 'Pad Ched',
    desc: 'Modern word-separated form. Accessible but a departure from the original textual tradition.',
  },
  {
    title: 'Hover to Learn',
    desc: 'Pause on any word to see its transliteration and meaning. Learning through encounter, not memorisation.',
  },
];

export function HomeLarivaar() {
  const [mode, setMode] = useState<'larivaar' | 'padched'>('larivaar');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const isLarivaar = mode === 'larivaar';

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
            Core Feature
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
            Experience Larivaar
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(245,241,232,0.60)',
              maxWidth: 520,
            }}
          >
            The Guru Granth Sahib was originally composed in continuous,
            unspaced script. Toggle between Larivaar and Pad Ched to experience
            both forms. Hover any word to reveal its meaning.
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
          <button style={toggleBtn(isLarivaar)} onClick={() => setMode('larivaar')}>
            Larivaar
          </button>
          <button style={toggleBtn(!isLarivaar)} onClick={() => setMode('padched')}>
            Pad Ched
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
            {WORDS.map((w, i) => (
              <span
                key={i}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
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
                {w.gu}
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
          Mool Mantar — Guru Granth Sahib, Ang 1
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
          {INFO_CARDS.map((c) => (
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
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
