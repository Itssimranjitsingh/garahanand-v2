import { describe, expect, it } from 'vitest';
import {
  DEFAULT_PAPER_TEXTURE,
  isPaperTextureFile,
  paperTextureDisplayId,
} from './PaperTexture';
import type { PaperTextureFile } from './PaperTexture';

describe('PaperTexture', () => {
  describe('isPaperTextureFile', () => {
    it('accepts known filenames', () => {
      expect(isPaperTextureFile(DEFAULT_PAPER_TEXTURE)).toBe(true);
      expect(isPaperTextureFile('189_paper_texture.jpg')).toBe(true);
    });

    it('rejects unknown strings', () => {
      expect(isPaperTextureFile('')).toBe(false);
      expect(isPaperTextureFile('evil.jpg')).toBe(false);
      expect(isPaperTextureFile('01_paper_texture.png')).toBe(false);
    });
  });

  describe('paperTextureDisplayId', () => {
    it('strips the shared suffix from filenames', () => {
      expect(
        paperTextureDisplayId('01_paper_texture.jpg' as PaperTextureFile)
      ).toBe('01');
      expect(
        paperTextureDisplayId('189_paper_texture.jpg' as PaperTextureFile)
      ).toBe('189');
    });
  });
});
