'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-gray-300">
          <div className="flex flex-col gap-6 pt-16 pb-8 sm:flex-row sm:items-center sm:gap-8">
            <Link href="/" className="mx-auto shrink-0 sm:mx-0">
              <Image
                src="/assets/others/logo.png"
                alt={t('logo_alt')}
                width={112}
                height={112}
                sizes="(max-width: 640px) 96px, 112px"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                priority
              />
            </Link>
            <div className="min-w-0 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
              <h2 className="text-xl whitespace-pre-line">
                {t('description')}
              </h2>
            </div>
          </div>

          <div className="flex justify-between">
            <nav aria-label={t('main_navigation_label')}>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {t('footer_text', {
            year: new Date().getFullYear(),
            name: AppConfig.name,
          })}
        </footer>
      </div>
    </div>
  );
};
