'use client';

import Image from 'next/image';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';

const CONTACT_LINKS = [
  { label: '+91 91155-51699', href: 'tel:+919115551699' },
  { label: '+1 (909)-760-9765', href: 'tel:+19097609765' },
  { label: 'garhhanand@gmail.com', href: 'mailto:garhhanand@gmail.com' },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/garhhanand?igsh=MXMzbngxcXd5YmI1eg%3D%3D&utm_source=qr',
    icon: (
      <svg aria-hidden fill="none" height="16" viewBox="0 0 24 24" width="16">
        <rect
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
          width="17"
          x="3.5"
          y="3.5"
        />
        <circle
          cx="12"
          cy="12"
          r="3.6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.4" cy="6.6" fill="currentColor" r="1.1" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@garhhanand',
    icon: (
      <svg aria-hidden fill="none" height="16" viewBox="0 0 24 24" width="16">
        <path
          d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="m10 9 5 3-5 3z" fill="currentColor" />
      </svg>
    ),
  },
];

export function HomeFooter() {
  return (
    <footer
      id="contact"
      className="py-12 sm:py-16"
      style={{
        background: '#0A1E1E',
        borderTop: '1px solid rgba(194,163,107,0.10)',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div
          className="mb-10 grid grid-cols-1 gap-8 sm:mb-14 sm:gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(180px,1fr)_minmax(120px,0.6fr)]"
          style={{
            alignItems: 'start',
          }}
        >
          {/* Brand */}
          <div className="min-w-0">
            <Image
              src="/assets/others/logo.png"
              alt="GarhAnand logo"
              width={56}
              height={56}
              sizes="56px"
              style={{
                width: 56,
                height: 56,
                objectFit: 'contain',
                marginBottom: 14,
              }}
            />
            <div
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 22,
                fontWeight: 400,
                color: '#F5F1E8',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
              }}
            >
              <span style={{ color: '#C2A36B' }}>ੴ</span> GarhAnand
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: 'rgba(245,241,232,0.45)',
                maxWidth: 360,
                margin: '0 0 12px',
              }}
            >
              A sacred learning platform dedicated to the preservation and
              teaching of Larivaar Gurmukhi in the Sikh tradition.
            </p>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: 'rgba(245,241,232,0.45)',
                maxWidth: 360,
                marginBottom: 20,
              }}
            >
              Reviving the forgotten traditions of the Khalsa Panth for a
              principle-driven future.
            </p>
            <div
              style={{
                fontFamily: FONT_GU,
                fontSize: 14,
                color: 'rgba(194,163,107,0.4)',
                lineHeight: 2,
                wordSpacing: '-0.45em',
              }}
            >
              ਸਤਿਨਾਮੁਕਰਤਾਪੁਰਖੁ
            </div>
          </div>

          <div className="min-w-0">
            <div
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C2A36B',
                marginBottom: 16,
                opacity: 0.7,
              }}
            >
              Get in Touch
            </div>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {CONTACT_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      display: 'inline-block',
                      fontSize: 13,
                      color: 'rgba(245,241,232,0.45)',
                      textDecoration: 'none',
                      transition: 'color 200ms ease',
                      maxWidth: '100%',
                      overflowWrap: 'anywhere',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = 'rgba(245,241,232,0.8)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'rgba(245,241,232,0.45)')
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <div
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C2A36B',
                marginBottom: 16,
                opacity: 0.7,
              }}
            >
              Follow
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#F5F1E8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 200ms ease, color 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#C2A36B';
                    e.currentTarget.style.color = '#0A1E1E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#F5F1E8';
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-start justify-start gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: 'rgba(194,163,107,0.10)',
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: 'rgba(245,241,232,0.25)',
              letterSpacing: '0.03em',
            }}
          >
            © {new Date().getFullYear()} GarhAnand. All rights reserved.
          </div>
          <div
            className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{
              maxWidth: '100%',
            }}
          >
            <LocaleSwitcher tone="dark" />
            <div
              style={{
                fontSize: 11,
                color: 'rgba(245,241,232,0.25)',
                letterSpacing: '0.03em',
              }}
            >
              Built with care for the Sikh tradition.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
