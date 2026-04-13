/** LocalStorage key for the selected public `/assets/paper_texture/` file. */
export const PAPER_TEXTURE_STORAGE_KEY = 'garhan-paper-texture';

/** `html` data attribute used with `global.css` background rules. */
export const PAPER_TEXTURE_DATA_ATTR = 'data-paper-texture';

/** Available paper textures under `public/assets/paper_texture/`. */
export const PAPER_TEXTURE_FILES = [
  '01_paper_texture.jpg',
  '03_paper_texture.jpg',
  '07_paper_texture.jpg',
  '09_paper_texture.jpg',
  '16_paper_texture.jpg',
  '189_paper_texture.jpg',
  '27_paper_texture.jpg',
] as const;

export type PaperTextureFile = (typeof PAPER_TEXTURE_FILES)[number];

export const DEFAULT_PAPER_TEXTURE: PaperTextureFile = '01_paper_texture.jpg';

const paperTextureSet = new Set<string>(PAPER_TEXTURE_FILES);

/**
 * Returns whether `value` is a known paper texture filename.
 *
 * @param value - Candidate filename.
 * @returns True when `value` is a member of `PAPER_TEXTURE_FILES`.
 */
export function isPaperTextureFile(value: string): value is PaperTextureFile {
  return paperTextureSet.has(value);
}

/**
 * Extracts the numeric or catalog id segment from a texture filename (e.g. `189_paper_texture.jpg` → `189`).
 *
 * @param file - Known paper texture filename.
 * @returns Id segment used for display labels.
 */
export function paperTextureDisplayId(file: PaperTextureFile): string {
  return file.replace('_paper_texture.jpg', '');
}

/**
 * Builds an inline script for `next/script` `beforeInteractive`: applies stored texture to `document.documentElement`
 * before paint. Unknown `localStorage` values are ignored.
 *
 * @returns Minified script source.
 */
export function getPaperTextureInlineInitScript(): string {
  const allowed = JSON.stringify([...PAPER_TEXTURE_FILES]);
  const key = JSON.stringify(PAPER_TEXTURE_STORAGE_KEY);
  const attr = JSON.stringify(PAPER_TEXTURE_DATA_ATTR);
  return `(function(){try{var k=${key};var a=${allowed};var v=localStorage.getItem(k);if(v&&a.indexOf(v)!==-1)document.documentElement.setAttribute(${attr},v);}catch(e){}})();`;
}
