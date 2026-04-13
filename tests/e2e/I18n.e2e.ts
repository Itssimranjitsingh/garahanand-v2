import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Language switching', () => {
    test('should switch from English to Hindi using the homepage language control', async ({
      page,
    }) => {
      await page.goto('/');

      await expect(
        page.getByRole('heading', {
          name: 'Sacred history, thoughtfully shared',
        })
      ).toBeVisible();

      await page.getByLabel('Change language').selectOption('hi');

      await expect(
        page.getByRole('heading', {
          name: 'पवित्र इतिहास, विचारपूर्वक प्रस्तुत',
        })
      ).toBeVisible();
    });

    test('should switch from English to Punjabi using the homepage language control', async ({
      page,
    }) => {
      await page.goto('/');

      await page.getByLabel('Change language').selectOption('pa');

      await expect(
        page.getByRole('heading', {
          name: 'ਪਵਿੱਤਰ ਇਤਿਹਾਸ, ਸੋਚ-ਸਮਝ ਕੇ ਸਾਂਝਾ',
        })
      ).toBeVisible();
    });

    test('should load Hindi Clerk strings on the sign-in page when the path uses the hi locale', async ({
      page,
    }) => {
      await page.goto('/sign-in');

      await expect(page.getByText('Email address')).toBeVisible();

      await page.goto('/hi/sign-in');

      await expect(page.getByText(/ईमेल/)).toBeVisible();
    });
  });
});
