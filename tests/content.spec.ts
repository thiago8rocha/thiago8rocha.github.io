import { test, expect, paths, langs } from './fixtures/site';

for (const lang of langs) {
  test(`no visible TODO markers (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    expect(await page.locator('body').innerText()).not.toMatch(/\bTODO\b/);
  });

  test(`no photo or avatar images (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    await expect(page.locator('img')).toHaveCount(0);
  });
}
