import { enUS, hiIN } from '@clerk/localizations';
import type { LocalizationResource } from '@clerk/shared/types';
import type { LocalePrefixMode } from 'next-intl/routing';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'Garah Anand',
  i18n: {
    locales: ['en', 'hi', 'pa'],
    defaultLocale: 'en',
    localePrefix,
  },
};

/** Clerk does not ship Punjabi UI strings; Punjabi routes use English for auth screens. */
const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  hi: hiIN,
  pa: enUS,
};

export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};
