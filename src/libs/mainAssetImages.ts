import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const IMAGE_EXT = /\.(jpe?g|png|gif|webp)$/i;

export type MainAssetImage = {
  filename: string;
  /** Public URL path, safe for `next/image` `src`. */
  src: string;
};

/**
 * Lists image files in `public/assets/main` (sorted by filename).
 * Intended for server components only.
 *
 * @returns Filenames and public URL paths for each image.
 */
export function getMainAssetImages(): MainAssetImage[] {
  const dir = join(process.cwd(), 'public', 'assets', 'main');
  const names = readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile())
    .map((d) => d.name)
    .filter((n) => IMAGE_EXT.test(n))
    .toSorted((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

  return names.map((filename) => ({
    filename,
    src: `/assets/main/${encodeURIComponent(filename)}`,
  }));
}
