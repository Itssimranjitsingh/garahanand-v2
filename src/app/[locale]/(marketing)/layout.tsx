import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { PaperTextureSwitcher } from '@/components/PaperTextureSwitcher';
import { Link } from '@/libs/I18nNavigation';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('about_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('portfolio_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('gallery_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/blog/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('blog_link')}
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/sign-in/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('sign_up_link')}
            </Link>
          </li>

          <li>
            <PaperTextureSwitcher />
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="max-w-full min-w-0 px-3 py-5 text-xl sm:px-4 [&_p]:my-6">
        {props.children}
      </div>
    </BaseTemplate>
  );
}
