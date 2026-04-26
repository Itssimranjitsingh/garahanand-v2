import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableBlogBody } from '@/components/blog/PortableBlogBody';
import { HomeFooter } from '@/components/home/HomeFooter';
import { HomeNavbar } from '@/components/home/HomeNavbar';
import { Link } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';
import { client } from '@/sanity/client';
import { readSanityImageAlt, urlForImage } from '@/sanity/image';
import { BLOG_POST_BY_SLUG_QUERY, BLOG_SLUGS_QUERY } from '@/sanity/queries';
import type { BlogPostDetail } from '@/sanity/types';

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

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
    <div style={{ background: '#0F2A2A' }}>
      <HomeNavbar />
      <main style={{ paddingTop: 64 }}>
        <article>
          <header
            style={{
              background: '#0F2A2A',
              borderBottom: '1px solid rgba(194,163,107,0.10)',
              padding: '56px 0 72px',
            }}
          >
            <div
              style={{
                maxWidth: 960,
                margin: '0 auto',
                padding: '0 32px',
              }}
            >
              <Link
                href="/blog/"
                style={{
                  color: '#C2A36B',
                  display: 'inline-block',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  marginBottom: 34,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {t('back_to_blog')}
              </Link>
              <p
                style={{
                  color: '#7FAF9B',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  margin: '0 0 14px',
                  textTransform: 'uppercase',
                }}
              >
                {dateFormatter.format(new Date(post.publishedAt))}
              </p>
              <h1
                style={{
                  color: '#F5F1E8',
                  fontFamily: FONT_DISPLAY,
                  fontSize: 'clamp(38px,6vw,72px)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                  margin: 0,
                  maxWidth: 840,
                }}
              >
                {post.title}
              </h1>
              {post.excerpt ? (
                <p
                  style={{
                    color: 'rgba(245,241,232,0.62)',
                    fontSize: 17,
                    lineHeight: 1.8,
                    margin: '22px 0 0',
                    maxWidth: 680,
                  }}
                >
                  {post.excerpt}
                </p>
              ) : null}
            </div>
          </header>

          <section
            style={{
              background: '#EAE3D5',
              borderTop: '1px solid rgba(26,46,46,0.08)',
              padding: hero ? '0 0 96px' : '72px 0 96px',
            }}
          >
            <div
              style={{
                maxWidth: 960,
                margin: '0 auto',
                padding: '0 32px',
              }}
            >
              {hero ? (
                <figure
                  style={{
                    border: '1px solid rgba(194,163,107,0.18)',
                    borderRadius: 4,
                    margin: 0,
                    overflow: 'hidden',
                    position: 'relative',
                    top: -44,
                  }}
                >
                  <Image
                    alt={imageAlt}
                    height={630}
                    priority
                    src={hero}
                    width={1200}
                    sizes="(max-width: 768px) 100vw, 60rem"
                    style={{
                      display: 'block',
                      filter: 'saturate(0.86)',
                      height: 'auto',
                      maxHeight: '34rem',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                </figure>
              ) : null}

              <div
                style={{
                  background: 'rgba(255,255,255,0.42)',
                  border: '1px solid rgba(194,163,107,0.16)',
                  borderRadius: 4,
                  marginTop: hero ? -12 : 0,
                  padding: 'clamp(28px,5vw,56px)',
                }}
              >
                <PortableBlogBody value={post.body} />
              </div>
            </div>
          </section>
        </article>
      </main>
      <HomeFooter />
    </div>
  );
}
