import { test, expect, paths, langs } from './fixtures/site';

for (const lang of langs) {
  test(`home responds 200 with the right heading and language (${lang})`, async ({ page }) => {
    const res = await page.goto(paths[lang]);
    expect(res?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: 'Thiago Oliveira Rocha' })).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
  });
}

for (const url of ['/robots.txt', '/sitemap-index.xml', '/sitemap-0.xml']) {
  test(`${url} responds 200`, async ({ request }) => {
    expect((await request.get(url)).status()).toBe(200);
  });
}
