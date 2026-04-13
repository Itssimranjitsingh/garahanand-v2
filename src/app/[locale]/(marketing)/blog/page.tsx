import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/libs/I18nNavigation';
import { client } from '@/sanity/client';
import { readSanityImageAlt, urlForImage } from '@/sanity/image';
import { BLOG_POSTS_QUERY } from '@/sanity/queries';
import type { BlogPostListItem } from '@/sanity/types';

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export const revalidate = 3600;

function dateLocaleForAppLocale(locale: string) {
  if (locale === 'hi') {
    return 'hi-IN';
  }
  if (locale === 'pa') {
    return 'pa-Guru-IN';
  }
  return 'en-GB';
}

export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'BlogPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function BlogPage(props: BlogPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'BlogPage',
  });

  const posts = await client.fetch<BlogPostListItem[]>(BLOG_POSTS_QUERY);
  const dateFormatter = new Intl.DateTimeFormat(
    dateLocaleForAppLocale(locale),
    {
      dateStyle: 'long',
    }
  );

  if (posts.length === 0) {
    return (
      <>
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          {t('heading')}
        </h1>
        <p className="mb-6 text-gray-800">{t('intro')}</p>
        <p className="text-gray-700">{t('empty_message')}</p>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">{t('heading')}</h1>
      <p className="mb-10 text-gray-800">{t('intro')}</p>

      <ul className="flex flex-col gap-10">
        {posts.map((post) => {
          const thumb = urlForImage(post.mainImage)
            ?.width(640)
            .height(400)
            .fit('crop')
            .url();
          const alt =
            readSanityImageAlt(post.mainImage) ??
            t('post_image_alt', { title: post.title });

          return (
            <li key={post._id}>
              <article className="border-b border-gray-300 pb-10 last:border-b-0">
                {thumb ? (
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="mb-4 block overflow-hidden"
                  >
                    <Image
                      alt={alt}
                      className="h-auto max-h-64 w-full object-cover"
                      height={400}
                      src={thumb}
                      width={640}
                      sizes="(max-width: 768px) 100vw, 42rem"
                    />
                  </Link>
                ) : null}

                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="border-none text-gray-900 hover:text-gray-700"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 text-sm text-gray-600">
                  {dateFormatter.format(new Date(post.publishedAt))}
                </p>
                {post.excerpt ? (
                  <p className="mb-0 text-gray-800">{post.excerpt}</p>
                ) : null}
                <p className="mt-4">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="border-none text-gray-800 underline decoration-gray-400 underline-offset-2 hover:text-gray-900"
                  >
                    {t('read_post')}
                  </Link>
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
