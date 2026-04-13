import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { Env } from '@/libs/Env';

const builder = createImageUrlBuilder({
  projectId: Env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: Env.NEXT_PUBLIC_SANITY_DATASET,
});

/**
 * Builds a Sanity CDN URL for an image field, or returns null when the asset is missing.
 *
 * @param source Sanity image field value, or null when absent.
 * @returns Image URL builder chain, or null when there is no image.
 */
export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}

/**
 * Reads optional alt text from a Sanity image field value.
 *
 * @param image Value returned for a Sanity image field.
 * @returns Non-empty alt text when present.
 */
export function readSanityImageAlt(image: unknown): string | undefined {
  if (image === null || typeof image !== 'object') {
    return undefined;
  }
  if (!('alt' in image)) {
    return undefined;
  }
  const value = Reflect.get(image, 'alt');
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}
