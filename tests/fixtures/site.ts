import { test as base, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export type Lang = 'en' | 'pt';
export const paths: Record<Lang, string> = { en: '/', pt: '/pt/' };
export const langs: Lang[] = ['en', 'pt'];

export const test = base.extend<{ audit: (page: Page) => Promise<void> }>({
  audit: async ({}, use) => {
    await use(async (page) => {
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const summary = results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }));
      expect(results.violations, JSON.stringify(summary, null, 2)).toEqual([]);
    });
  },
});

export { expect };
