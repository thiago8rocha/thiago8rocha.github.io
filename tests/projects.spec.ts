import { test, expect, paths, langs } from './fixtures/site';

const cta: Record<string, string> = { en: 'View Case Study', pt: 'Ver estudo de caso' };
const placeholder: Record<string, string> = { en: 'Details coming soon.', pt: 'Detalhes em breve.' };

for (const lang of langs) {
  test(`project cards share the same size and have a case study button (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const cards = page.locator('.pcard');
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(2);
    const boxes = await cards.evaluateAll((els) => els.map((e) => { const r = e.getBoundingClientRect(); return { top: Math.round(r.top), width: Math.round(r.width), height: Math.round(r.height) }; }));
    expect(new Set(boxes.map((b) => b.width)).size).toBe(1);
    const rows = new Map<number, number[]>();
    boxes.forEach((b) => rows.set(b.top, [...(rows.get(b.top) ?? []), b.height]));
    rows.forEach((heights) => expect(new Set(heights).size).toBe(1));
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i).getByRole('link', { name: new RegExp(cta[lang]) })).toBeVisible();
      await expect(cards.nth(i).locator('.foot')).toBeVisible();
    }
  });

  test(`case study page opens from the card and links back (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const card = page.locator('.pcard').last();
    const title = (await card.getByRole('heading', { level: 3 }).innerText()).trim();
    await card.getByRole('link', { name: new RegExp(cta[lang]) }).click();
    await expect(page).toHaveURL(new RegExp(`${lang === 'pt' ? '/pt' : ''}/projects/[a-z0-9-]+/$`));
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
    await expect(page.getByText(placeholder[lang]).first()).toBeVisible();
    await page.locator('.case .back').click();
    await expect(page).toHaveURL(new RegExp(`${paths[lang]}#projects$`));
  });

  test(`case study pages cover every project and chain with next project (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const hrefs = await page.locator('.pcard .foot a').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
    for (const href of hrefs) {
      const res = await page.goto(href);
      expect(res?.status()).toBe(200);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.getByRole('navigation', { name: /Next project|Próximo projeto/ }).getByRole('link')).toBeVisible();
    }
  });

  test(`case study header navigates to home sections and switches language (${lang})`, async ({ page, isMobile }) => {
    const href = (await (await page.goto(paths[lang]), page.locator('.pcard .foot a').first()).getAttribute('href'))!;
    await page.goto(href);
    if (isMobile) await page.getByRole('button', { name: /Menu|Menu/ }).click();
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: /Experience|Experiência/ }).click();
    await expect(page).toHaveURL(new RegExp(`${paths[lang]}#experience$`));
    await page.goto(href);
    await page.locator('a[hreflang]').first().click();
    await expect(page).toHaveURL(new RegExp(`${lang === 'en' ? '/pt' : ''}/projects/[a-z0-9-]+/$`));
  });

  test(`professional case studies are complete and cards show badge and company (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const professional = page.locator('li[data-group="professional"] .pcard');
    expect(await professional.count()).toBe(3);
    await expect(professional.first().locator('.badges')).toHaveText(new RegExp(`^${lang === 'en' ? 'Professional' : 'Profissional'}\s*CarBigData$`));
    await expect(page.locator('.pcard .badges', { hasText: /Featured|Destaque|Personal|Pessoal/ })).toHaveCount(0);
    const hrefs = await professional.locator('.foot a').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
    for (const href of hrefs) {
      await page.goto(href);
      const text = await page.locator('main').innerText();
      expect(text).not.toContain(placeholder[lang]);
      expect(text).not.toContain('—');
      await expect(page.locator('.case-body .note').last()).toBeVisible();
    }
  });

  test(`CarBigData content has no Xray and no Zallpy (${lang})`, async ({ page }) => {
    await page.goto(paths[lang]);
    const job = page.locator('.job.current');
    await expect(job).toHaveCount(1);
    const jobText = await job.innerText();
    expect(jobText).not.toMatch(/Xray|Zallpy/);
    const card = await page.locator('.pcard', { hasText: 'Playwright MCP' }).innerText();
    expect(card).not.toMatch(/Xray|Zallpy/);
    await page.locator('.pcard', { hasText: 'Playwright MCP' }).getByRole('link').click();
    expect(await page.locator('main').innerText()).not.toMatch(/Xray|Zallpy/);
  });

  for (const theme of ['light', 'dark']) {
    test(`axe finds no violations on case study pages (${lang}, ${theme})`, async ({ page, audit }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto(paths[lang]);
      const hrefs = await page.locator('.pcard .foot a').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
      for (const href of hrefs) {
        await page.goto(href);
        await audit(page);
      }
    });
  }
}

test('desktop shows two cards per row', async ({ page, isMobile }) => {
  test.skip(isMobile, 'desktop layout only');
  await page.goto('/');
  const tops = await page.locator('.pcard').evaluateAll((els) => els.map((e) => Math.round(e.getBoundingClientRect().top)));
  expect(tops[0]).toBe(tops[1]);
  expect(tops[2]).toBeGreaterThan(tops[1]);
});
