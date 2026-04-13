import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: IndexPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <>
      <h2 className="mt-5 text-2xl font-bold">{t('index_section_title')}</h2>
      <p className="text-base">{t('index_paragraph_1')}</p>
      <p className="text-base">{t('index_paragraph_2')}</p>
      <ul className="mt-3 list-disc pl-6 text-base">
        <li>{t('index_point_1')}</li>
        <li>{t('index_point_2')}</li>
        <li>{t('index_point_3')}</li>
      </ul>
    </>
  );
}
