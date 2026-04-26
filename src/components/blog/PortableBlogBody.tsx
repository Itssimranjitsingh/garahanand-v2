import type { PortableTextComponents } from 'next-sanity';
import { PortableText } from 'next-sanity';
import type { BlogPostDetail } from '@/sanity/types';

const components: PortableTextComponents = {
  block: {
    normal: (props) => (
      <p className="mb-6 text-[18px] leading-[1.8] text-[rgba(26,46,46,0.72)]">
        {props.children}
      </p>
    ),
    h2: (props) => (
      <h2 className="mt-12 mb-5 font-heading text-3xl font-normal text-[#1A2E2E]">
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="mt-10 mb-4 font-heading text-2xl font-normal text-[#1A2E2E]">
        {props.children}
      </h3>
    ),
    blockquote: (props) => (
      <blockquote className="my-8 border-l border-[rgba(194,163,107,0.45)] pl-6 font-heading text-2xl leading-[1.65] font-light text-[rgba(26,46,46,0.76)] italic">
        {props.children}
      </blockquote>
    ),
  },
  marks: {
    link: (props) => {
      const hrefRaw = props.value?.href;
      const href = typeof hrefRaw === 'string' ? hrefRaw : '#';
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="text-[#8A6A2F] underline decoration-[rgba(194,163,107,0.45)] underline-offset-4 hover:text-[#1A2E2E]"
          {...(external
            ? { rel: 'noreferrer noopener', target: '_blank' }
            : {})}
        >
          {props.children}
        </a>
      );
    },
  },
  list: {
    bullet: (props) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-[18px] leading-[1.8] text-[rgba(26,46,46,0.72)]">
        {props.children}
      </ul>
    ),
    number: (props) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-[18px] leading-[1.8] text-[rgba(26,46,46,0.72)]">
        {props.children}
      </ol>
    ),
  },
};

/**
 * Renders Sanity portable text for blog posts with site-appropriate typography.
 *
 * @param props Portable text blocks from Sanity.
 * @returns Portable text rendered as HTML.
 */
export function PortableBlogBody(props: { value: BlogPostDetail['body'] }) {
  return <PortableText components={components} value={props.value} />;
}
