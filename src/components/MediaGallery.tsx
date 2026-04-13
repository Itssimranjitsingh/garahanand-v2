'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { MainAssetImage } from '@/libs/mainAssetImages';

export const MediaGallery = (props: { images: readonly MainAssetImage[] }) => {
  const t = useTranslations('GalleryPage');
  const [activeFilename, setActiveFilename] = useState<string | null>(null);

  const activeIndex = activeFilename
    ? props.images.findIndex((img) => img.filename === activeFilename)
    : -1;
  const active = activeIndex >= 0 ? props.images[activeIndex] : undefined;

  const goPrev = () => {
    if (activeIndex <= 0) {
      return;
    }
    const prev = props.images[activeIndex - 1];
    if (prev) {
      setActiveFilename(prev.filename);
    }
  };

  const goNext = () => {
    if (activeIndex < 0 || activeIndex >= props.images.length - 1) {
      return;
    }
    const next = props.images[activeIndex + 1];
    if (next) {
      setActiveFilename(next.filename);
    }
  };

  const close = () => {
    setActiveFilename(null);
  };

  useEffect(() => {
    if (!activeFilename) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveFilename(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [activeFilename]);

  return (
    <>
      <ul className="grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-4">
        {props.images.map((img) => (
          <li key={img.filename}>
            <button
              type="button"
              onClick={() => {
                setActiveFilename(img.filename);
              }}
              className="group w-full border border-gray-300 bg-white/40 text-left transition-colors duration-300 ease-out hover:bg-white/70"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={t('thumbnail_alt', { name: img.filename })}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-opacity duration-300 ease-out group-hover:opacity-95"
                />
              </div>
              <span className="block truncate px-2 py-2 text-base text-gray-800">
                {img.filename}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t('lightbox_label')}
        >
          <button
            type="button"
            className="absolute inset-0 bg-stone-900/80"
            onClick={close}
            aria-label={t('close_backdrop')}
          />
          <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col gap-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                className="border border-gray-400 bg-white/90 px-4 py-2 text-base text-gray-900 transition-colors duration-300 ease-out hover:bg-white"
              >
                {t('close')}
              </button>
            </div>
            <div className="relative min-h-[min(70vh,720px)] w-full flex-1">
              <Image
                src={active.src}
                alt={t('lightbox_alt', { name: active.filename })}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="max-w-full truncate text-center text-base text-stone-100">
              {active.filename}
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={activeIndex <= 0}
                className="border border-gray-400 bg-white/90 px-4 py-2 text-base text-gray-900 transition-colors duration-300 ease-out hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t('previous')}
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={activeIndex >= props.images.length - 1}
                className="border border-gray-400 bg-white/90 px-4 py-2 text-base text-gray-900 transition-colors duration-300 ease-out hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t('next')}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
