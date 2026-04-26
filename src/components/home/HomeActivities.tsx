'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

type GalleryCategory = 'gurbani' | 'tradition' | 'camps' | 'online';

type GalleryData = {
  title: string;
  images: string[];
};

type Activity = {
  category: GalleryCategory;
  image: string;
  title: string;
  description: string;
  gallery_title: string;
};

const GALLERY_IMAGES: Record<GalleryCategory, string[]> = {
  gurbani: Array.from({ length: 12 }, (_, i) => `/assets/main/gw${i}.jpeg`),
  tradition: Array.from({ length: 10 }, (_, i) => `/assets/main/pt${i}.jpeg`),
  camps: Array.from({ length: 19 }, (_, i) => `/assets/main/cw${i}.jpeg`),
  online: Array.from({ length: 7 }, (_, i) => `/assets/main/ol${i}.jpeg`),
};

const getGalleryData = (
  activities: Activity[]
): Record<GalleryCategory, GalleryData> => ({
  gurbani: {
    title:
      activities.find((item) => item.category === 'gurbani')?.gallery_title ??
      '',
    images: GALLERY_IMAGES.gurbani,
  },
  tradition: {
    title:
      activities.find((item) => item.category === 'tradition')?.gallery_title ??
      '',
    images: GALLERY_IMAGES.tradition,
  },
  camps: {
    title:
      activities.find((item) => item.category === 'camps')?.gallery_title ?? '',
    images: GALLERY_IMAGES.camps,
  },
  online: {
    title:
      activities.find((item) => item.category === 'online')?.gallery_title ??
      '',
    images: GALLERY_IMAGES.online,
  },
});

export function HomeActivities() {
  const t = useTranslations('HomeActivities');
  const activities: Activity[] = [
    {
      category: 'gurbani',
      image: '/assets/main/gw3.jpeg',
      title: t('activities.0.title'),
      description: t('activities.0.description'),
      gallery_title: t('activities.0.gallery_title'),
    },
    {
      category: 'tradition',
      image: '/assets/main/pt0.jpeg',
      title: t('activities.1.title'),
      description: t('activities.1.description'),
      gallery_title: t('activities.1.gallery_title'),
    },
    {
      category: 'camps',
      image: '/assets/main/cw0.jpeg',
      title: t('activities.2.title'),
      description: t('activities.2.description'),
      gallery_title: t('activities.2.gallery_title'),
    },
    {
      category: 'online',
      image: '/assets/main/ol2.jpeg',
      title: t('activities.3.title'),
      description: t('activities.3.description'),
      gallery_title: t('activities.3.gallery_title'),
    },
  ];
  const galleryData = getGalleryData(activities);
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory | null>(null);
  const selectedGallery =
    selectedCategory === null ? null : galleryData[selectedCategory];

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
              marginBottom: 16,
            }}
          >
            {t('title')}
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'rgba(26,46,46,0.65)',
              margin: 0,
            }}
          >
            {t('description')}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))',
            gap: 20,
          }}
        >
          {activities.map((activity) => (
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
                {t('close_gallery')}
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
