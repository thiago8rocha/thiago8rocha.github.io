import { test, expect, paths } from './fixtures/site';

test('menu anchors scroll to their sections', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole('heading', { level: 2, name: 'Projects' })).toBeInViewport();
});

test('show more expands and collapses extra experience bullets', async ({ page }) => {
  await page.goto('/');
  const extra = page.getByText('Helped define Xray as the team');
  const more = page.getByRole('button', { name: 'Show more' }).first();
  await expect(more).toHaveAttribute('aria-expanded', 'false');
  await expect(extra).toBeHidden();
  await more.click();
  await expect(extra).toBeVisible();
  const less = page.getByRole('button', { name: 'Show less' });
  await expect(less).toHaveAttribute('aria-expanded', 'true');
  await less.click();
  await expect(extra).toBeHidden();
});

test('project filters show only matching projects', async ({ page }) => {
  await page.goto('/');
  const group = page.getByRole('group', { name: 'Filter projects' });
  const wake = page.getByRole('heading', { name: 'Wake Experience automation' });
  const garage = page.getByRole('heading', { name: 'MyGarage, BMW US/CA' });
  await group.getByRole('button', { name: 'E-commerce' }).click();
  await expect(group.getByRole('button', { name: 'E-commerce' })).toHaveAttribute('aria-pressed', 'true');
  await expect(wake).toBeVisible();
  await expect(garage).toBeHidden();
  await group.getByRole('button', { name: 'All' }).click();
  await expect(garage).toBeVisible();
});

test('language switch goes to Portuguese and back', async ({ page }) => {
  await page.goto(paths.en);
  await page.getByRole('link', { name: /Português/ }).click();
  await expect(page).toHaveURL(/\/pt\/$/);
  await expect(page.getByRole('heading', { level: 2, name: 'Experiência' })).toBeVisible();
  await page.getByRole('link', { name: /English/ }).click();
  await expect(page).toHaveURL(/localhost:\d+\/$/);
});

test('theme toggle switches and persists after reload', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  const before = await html.getAttribute('data-theme');
  await page.getByRole('button', { name: 'Toggle dark theme' }).click();
  const after = await html.getAttribute('data-theme');
  expect(after).not.toBe(before);
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', after!);
});
