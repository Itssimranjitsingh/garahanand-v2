'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const PRESETS = ['501', '1101', '2101'];
const WHATSAPP_RECEIPT_URL = 'https://wa.me/919115551699';

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

export function HomeSeva() {
  const t = useTranslations('HomeSeva');
  const supports = [t('supports.0'), t('supports.1'), t('supports.2')];
  const [amount, setAmount] = useState('1101');
  const [custom, setCustom] = useState('');
  const [monthly, setMonthly] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section id="seva" style={{ background: '#EAE3D5', padding: '80px 0' }}>
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
            {t('success_title')}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: 'rgba(26,46,46,0.65)',
              marginBottom: 24,
            }}
          >
            {t('success_message')}
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
            &quot;{t('success_quote')}&quot;
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
              {t('success_quote_source')}
            </span>
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
            }}
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
            {t('return')}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="seva"
      style={{
        background: '#EAE3D5',
        borderTop: '1px solid rgba(26,46,46,0.08)',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>
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
              marginBottom: 14,
            }}
          >
            {t('title')}
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
            {t('description')}
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
            {t('choose_amount')}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              marginBottom: 16,
            }}
          >
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setAmount(p);
                  setCustom('');
                }}
                style={presetBtnStyle(amount === p && !custom)}
              >
                ₹{p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setAmount('custom');
                setCustom('');
              }}
              style={presetBtnStyle(amount === 'custom')}
            >
              {t('other_amount')}
            </button>
          </div>

          {amount === 'custom' && (
            <div style={{ marginBottom: 16 }}>
              <input
                type="number"
                placeholder={t('amount_placeholder')}
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                }}
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
                onBlur={(e) =>
                  (e.target.style.borderColor = 'rgba(26,46,46,0.2)')
                }
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
              type="button"
              role="switch"
              aria-checked={monthly}
              onClick={() => {
                setMonthly(!monthly);
              }}
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
              {t('monthly_label')}
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
              alignItems: 'center',
              border: '1px solid rgba(194,163,107,0.18)',
              borderRadius: 4,
              padding: 20,
              marginBottom: 28,
              background: 'rgba(234,227,213,0.35)',
            }}
          >
            <div style={{ minWidth: 0 }}>
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 22,
                  fontWeight: 400,
                  color: '#1A2E2E',
                  margin: '0 0 14px',
                }}
              >
                {t('bank_heading')}
              </h3>
              <dl
                style={{
                  display: 'grid',
                  gap: 12,
                  margin: 0,
                  fontSize: 14,
                  color: 'rgba(26,46,46,0.72)',
                }}
              >
                <div>
                  <dt style={{ color: 'rgba(26,46,46,0.48)' }}>
                    {t('account_name_label')}
                  </dt>
                  <dd style={{ margin: 0, color: '#1A2E2E' }}>
                    {t('account_name_value')}
                  </dd>
                </div>
                <div>
                  <dt style={{ color: 'rgba(26,46,46,0.48)' }}>
                    {t('account_number_label')}
                  </dt>
                  <dd
                    style={{
                      margin: 0,
                      color: '#1A2E2E',
                      fontFamily: 'monospace',
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {t('account_number_value')}
                  </dd>
                </div>
                <div>
                  <dt style={{ color: 'rgba(26,46,46,0.48)' }}>
                    {t('ifsc_label')}
                  </dt>
                  <dd
                    style={{
                      margin: 0,
                      color: '#1A2E2E',
                      fontFamily: 'monospace',
                    }}
                  >
                    {t('ifsc_value')}
                  </dd>
                </div>
              </dl>
              <a
                href={WHATSAPP_RECEIPT_URL}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  display: 'inline-block',
                  marginTop: 16,
                  fontSize: 13,
                  color: '#1A2E2E',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(26,46,46,0.35)',
                  textUnderlineOffset: 3,
                }}
              >
                {t('whatsapp_receipt')}
              </a>
            </div>

            <figure
              style={{
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  width: '100%',
                  maxWidth: 220,
                }}
              >
                <Image
                  src="/assets/others/qr.jpeg"
                  alt={t('qr_alt')}
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </figure>
          </div>

          <button
            type="button"
            onClick={() => {
              setSubmitted(true);
            }}
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
            {t('submit')} →
          </button>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(26,46,46,0.38)',
              textAlign: 'center',
              letterSpacing: '0.02em',
            }}
          >
            {t('payment_note')}
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
            {t('supports_heading')}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))',
              gap: 10,
            }}
          >
            {supports.map((item) => (
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
