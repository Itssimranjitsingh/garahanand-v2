import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableBlogBody } from '@/components/blog/PortableBlogBody';
import { Link } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';
import { client } from '@/sanity/client';
import { readSanityImageAlt, urlForImage } from '@/sanity/image';
import { BLOG_POST_BY_SLUG_QUERY, BLOG_SLUGS_QUERY } from '@/sanity/queries';
import type { BlogPostDetail } from '@/sanity/types';

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const revalidate = 3600;
export const dynamicParams = true;

function dateLocaleForAppLocale(locale: string) {
  if (locale === 'hi') {
    return 'hi-IN';
  }
  if (locale === 'pa') {
    return 'pa-Guru-IN';
  }
  return 'en-GB';
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(BLOG_SLUGS_QUERY);
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata(
  props: BlogPostPageProps
): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const post = await client.fetch<BlogPostDetail | null>(
    BLOG_POST_BY_SLUG_QUERY,
    {
      slug,
    }
  );

  if (!post) {
    const t = await getTranslations({
      locale,
      namespace: 'BlogSlugPage',
    });
    return {
      title: t('not_found_title'),
      description: t('not_found_description'),
    };
  }

  return {
    title: post.title,
    description: post.excerpt ?? post.title,
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'BlogSlugPage',
  });

  const post = await client.fetch<BlogPostDetail | null>(
    BLOG_POST_BY_SLUG_QUERY,
    {
      slug,
    }
  );

  if (!post) {
    notFound();
  }

  const dateFormatter = new Intl.DateTimeFormat(
    dateLocaleForAppLocale(locale),
    {
      dateStyle: 'long',
    }
  );

  const hero = urlForImage(post.mainImage)
    ?.width(1200)
    .height(630)
    .fit('crop')
    .url();
  const imageAlt =
    readSanityImageAlt(post.mainImage) ??
    t('hero_image_alt', { title: post.title });

  return (
    <article>
      <p className="mb-6">
        <Link
          href="/blog/"
          className="border-none text-gray-700 underline decoration-gray-400 underline-offset-2 hover:text-gray-900"
        >
          {t('back_to_blog')}
        </Link>
      </p>

      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-sm text-gray-600">
          {dateFormatter.format(new Date(post.publishedAt))}
        </p>
      </header>

      {hero ? (
        <figure className="mb-10">
          <Image
            alt={imageAlt}
            className="h-auto max-h-[28rem] w-full object-cover"
            height={630}
            priority
            src={hero}
            width={1200}
            sizes="(max-width: 768px) 100vw, 42rem"
          />
        </figure>
      ) : null}

      {post.excerpt ? (
        <p className="mb-8 text-lg text-gray-800">{post.excerpt}</p>
      ) : null}

      <PortableBlogBody value={post.body} />
    </article>
  );
}
