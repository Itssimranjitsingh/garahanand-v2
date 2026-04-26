'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { ChangeEventHandler } from 'react';
import { usePathname, useRouter } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = (props: { tone?: 'light' | 'dark' }) => {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const isDark = props.tone === 'dark';

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newLocale = event.target.value;

    if (newLocale === locale) {
      return;
    }

    const { search } = window.location;
    router.push(`${pathname}${search}`, { locale: newLocale, scroll: false });
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-hidden focus-visible:ring-3"
      style={
        isDark
          ? {
              background: 'transparent',
              borderColor: 'rgba(245,241,232,0.35)',
              color: '#F5F1E8',
            }
          : undefined
      }
      aria-label={t('change_language')}
    >
      {routing.locales.map((elt) => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
