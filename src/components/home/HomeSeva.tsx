'use client';

import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const PRESETS = ['501', '1101', '2101'];

export function HomeSeva() {
  const [amount, setAmount] = useState('1101');
  const [custom, setCustom] = useState('');
  const [monthly, setMonthly] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section
        id="seva"
        style={{ background: '#EAE3D5', padding: '80px 0' }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            padding: '0 32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontFamily: 'var(--font-noto-gurmukhi), sans-serif',
              color: '#C2A36B',
              marginBottom: 20,
            }}
          >
            ੴ
          </div>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 36,
              fontWeight: 300,
              color: '#1A2E2E',
              marginBottom: 16,
            }}
          >
            Waheguru Meherbaan
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: 'rgba(26,46,46,0.65)',
              marginBottom: 24,
            }}
          >
            Your seva has been received with gratitude. This contribution
            supports the continuation of Larivaar learning for students across
            the world.
          </p>
          <div
            aria-hidden
            style={{
              width: 40,
              height: 1,
              background: '#C2A36B',
              margin: '0 auto 24px',
              opacity: 0.5,
            }}
          />
          <p
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(26,46,46,0.55)',
            }}
          >
            "In the company of the holy, one finds the Naam."
            <br />
            <span
              style={{
                fontSize: 14,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontStyle: 'normal',
                color: 'rgba(194,163,107,0.8)',
              }}
            >
              Guru Granth Sahib
            </span>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: 32,
              fontSize: 12,
              fontWeight: 500,
              padding: '9px 20px',
              background: 'transparent',
              color: '#C2A36B',
              border: '1px solid #C2A36B',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            Return
          </button>
        </div>
      </section>
    );
  }

  const presetBtnStyle = (active: boolean) => ({
    fontSize: 14,
    fontWeight: 500 as const,
    padding: '10px 22px',
    borderRadius: 4,
    border: `1px solid ${active ? '#1A2E2E' : 'rgba(26,46,46,0.18)'}`,
    background: active ? '#1A2E2E' : 'transparent',
    color: active ? '#F5F1E8' : '#1A2E2E',
    cursor: 'pointer' as const,
    transition: 'all 200ms ease',
    letterSpacing: '0.01em',
  });

  return (
    <section
      id="seva"
      style={{
        background: '#EAE3D5',
        borderTop: '1px solid rgba(26,46,46,0.08)',
        padding: '80px 0',
      }}
    >
      <div
        style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
            Seva — Selfless Contribution
          </div>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(26px,3.5vw,38px)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#1A2E2E',
              marginBottom: 14,
            }}
          >
            Support the Mission
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(26,46,46,0.6)',
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            Your contribution enables us to host learning camps, preserve sacred
            manuscripts, and make traditional Sikh education accessible to all —
            freely and without condition.
          </p>
        </div>

        <div
          style={{
            background: '#fff',
            border: '1px solid rgba(194,163,107,0.2)',
            borderRadius: 4,
            padding: '36px 40px',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(26,46,46,0.45)',
              marginBottom: 12,
            }}
          >
            Choose an amount
          </div>

          <div
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}
          >
            {PRESETS.map((p) => (
              <button
                key={p}
                onClick={() => { setAmount(p); setCustom(''); }}
                style={presetBtnStyle(amount === p && !custom)}
              >
                ₹{p}
              </button>
            ))}
            <button
              onClick={() => { setAmount('custom'); setCustom(''); }}
              style={presetBtnStyle(amount === 'custom')}
            >
              Other
            </button>
          </div>

          {amount === 'custom' && (
            <div style={{ marginBottom: 16 }}>
              <input
                type="number"
                placeholder="Enter amount (₹)"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                style={{
                  fontSize: 14,
                  padding: '10px 14px',
                  border: '1px solid rgba(26,46,46,0.2)',
                  borderRadius: 4,
                  background: 'transparent',
                  color: '#1A2E2E',
                  width: 180,
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#C2A36B')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(26,46,46,0.2)')}
              />
            </div>
          )}

          {/* Monthly toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 28,
            }}
          >
            <button
              role="switch"
              aria-checked={monthly}
              onClick={() => setMonthly(!monthly)}
              style={{
                width: 36,
                height: 20,
                borderRadius: 20,
                cursor: 'pointer',
                background: monthly ? '#7FAF9B' : '#D9D0BD',
                position: 'relative',
                transition: 'background 200ms ease',
                flexShrink: 0,
                border: 'none',
                padding: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: '#fff',
                  top: 3,
                  left: monthly ? 19 : 3,
                  transition: 'left 200ms ease',
                }}
              />
            </button>
            <span style={{ fontSize: 13, color: 'rgba(26,46,46,0.65)' }}>
              Monthly seva — sustain this work every month
            </span>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '14px 32px',
              background: '#7FAF9B',
              color: '#0F2A2A',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              width: '100%',
              marginBottom: 12,
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#8FBFAB')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#7FAF9B')}
          >
            Contribute with Seva →
          </button>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(26,46,46,0.38)',
              textAlign: 'center',
              letterSpacing: '0.02em',
            }}
          >
            Secure payment · No account required · Cancel anytime
          </div>
        </div>

        {/* Transparency */}
        <div
          style={{
            background: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(194,163,107,0.18)',
            borderRadius: 4,
            padding: '22px 28px',
            marginTop: 20,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(26,46,46,0.5)',
              marginBottom: 12,
            }}
          >
            Your seva supports
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))',
              gap: 10,
            }}
          >
            {[
              'Hosting learning camps and retreats',
              'Preserving and digitising Sikh manuscripts',
              'Building accessible learning for all',
            ].map((item) => (
              <div
                key={item}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: '#C2A36B',
                    marginTop: 7,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: 'rgba(26,46,46,0.65)',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
