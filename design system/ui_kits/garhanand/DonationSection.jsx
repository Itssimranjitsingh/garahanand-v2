// DonationSection.jsx — GarhAnand
const { useState } = React;

const DonationSection = () => {
  const [amount, setAmount] = useState('1101');
  const [custom, setCustom] = useState('');
  const [monthly, setMonthly] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const presets = ['501', '1101', '2101'];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ background: 'var(--secondary)', padding: '80px 0' }}>
        <div
          className="container"
          style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}
        >
          <div
            style={{
              fontSize: 40,
              fontFamily: 'var(--font-gu)',
              color: 'var(--accent)',
              marginBottom: 20,
            }}
          >
            ੴ
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 36,
              fontWeight: 300,
              color: 'var(--text-dark)',
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
            style={{
              width: 40,
              height: 1,
              background: 'var(--accent)',
              margin: '0 auto 24px',
              opacity: 0.5,
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-display)',
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
            onClick={() => {
              setSubmitted(false);
            }}
            style={{
              marginTop: 32,
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 500,
              padding: '9px 20px',
              background: 'transparent',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
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

  const btnBase = {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 500,
    padding: '10px 22px',
    borderRadius: 4,
    border: '1px solid rgba(26,46,46,0.18)',
    background: 'transparent',
    color: 'var(--text-dark)',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    letterSpacing: '0.01em',
  };

  return (
    <section
      style={{
        background: 'var(--secondary)',
        borderTop: '1px solid rgba(26,46,46,0.08)',
        padding: '80px 0',
      }}
    >
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
            Seva — Selfless Contribution
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px,3.5vw,38px)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text-dark)',
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
          {/* Preset amounts */}
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
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              marginBottom: 16,
            }}
          >
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setAmount(p);
                  setCustom('');
                }}
                style={{
                  ...btnBase,
                  background:
                    amount === p && !custom
                      ? 'var(--text-dark)'
                      : 'transparent',
                  color:
                    amount === p && !custom ? '#F5F1E8' : 'var(--text-dark)',
                  borderColor:
                    amount === p && !custom
                      ? 'var(--text-dark)'
                      : 'rgba(26,46,46,0.18)',
                }}
              >
                ₹{p}
              </button>
            ))}
            <button
              onClick={() => {
                setAmount('custom');
                setCustom('');
              }}
              style={{
                ...btnBase,
                background:
                  amount === 'custom' ? 'var(--text-dark)' : 'transparent',
                color: amount === 'custom' ? '#F5F1E8' : 'var(--text-dark)',
                borderColor:
                  amount === 'custom'
                    ? 'var(--text-dark)'
                    : 'rgba(26,46,46,0.18)',
              }}
            >
              Other
            </button>
          </div>

          {/* Custom input */}
          {amount === 'custom' && (
            <div style={{ marginBottom: 16 }}>
              <input
                type="number"
                placeholder="Enter amount (₹)"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  padding: '10px 14px',
                  border: '1px solid rgba(26,46,46,0.2)',
                  borderRadius: 4,
                  background: 'transparent',
                  color: 'var(--text-dark)',
                  width: 180,
                  outline: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
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
            <div
              onClick={() => {
                setMonthly(!monthly);
              }}
              style={{
                width: 36,
                height: 20,
                borderRadius: 20,
                cursor: 'pointer',
                background: monthly ? 'var(--cta)' : '#D9D0BD',
                position: 'relative',
                transition: 'background 200ms ease',
                flexShrink: 0,
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
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              />
            </div>
            <span style={{ fontSize: 13, color: 'rgba(26,46,46,0.65)' }}>
              Monthly seva — sustain this work every month
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '14px 32px',
              background: 'var(--cta)',
              color: 'var(--primary)',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              width: '100%',
              marginBottom: 12,
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = 'var(--cta-hover)')
            }
            onMouseLeave={(e) => (e.target.style.background = 'var(--cta)')}
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
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: 'var(--accent)',
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
};

Object.assign(window, { DonationSection });
