'use client';

import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';

const TEAM_MEMBERS = [
  'Simranjeet Singh Jathedar',
  'Kamaldeep Singh',
  'Azad Kamboj',
  'Ishmeet Kaur',
  'Inderjeet Singh',
  'Nitjap Kaur',
  'Divya Kalwani',
];

export function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))',
          gap: 20,
        }}
      >
        {TEAM_MEMBERS.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => {
              setSelectedMember(name);
            }}
            style={{
              background: '#fff',
              border:
                selectedMember === name
                  ? '1px solid rgba(194,163,107,0.45)'
                  : '1px solid rgba(26,46,46,0.10)',
              borderRadius: 4,
              cursor: 'pointer',
              overflow: 'hidden',
              padding: 0,
              textAlign: 'left',
              transition: 'border-color 200ms ease',
            }}
          >
            <div
              style={{
                aspectRatio: '4 / 5',
                background: 'rgba(15,42,42,0.08)',
                borderBottom: '1px solid rgba(26,46,46,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                aria-hidden
                style={{
                  fontFamily: FONT_GU,
                  fontSize: 56,
                  color: 'rgba(194,163,107,0.34)',
                  lineHeight: 1,
                }}
              >
                ੴ
              </span>
            </div>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#7FAF9B',
                  marginBottom: 8,
                }}
              >
                Sevadar
              </div>
              <h2
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: '#1A2E2E',
                  marginBottom: 8,
                }}
              >
                {name}
              </h2>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: 'rgba(26,46,46,0.6)',
                  margin: 0,
                }}
              >
                Select to read more about their seva.
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedMember === null ? null : (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(10,30,30,0.72)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <button
            type="button"
            aria-label="Close team member details"
            onClick={() => {
              setSelectedMember(null);
            }}
            style={{
              position: 'absolute',
              inset: 0,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          />
          <section
            aria-labelledby="team-member-dialog-title"
            aria-modal="true"
            role="dialog"
            style={{
              background: '#fff',
              border: '1px solid rgba(194,163,107,0.22)',
              borderRadius: 4,
              maxWidth: 720,
              position: 'relative',
              width: '100%',
              padding: '28px 32px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#7FAF9B',
                    marginBottom: 8,
                  }}
                >
                  Team member
                </div>
                <h2
                  id="team-member-dialog-title"
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 'clamp(24px,3vw,32px)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: '#1A2E2E',
                    marginBottom: 12,
                  }}
                >
                  {selectedMember}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: 'rgba(26,46,46,0.66)',
                    maxWidth: 560,
                    margin: 0,
                  }}
                >
                  Detailed seva, background, and role information will be added
                  here.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedMember(null);
                }}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(26,46,46,0.18)',
                  borderRadius: 4,
                  color: 'rgba(26,46,46,0.65)',
                  cursor: 'pointer',
                  fontSize: 12,
                  letterSpacing: '0.05em',
                  padding: '8px 14px',
                  textTransform: 'uppercase',
                }}
              >
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
