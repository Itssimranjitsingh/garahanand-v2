import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { HomeFooter } from '@/components/home/HomeFooter';
import { HomeNavbar } from '@/components/home/HomeNavbar';
import { Link } from '@/libs/I18nNavigation';
import { client } from '@/sanity/client';
import { readSanityImageAlt, urlForImage } from '@/sanity/image';
import { BLOG_POSTS_QUERY } from '@/sanity/queries';
import type { BlogPostListItem } from '@/sanity/types';

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';

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

function BlogHero(props: { heading: string; intro: string }) {
  return (
    <section
      style={{
        background: '#0F2A2A',
        borderBottom: '1px solid rgba(194,163,107,0.10)',
        padding: '96px 0 84px',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ maxWidth: 720 }}>
          <div
            style={{
              color: '#7FAF9B',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.14em',
              marginBottom: 12,
              textTransform: 'uppercase',
            }}
          >
            GarhAnand
          </div>
          <h1
            style={{
              color: '#F5F1E8',
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(42px,6vw,76px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            {props.heading}
          </h1>
          <p
            style={{
              color: 'rgba(245,241,232,0.62)',
              fontSize: 17,
              lineHeight: 1.8,
              margin: 0,
              maxWidth: 620,
            }}
          >
            {props.intro}
          </p>
        </div>
      </div>
    </section>
  );
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
      <div style={{ background: '#0F2A2A' }}>
        <HomeNavbar />
        <main style={{ paddingTop: 64 }}>
          <BlogHero heading={t('heading')} intro={t('intro')} />
          <section
            style={{
              background: '#EAE3D5',
              borderTop: '1px solid rgba(26,46,46,0.08)',
              padding: '72px 0 88px',
            }}
          >
            <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
              <p
                style={{
                  color: 'rgba(26,46,46,0.66)',
                  fontSize: 18,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {t('empty_message')}
              </p>
            </div>
          </section>
        </main>
        <HomeFooter />
      </div>
    );
  }

  return (
    <div style={{ background: '#0F2A2A' }}>
      <HomeNavbar />
      <main style={{ paddingTop: 64 }}>
        <BlogHero heading={t('heading')} intro={t('intro')} />

        <section
          style={{
            background: '#EAE3D5',
            borderTop: '1px solid rgba(26,46,46,0.08)',
            padding: '72px 0 96px',
          }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 32px' }}>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 22,
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {posts.map((post) => {
                const thumb = urlForImage(post.mainImage)
                  ?.width(720)
                  .height(460)
                  .fit('crop')
                  .url();
                const alt =
                  readSanityImageAlt(post.mainImage) ??
                  t('post_image_alt', { title: post.title });

                return (
                  <li key={post._id}>
                    <article
                      style={{
                        background: 'rgba(255,255,255,0.58)',
                        border: '1px solid rgba(194,163,107,0.18)',
                        borderRadius: 4,
                        height: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      {thumb ? (
                        <Link
                          href={`/blog/${post.slug}/`}
                          style={{
                            borderBottom: '1px solid rgba(194,163,107,0.12)',
                            display: 'block',
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            alt={alt}
                            height={460}
                            src={thumb}
                            width={720}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{
                              aspectRatio: '36 / 23',
                              display: 'block',
                              filter: 'saturate(0.86)',
                              height: 'auto',
                              objectFit: 'cover',
                              width: '100%',
                            }}
                          />
                        </Link>
                      ) : (
                        <div
                          aria-hidden
                          style={{
                            alignItems: 'center',
                            aspectRatio: '36 / 23',
                            background: '#0F2A2A',
                            borderBottom: '1px solid rgba(194,163,107,0.12)',
                            color: 'rgba(194,163,107,0.28)',
                            display: 'flex',
                            fontFamily: 'var(--font-noto-gurmukhi), sans-serif',
                            fontSize: 58,
                            justifyContent: 'center',
                          }}
                        >
                          ੴ
                        </div>
                      )}

                      <div style={{ padding: '24px 24px 26px' }}>
                        <p
                          style={{
                            color: '#7FAF9B',
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            margin: '0 0 10px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {dateFormatter.format(new Date(post.publishedAt))}
                        </p>
                        <h2
                          style={{
                            color: '#1A2E2E',
                            fontFamily: FONT_DISPLAY,
                            fontSize: 24,
                            fontWeight: 400,
                            letterSpacing: '-0.01em',
                            lineHeight: 1.2,
                            margin: '0 0 12px',
                          }}
                        >
                          <Link
                            href={`/blog/${post.slug}/`}
                            style={{ color: 'inherit', textDecoration: 'none' }}
                          >
                            {post.title}
                          </Link>
                        </h2>
                        {post.excerpt ? (
                          <p
                            style={{
                              color: 'rgba(26,46,46,0.66)',
                              fontSize: 15,
                              lineHeight: 1.7,
                              margin: '0 0 20px',
                            }}
                          >
                            {post.excerpt}
                          </p>
                        ) : null}
                        <Link
                          href={`/blog/${post.slug}/`}
                          style={{
                            color: '#C2A36B',
                            fontSize: 12,
                            fontWeight: 500,
                            letterSpacing: '0.06em',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                          }}
                        >
                          {t('read_post')}
                        </Link>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
