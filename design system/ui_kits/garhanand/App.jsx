// App.jsx — GarhAnand UI Kit
const { useState } = React;

function App() {
  const [page, setPage] = useState('home');

  const handleNav = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar activePage={page} onNav={handleNav} />
      {page === 'home' && (
        <>
          <Hero onNav={handleNav} />
          <LarivaarSection />
          <CampsSection />
          <TeacherSection />
          <DonationSection />
        </>
      )}
      {page === 'learn' && (
        <div style={{ paddingTop: 64 }}>
          <CoursesSection onNav={handleNav} />
          <LarivaarSection />
        </div>
      )}
      {page === 'camps' && (
        <div style={{ paddingTop: 64 }}>
          <CampsSection />
        </div>
      )}
      {page === 'about' && (
        <div style={{ paddingTop: 64 }}>
          <TeacherSection />
          <section style={{ background: 'var(--primary)', padding: '80px 0' }}>
            <div className="container" style={{ maxWidth: 640 }}>
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
                Philosophy
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 36,
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-light)',
                  marginBottom: 24,
                }}
              >
                Traditional, not Academic
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                  marginBottom: 16,
                }}
              >
                GarhAnand occupies a distinct space — neither the purely
                devotional approach of a Gurdwara education programme, nor the
                detached analysis of an academic institution. We learn Larivaar
                because the text demands it, and because the tradition preserved
                it for a reason.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                }}
              >
                Our approach honours the lineage of Gianis and scholars who
                maintained this form of reading across centuries of change,
                while remaining open and accessible to students at every level
                of familiarity with Gurbani.
              </p>
            </div>
          </section>
        </div>
      )}
      {page === 'donate' && (
        <div style={{ paddingTop: 64 }}>
          <section
            style={{ background: 'var(--primary)', padding: '64px 0 40px' }}
          >
            <div className="container" style={{ maxWidth: 640 }}>
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
                Seva
              </div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px,5vw,52px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--text-light)',
                  marginBottom: 16,
                }}
              >
                Support the Continuation of Learning
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: 'var(--text-muted)',
                }}
              >
                GarhAnand operates entirely through the generosity of those who
                believe this knowledge deserves to be preserved and shared.
                There are no tuition fees, no paywalls. Your contribution makes
                it possible.
              </p>
            </div>
          </section>
          <DonationSection />
        </div>
      )}
      <Footer onNav={handleNav} />
    </div>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
