'use client';

import Image from 'next/image';
import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';

type TeamMember = {
  name: string;
  role: string;
  summary: string;
  bio: string[];
  image?: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
};

const TEAM_MEMBERS = [
  {
    name: 'Jathedar Simranjeet Singh',
    role: 'Guiding light',
    summary: 'Guiding GarhAnand through Gurbani writing, tradition, and seva.',
    bio: [
      'Jathedar Simranjeet Singh guides GarhAnand with a deep commitment to Gurbani writing, Larivaar learning, and the preservation of Sikh manuscript traditions.',
      'His seva continues to inspire the sangat, teachers, and likharis connected with the organization.',
    ],
    image: '/assets/others/jathedar-simranjeet-singh.jpeg',
    imagePosition: 'top',
  },
  {
    name: 'Kamaldeep Singh',
    role: 'Technical sevadar',
    summary:
      'Data analyst supporting GarhAnand through technical seva since 2021.',
    bio: [
      'Kamaldeep Singh works in the corporate sector as a data analyst.',
      'He has been a dedicated member of GarhAnand since 2021, offering volunteer support for the organization’s technical needs and helping strengthen the seva behind its mission.',
    ],
    image: '/assets/main/kamaldeep.jpeg',
    imageFit: 'contain',
    imagePosition: 'top',
  },
  {
    name: 'Azad Kamboj',
    role: 'Camp coordination',
    summary:
      'Legal professional supporting camps, coordination, and technical seva.',
    bio: [
      'Azad Kamboj is from Chandigarh and holds degrees in commerce and law. He currently serves in the government sector as a legal assistant.',
      'Associated with GarhAnand since 2019, he has helped organize the last five camps and continues to volunteer across coordination, operations, and technical support for the organization.',
    ],
  },
  {
    name: 'Ishmeet Kaur',
    role: 'Sevadar',
    summary: 'Serving GarhAnand and its mission with steady dedication.',
    bio: [
      'Ishmeet Kaur serves with GarhAnand as part of the sangat supporting the organization’s ongoing mission.',
      'More details about her seva and journey will be added soon.',
    ],
  },
  {
    name: 'Inderjeet Singh',
    role: 'Volunteer sevadar',
    summary:
      'Medical doctor in Germany and dedicated GarhAnand volunteer since 2021.',
    bio: [
      'Dr. Inderjeet Singh is a medical doctor currently residing in Germany, where he is advancing his career in Internal Medicine with a focused specialization in Cardiology.',
      'Since 2021, he has been a dedicated member of GarhAnand, volunteering his time and energy in support of the organization’s mission and activities.',
    ],
  },
  {
    name: 'Nitjap Kaur',
    role: 'Founding member',
    summary:
      'Founding member supporting camps, universities, and the Akharkari mission.',
    bio: [
      'Nitjap Kaur is from Jalandhar. She has completed her MBA and currently works in the corporate sector.',
      'Associated with the organization and its likharis since 2016, she is a founding member who has witnessed GarhAnand’s journey and growth under Maharaj’s blessings.',
      'She believes Akharkari, the writing of Gurbani, is a divine art that happens only through Maharaj’s kirpa and grace. For her, Maharaj guides the sevadar by holding their hand and making them write.',
      'Her role has remained seva-driven, from volunteering at camps in gurdwaras and universities to contributing to the organization’s wider vision and mission.',
    ],
  },
  {
    name: 'Divya Kalwani',
    role: 'Social media seva',
    summary:
      'Commerce graduate managing GarhAnand social media seva since 2024.',
    bio: [
      'Divya Kalwani was born and raised in Mumbai. She is a commerce graduate and currently helps manage her family business alongside her father.',
      'Since 2024, she has supported GarhAnand by managing the organization’s social media presence, helping share its seva, updates, and mission with the wider sangat.',
    ],
  },
] satisfies TeamMember[];

function getMemberByName(name: string) {
  return TEAM_MEMBERS.find((member) => member.name === name) ?? null;
}

export function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const selectedMemberDetails =
    selectedMember === null ? null : getMemberByName(selectedMember);

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))',
          gap: 20,
        }}
      >
        {TEAM_MEMBERS.map((member) => (
          <button
            key={member.name}
            type="button"
            onClick={() => {
              setSelectedMember(member.name);
            }}
            style={{
              background: '#fff',
              border:
                selectedMember === member.name
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
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {member.image === undefined ? (
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
              ) : (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  style={{
                    objectFit: member.imageFit ?? 'cover',
                    objectPosition: member.imagePosition ?? 'center',
                    filter: 'saturate(0.85)',
                  }}
                />
              )}
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
                {member.role}
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
                {member.name}
              </h2>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: 'rgba(26,46,46,0.6)',
                  margin: 0,
                }}
              >
                {member.summary}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedMemberDetails === null ? null : (
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
              maxHeight: 'calc(100vh - 48px)',
              maxWidth: 860,
              overflowY: 'auto',
              position: 'relative',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  selectedMemberDetails.image === undefined
                    ? '1fr'
                    : 'repeat(auto-fit, minmax(240px, 1fr))',
              }}
            >
              {selectedMemberDetails.image === undefined ? null : (
                <div
                  style={{
                    minHeight: 320,
                    position: 'relative',
                    background: '#0F2A2A',
                  }}
                >
                  <Image
                    src={selectedMemberDetails.image}
                    alt={selectedMemberDetails.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    style={{
                      objectFit: selectedMemberDetails.imageFit ?? 'cover',
                      objectPosition:
                        selectedMemberDetails.imagePosition ?? 'center',
                      filter: 'saturate(0.85)',
                    }}
                  />
                </div>
              )}
              <div
                style={{
                  padding: '28px 32px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    alignItems: 'flex-start',
                    marginBottom: 18,
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
                      {selectedMemberDetails.role}
                    </div>
                    <h2
                      id="team-member-dialog-title"
                      style={{
                        fontFamily: FONT_DISPLAY,
                        fontSize: 'clamp(24px,3vw,32px)',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        color: '#1A2E2E',
                        margin: 0,
                      }}
                    >
                      {selectedMemberDetails.name}
                    </h2>
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

                {selectedMemberDetails.bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: 'rgba(26,46,46,0.66)',
                      maxWidth: 560,
                      margin: '0 0 14px',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
