import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { MediaGallery } from '@/components/MediaGallery';
import { getMainAssetImages } from '@/libs/mainAssetImages';

type GalleryPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: GalleryPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'GalleryPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function GalleryPage(props: GalleryPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'GalleryPage',
  });

  const images = getMainAssetImages();

  return (
    <>
      <h1 className="mb-4 font-heading text-3xl text-gray-900">
        {t('heading')}
      </h1>
      <p className="mb-8 max-w-3xl">{t('intro')}</p>

      {images.length === 0 ? (
        <p className="text-gray-700">{t('empty')}</p>
      ) : (
        <MediaGallery images={images} />
      )}
    </>
  );
}
