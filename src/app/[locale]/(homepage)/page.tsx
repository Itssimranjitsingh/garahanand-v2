import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { HomeNavbar } from '@/components/home/HomeNavbar';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeLarivaar } from '@/components/home/HomeLarivaar';
import { HomeCamps } from '@/components/home/HomeCamps';
import { HomeTeacher } from '@/components/home/HomeTeacher';
import { HomeSeva } from '@/components/home/HomeSeva';
import { HomeFooter } from '@/components/home/HomeFooter';

type Props = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: 'GarhAnand — Sacred Larivaar Learning',
  description:
    'GarhAnand teaches the ancient art of Larivaar — continuous Gurmukhi script — as a path toward deeper understanding of Gurbani.',
};

export default async function HomePage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div style={{ background: '#0F2A2A' }}>
      <HomeNavbar />
      <HomeHero />
      <HomeLarivaar />
      <HomeCamps />
      <HomeTeacher />
      <HomeSeva />
      <HomeFooter />
    </div>
  );
}
