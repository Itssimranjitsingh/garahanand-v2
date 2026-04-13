import { expect, takeSnapshot, test } from '@chromatic-com/playwright';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({
      page,
    }, testInfo) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', {
          name: 'Sacred history, thoughtfully shared',
        })
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio page', async ({
      page,
    }, testInfo) => {
      await page.goto('/portfolio');

      await expect(
        page.getByText('Here you can explore a growing collection', {
          exact: false,
        })
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the about page', async ({
      page,
    }, testInfo) => {
      await page.goto('/about');

      await expect(
        page.getByText('Garah Anand exists to preserve', { exact: false })
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the portfolio details page', async ({
      page,
    }, testInfo) => {
      await page.goto('/portfolio/2');

      await expect(
        page.getByText('This article is part of Garah Anand', { exact: false })
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });

    test('should take screenshot of the French homepage', async ({
      page,
    }, testInfo) => {
      await page.goto('/fr');

      await expect(
        page.getByRole('heading', {
          name: 'Une histoire sacrée, partagée avec soin',
        })
      ).toBeVisible();

      await takeSnapshot(page, testInfo);
    });
  });
});
