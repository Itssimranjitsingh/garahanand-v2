'use client';

import { useTranslations } from 'next-intl';
import type { ChangeEventHandler } from 'react';
import { useLayoutEffect, useState } from 'react';
import {
  DEFAULT_PAPER_TEXTURE,
  PAPER_TEXTURE_DATA_ATTR,
  PAPER_TEXTURE_FILES,
  PAPER_TEXTURE_STORAGE_KEY,
  isPaperTextureFile,
  paperTextureDisplayId,
} from '@/libs/PaperTexture';
import type { PaperTextureFile } from '@/libs/PaperTexture';

export const PaperTextureSwitcher = () => {
  const t = useTranslations('PaperTextureSwitcher');
  const [texture, setTexture] = useState<PaperTextureFile>(
    DEFAULT_PAPER_TEXTURE
  );

  useLayoutEffect(() => {
    const fromDom = document.documentElement.getAttribute(
      PAPER_TEXTURE_DATA_ATTR
    );
    if (fromDom && isPaperTextureFile(fromDom)) {
      setTexture(fromDom);
    }
  }, []);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const next = event.target.value;
    if (!isPaperTextureFile(next)) {
      return;
    }
    document.documentElement.setAttribute(PAPER_TEXTURE_DATA_ATTR, next);
    localStorage.setItem(PAPER_TEXTURE_STORAGE_KEY, next);
    setTexture(next);
  };

  return (
    <select
      value={texture}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-hidden focus-visible:ring-3"
      aria-label={t('change_background')}
    >
      {PAPER_TEXTURE_FILES.map((file) => (
        <option key={file} value={file}>
          {t('option_label', { id: paperTextureDisplayId(file) })}
        </option>
      ))}
    </select>
  );
};
