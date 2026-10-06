import type { SkillGroup } from '../types';

// TODO: confirm which items are used day to day (daily: true).
export const skills: SkillGroup[] = [
  { group: 'Automation', items: [{ name: 'Playwright', daily: true }, { name: 'Playwright BDD', daily: true }, { name: 'TypeScript', daily: true }, { name: 'Robot Framework' }, { name: 'K6' }, { name: 'Cucumber' }] },
  { group: 'CI/CD', items: [{ name: 'Jenkins', daily: true }, { name: 'GitHub Actions', daily: true }] },
  { group: 'Test types', items: [{ name: 'Exploratory', daily: true }, { name: 'Regression', daily: true }, { name: 'Functional' }, { name: 'Black-box' }, { name: 'API' }, { name: 'Accessibility' }, { name: 'Performance and load' }] },
  { group: 'Management and tools', items: [{ name: 'Xray', daily: true }, { name: 'Jira', daily: true }, { name: 'BrowserStack' }, { name: 'Postman' }, { name: 'Swagger' }, { name: 'Axe Expert' }, { name: 'Lighthouse' }] },
  { group: 'Databases', items: [{ name: 'MySQL' }, { name: 'Oracle' }, { name: 'DB2' }, { name: 'SQL Server' }, { name: 'MongoDB' }] },
  { group: 'Methods', items: [{ name: 'Scrum' }, { name: 'Kanban' }, { name: 'Risk and impact analysis' }, { name: 'Continuous process improvement' }, { name: 'Requirements analysis' }] },
];
