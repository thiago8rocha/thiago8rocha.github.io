import { test, expect, paths, langs } from './fixtures/site';

for (const lang of langs) {
  test(`resume button points to a valid PDF (${lang})`, async ({ page, request }) => {
    await page.goto(paths[lang]);
    const href = await page.locator('.hero').getByRole('link', { name: /PDF/ }).getAttribute('href');
    expect(href).toMatch(/\.pdf$/);
    const res = await request.get(href!);
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('pdf');
    expect((await res.body()).subarray(0, 5).toString()).toBe('%PDF-');
  });
}
