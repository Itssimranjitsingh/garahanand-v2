// Navbar.jsx — GarhAnand
const { useState, useEffect } = React;

function Navbar({ activePage, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const el = document.querySelector('#root');
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const navStyle = {
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
    boxShadow: scrolled ? '0 1px 4px rgba(0,0,0,0.2)' : 'none',
    transition:
      'background 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
  };

  const links = ['Learn', 'Camps', 'Texts', 'About'];

  return (
    <nav style={navStyle}>
      <div
        onClick={() => onNav('home')}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 20,
          fontWeight: 400,
          color: 'var(--text-light)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          letterSpacing: '0.02em',
        }}
      >
        <span style={{ color: 'var(--accent)', fontSize: 22 }}>ੴ</span>
        GarhAnand
      </div>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 28,
          listStyle: 'none',
        }}
      >
        {links.map((l) => (
          <li key={l}>
            <a
              onClick={(e) => {
                e.preventDefault();
                onNav(l.toLowerCase());
              }}
              href="#"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color:
                  activePage === l.toLowerCase()
                    ? 'var(--accent)'
                    : 'rgba(245,241,232,0.6)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#F5F1E8')}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  activePage === l.toLowerCase()
                    ? 'var(--accent)'
                    : 'rgba(245,241,232,0.6)')
              }
            >
              {l}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={() => onNav('donate')}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '8px 18px',
              background: 'var(--cta)',
              color: 'var(--primary)',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              transition: 'background 200ms ease',
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = 'var(--cta-hover)')
            }
            onMouseLeave={(e) => (e.target.style.background = 'var(--cta)')}
          >
            Seva
          </button>
        </li>
      </ul>
    </nav>
  );
}

Object.assign(window, { Navbar });
