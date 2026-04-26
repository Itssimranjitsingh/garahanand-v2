'use client';

import Image from 'next/image';
import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

type GalleryCategory = 'gurbani' | 'tradition' | 'camps' | 'online';

type GalleryData = {
  title: string;
  images: string[];
};

const ACTIVITIES = [
  {
    category: 'gurbani',
    image: '/assets/main/gw3.jpeg',
    title: 'Gurbani Writing',
    description:
      'Encouraging Sikhs to read and write Gurbani in Larivaar, forming a new generation of Likhari.',
  },
  {
    category: 'tradition',
    image: '/assets/main/pt0.jpeg',
    title: 'Preserving Tradition',
    description:
      'Conserving Puratan Beerh Sahibs and Pothis so the living memory of the Panth is protected with care.',
  },
  {
    category: 'camps',
    image: '/assets/main/cw0.jpeg',
    title: 'Camps & Workshops',
    description:
      'Conducting regular camps and hands-on workshops rooted in practice, sangat, and disciplined study.',
  },
  {
    category: 'online',
    image: '/assets/main/ol2.jpeg',
    title: 'Online Learning',
    description:
      'Running online book clubs and one-to-one Akharkaari classes for Sikhs learning from around the world.',
  },
] satisfies {
  category: GalleryCategory;
  image: string;
  title: string;
  description: string;
}[];

const GALLERY_DATA: Record<GalleryCategory, GalleryData> = {
  gurbani: {
    title: 'Gurbani Writing Photos',
    images: Array.from({ length: 12 }, (_, i) => `/assets/main/gw${i}.jpeg`),
  },
  tradition: {
    title: 'Preserving Tradition Photos',
    images: Array.from({ length: 10 }, (_, i) => `/assets/main/pt${i}.jpeg`),
  },
  camps: {
    title: 'Camps & Workshops Photos',
    images: Array.from({ length: 19 }, (_, i) => `/assets/main/cw${i}.jpeg`),
  },
  online: {
    title: 'Online Learning Photos',
    images: Array.from({ length: 7 }, (_, i) => `/assets/main/ol${i}.jpeg`),
  },
};

export function HomeActivities() {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory | null>(null);
  const selectedGallery =
    selectedCategory === null ? null : GALLERY_DATA[selectedCategory];

  return (
    <section
      id="activities"
      style={{
        background: '#EAE3D5',
        borderTop: '1px solid rgba(26,46,46,0.08)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            maxWidth: 680,
            margin: '0 auto 48px',
          }}
        >
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
            Core Activities
          </div>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(26px,3.5vw,38px)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#1A2E2E',
              marginBottom: 16,
            }}
          >
            Regenerating Ancient Practice
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(26,46,46,0.65)',
              margin: 0,
            }}
          >
            Dedicated to preserving Sikh learning, strengthening Larivaar
            literacy, and bridging the distance between modern life and living
            tradition.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))',
            gap: 20,
          }}
        >
          {ACTIVITIES.map((activity) => (
            <button
              type="button"
              key={activity.title}
              onClick={() => {
                setSelectedCategory(activity.category);
              }}
              style={{
                background: 'rgba(255,255,255,0.58)',
                border:
                  selectedCategory === activity.category
                    ? '1px solid rgba(194,163,107,0.58)'
                    : '1px solid rgba(194,163,107,0.18)',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'border-color 200ms ease, transform 200ms ease',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: 180,
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(194,163,107,0.12)',
                }}
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    filter: 'saturate(0.82)',
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10,30,30,0.12)',
                  }}
                />
              </div>
              <div style={{ padding: '22px 24px 24px' }}>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: '#1A2E2E',
                    marginBottom: 10,
                  }}
                >
                  {activity.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: 'rgba(26,46,46,0.66)',
                    margin: 0,
                  }}
                >
                  {activity.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedGallery !== null && (
          <div
            style={{
              marginTop: 48,
              borderTop: '1px solid rgba(194,163,107,0.18)',
              paddingTop: 32,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                flexWrap: 'wrap',
                marginBottom: 22,
              }}
            >
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 'clamp(22px,3vw,30px)',
                  fontWeight: 300,
                  color: '#1A2E2E',
                  margin: 0,
                }}
              >
                {selectedGallery.title}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(null);
                }}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(26,46,46,0.22)',
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

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))',
                gap: 14,
              }}
            >
              {selectedGallery.images.map((image, index) => (
                <figure
                  key={image}
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    margin: 0,
                    overflow: 'hidden',
                    borderRadius: 4,
                    border: '1px solid rgba(194,163,107,0.16)',
                    background: 'rgba(255,255,255,0.35)',
                  }}
                >
                  <Image
                    src={image}
                    alt={`${selectedGallery.title} ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    style={{
                      objectFit: 'cover',
                      filter: 'saturate(0.88)',
                    }}
                  />
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
