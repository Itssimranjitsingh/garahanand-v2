import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { HomeActivities } from '@/components/home/HomeActivities';
import { HomeCamps } from '@/components/home/HomeCamps';
import { HomeFooter } from '@/components/home/HomeFooter';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeLarivaar } from '@/components/home/HomeLarivaar';
import { HomeMissions } from '@/components/home/HomeMissions';
import { HomeNavbar } from '@/components/home/HomeNavbar';
import { HomeSeva } from '@/components/home/HomeSeva';
import { HomeTeacher } from '@/components/home/HomeTeacher';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'HomePage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function HomePage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div style={{ background: '#0F2A2A' }}>
      <HomeNavbar />
      <HomeHero />
      <HomeLarivaar />
      <HomeActivities />
      <HomeMissions />
      <HomeCamps />
      <HomeTeacher />
      <HomeSeva />
      <HomeFooter />
    </div>
  );
}
