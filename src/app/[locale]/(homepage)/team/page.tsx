import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { HomeFooter } from '@/components/home/HomeFooter';
import { HomeNavbar } from '@/components/home/HomeNavbar';
import { TeamMembers } from '@/components/team/TeamMembers';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

type TeamPageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'Team — GarhAnand',
  description:
    'Meet the GarhAnand team serving the preservation and teaching of Larivaar Gurmukhi.',
};

export default async function TeamPage(props: TeamPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div style={{ background: '#0F2A2A' }}>
      <HomeNavbar />
      <main style={{ paddingTop: 64 }}>
        <section
          style={{
            background: '#0F2A2A',
            borderBottom: '1px solid rgba(194,163,107,0.10)',
            padding: '96px 0 80px',
          }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
            <div style={{ maxWidth: 720 }}>
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
                Our team
              </div>
              <h1
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 'clamp(40px,6vw,72px)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#F5F1E8',
                  marginBottom: 20,
                }}
              >
                The sangat behind GarhAnand
              </h1>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: 'rgba(245,241,232,0.62)',
                  maxWidth: 600,
                  margin: 0,
                }}
              >
                GarhAnand is carried by sevadar, teachers, and students working
                together to preserve Larivaar learning and strengthen the
                traditions of the Panth.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            background: '#EAE3D5',
            borderBottom: '1px solid rgba(26,46,46,0.08)',
            padding: '80px 0',
          }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
            <TeamMembers />
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
