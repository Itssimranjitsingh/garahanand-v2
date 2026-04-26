'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

export function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        background: scrolled ? 'rgba(10,30,30,0.97)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(194,163,107,0.12)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition:
          'background 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: FONT_DISPLAY,
          fontSize: 20,
          fontWeight: 400,
          color: '#F5F1E8',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          letterSpacing: '0.02em',
        }}
      >
        <span style={{ color: '#C2A36B', fontSize: 22 }}>ੴ</span>
        GarhAnand
      </Link>

      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 28,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {['Learn', 'Camps', 'Texts', 'About'].map((label) => (
          <li key={label} className="hidden sm:block">
            <a
              href={`#${label.toLowerCase()}`}
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'rgba(245,241,232,0.6)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#F5F1E8')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(245,241,232,0.6)')
              }
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#seva"
            style={{
              fontFamily: 'var(--font-eb-garamond), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '8px 18px',
              background: '#7FAF9B',
              color: '#0F2A2A',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = '#8FBFAB')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = '#7FAF9B')
            }
          >
            Seva
          </a>
        </li>
      </ul>
    </nav>
  );
}
