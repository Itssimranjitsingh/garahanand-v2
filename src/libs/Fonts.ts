import {
  Cormorant_Garamond,
  EB_Garamond,
  Noto_Serif_Gurmukhi,
  Playfair_Display,
} from 'next/font/google';

/** Display font for the v2 dark homepage — lighter and more classical than Playfair. */
const fontCormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

/** Headings (Latin / Devanagari routes). */
const fontPlayfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

/** Body text for English and Hindi. */
const fontEbGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

/** Punjabi (Gurmukhi) locale; use for `lang="pa"` routes. */
const fontNotoGurmukhi = Noto_Serif_Gurmukhi({
  subsets: ['gurmukhi', 'latin'],
  variable: '--font-noto-gurmukhi',
  display: 'swap',
});

/** Apply to `<html>` so CSS can reference `var(--font-*)`. */
export const fontCssVariableClasses = [
  fontCormorant.variable,
  fontPlayfair.variable,
  fontEbGaramond.variable,
  fontNotoGurmukhi.variable,
].join(' ');
