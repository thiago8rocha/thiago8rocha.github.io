import type { FeaturedProject, Project } from '../types';

export const featured: FeaturedProject = {
  title: 'Playwright automation architecture, built from scratch',
  kind: ['Automotive data', 'Fraud prevention'],
  summary: 'A layered automation framework for a data and image analysis platform, using Playwright BDD and the Feature Actions pattern, run by a Jenkins pipeline.',
  role: 'Defined the architecture and standards, implemented the framework, built the Jenkins trigger and pipeline, and took part in adopting Xray.',
  testTypes: ['API', 'BFF', 'Frontend', 'Visual'],
  tools: ['Playwright', 'Playwright BDD', 'TypeScript', 'Jenkins', 'Xray', 'Google Chat'],
  // TODO: review the layers below, they are a conceptual draft built from the resume wording only.
  layers: [
    { name: 'Feature files (BDD)', detail: 'Business-readable scenarios' },
    { name: 'Feature Actions', detail: 'Reusable business actions behind each step' },
    { name: 'Test layers', detail: 'API, BFF, Frontend and Visual checks' },
    { name: 'Core utilities', detail: 'Shared helpers, data and configuration' },
    { name: 'Jenkins pipeline', detail: 'Shared libraries and Google Chat notifications' },
  ],
  confidentialityNote: 'Descriptions are conceptual. No employer code, data, internal URLs or proprietary details are shown.',
};

export const projects: Project[] = [
  {
    title: 'MyGarage, BMW US/CA',
    kind: ['Automotive', 'Web and mobile'],
    summary: 'Quality of the MyGarage web and mobile apps for BMW, MINI, Toyota and Rolls-Royce in the United States and Canada.',
    role: 'Lead QA: test strategy in Xray, defect standards, accessibility and cross-browser/mobile validation.',
    testTypes: ['Exploratory', 'Regression', 'Functional', 'Accessibility', 'Cross-browser'],
    tools: ['Xray', 'BrowserStack', 'Axe Expert', 'Lighthouse', 'Jira'],
  },
  {
    title: 'Wake Experience automation',
    kind: ['E-commerce'],
    summary: 'Automation architecture shared by multiple teams of an e-commerce platform.',
    role: 'Designed and implemented the framework and led QA process standardization.',
    testTypes: ['UI', 'API', 'Regression'],
    tools: ['Robot Framework', 'Postman', 'Swagger'],
  },
  {
    title: 'Bookshelf, Playwright + TypeScript',
    kind: ['Personal project'],
    summary: '237 E2E tests across 3 browsers, visual regression, accessibility with axe-core and a CI/CD pipeline with Allure Report.',
    role: 'Author: framework, tests and pipeline.',
    testTypes: ['E2E', 'Visual', 'Accessibility'],
    tools: ['Playwright', 'TypeScript', 'axe-core', 'Allure', 'GitHub Actions'],
    link: { label: 'GitHub', href: 'https://github.com/thiago8rocha/bookshelf-playwright-tests' },
  },
  {
    title: 'Bookshelf, Robot Framework + K6',
    kind: ['Personal project'],
    summary: 'Full-stack automation suite: REST API, UI E2E, WCAG 2.1 and load, spike, soak and stress performance, with CI/CD.',
    role: 'Author: suites, performance scenarios and pipeline.',
    testTypes: ['API', 'E2E', 'Accessibility', 'Performance'],
    tools: ['Robot Framework', 'K6', 'GitHub Actions'],
    link: { label: 'GitHub', href: 'https://github.com/thiago8rocha/bookshelf-robotframework-tests' },
  },
  // TODO: add the personal Android apps in Kotlin (names, summary, links).
];
