import type { PortableTextComponents } from 'next-sanity';
import { PortableText } from 'next-sanity';
import type { BlogPostDetail } from '@/sanity/types';

const components: PortableTextComponents = {
  block: {
    normal: (props) => <p className="text-gray-800">{props.children}</p>,
    h2: (props) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold text-gray-900">
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="mt-8 mb-3 text-xl font-bold text-gray-900">
        {props.children}
      </h3>
    ),
    blockquote: (props) => (
      <blockquote className="mb-6 border-l-4 border-gray-400 pl-4 text-gray-800 italic">
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
          className="text-gray-800 underline decoration-gray-400 underline-offset-2 hover:text-gray-900"
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
      <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-800">
        {props.children}
      </ul>
    ),
    number: (props) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-gray-800">
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
