import { test, expect, paths, langs } from './fixtures/site';

for (const lang of langs) {
  test(`hero links point to the right destinations (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const hero = page.locator('.hero');
    await expect(hero.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/thiago8rocha');
    await expect(hero.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/thiago8rocha');
    await expect(hero.getByRole('link', { name: 'Email thiago8rocha@gmail.com' })).toHaveAttribute('href', 'mailto:thiago8rocha@gmail.com');
  });
}
