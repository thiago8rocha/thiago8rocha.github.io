import type { SkillGroup } from '../types';

// TODO: confirm which items are used day to day (daily: true).
export const skills: SkillGroup[] = [
  { group: 'Automação', items: [{ name: 'Playwright', daily: true }, { name: 'Playwright BDD', daily: true }, { name: 'Feature Actions', daily: true }, { name: 'Robot Framework' }, { name: 'K6' }, { name: 'Cucumber' }] },
  { group: 'CI/CD', items: [{ name: 'Jenkins', daily: true }, { name: 'GitHub Actions', daily: true }, { name: 'Allure Report' }] },
  { group: 'Tipos de teste', items: [{ name: 'Exploratório', daily: true }, { name: 'Regressão', daily: true }, { name: 'Funcional' }, { name: 'Caixa-preta' }, { name: 'API' }, { name: 'Acessibilidade' }, { name: 'Performance e carga' }] },
  { group: 'Gestão e ferramentas', items: [{ name: 'Xray', daily: true }, { name: 'Jira', daily: true }, { name: 'BrowserStack' }, { name: 'Postman' }, { name: 'Swagger' }, { name: 'Axe Expert' }, { name: 'Lighthouse' }] },
  { group: 'Linguagens', items: [{ name: 'TypeScript', daily: true }, { name: 'Kotlin' }, { name: 'SQL' }] },
  { group: 'IA no ciclo de testes', items: [{ name: 'Escrita de testes' }, { name: 'Análise de logs' }, { name: 'Geração de casos de teste com few-shot' }] },
  { group: 'Bancos de dados', items: [{ name: 'MySQL' }, { name: 'Oracle' }, { name: 'DB2' }, { name: 'SQL Server' }, { name: 'MongoDB' }] },
  { group: 'Métodos', items: [{ name: 'Scrum' }, { name: 'Kanban' }, { name: 'Análise de risco e impacto' }, { name: 'Melhoria contínua de processos' }, { name: 'Análise de requisitos' }] },
];
