import type { FeaturedProject, Project } from '../types';

export const featured: FeaturedProject = {
  title: 'Arquitetura de automação Playwright, construída do zero',
  kind: ['Dados automotivos', 'Prevenção a fraudes'],
  summary: 'Framework de automação em camadas para uma plataforma de análise de dados e imagens, com Playwright BDD e o padrão Feature Actions, executado por um pipeline Jenkins.',
  role: 'Defini a arquitetura e os padrões, implementei o framework, criei a trigger e o pipeline no Jenkins e participei da adoção do Xray.',
  testTypes: ['API', 'BFF', 'Frontend', 'Visual'],
  tools: ['Playwright', 'Playwright BDD', 'TypeScript', 'Jenkins', 'Xray', 'Google Chat'],
  // TODO: review the layers below, they are a conceptual draft built from the resume wording only.
  layers: [
    { name: 'Feature files (BDD)', detail: 'Cenários legíveis pelo negócio' },
    { name: 'Feature Actions', detail: 'Ações de negócio reutilizáveis por trás de cada passo' },
    { name: 'Camadas de teste', detail: 'Verificações de API, BFF, Frontend e Visual' },
    { name: 'Utilitários centrais', detail: 'Helpers, dados e configuração compartilhados' },
    { name: 'Pipeline Jenkins', detail: 'Shared libraries e notificações no Google Chat' },
  ],
  confidentialityNote: 'As descrições são conceituais. Nenhum código, dado, URL interna ou detalhe proprietário de empregadores é exibido.',
};

export const projects: Project[] = [
  {
    title: 'MyGarage, BMW US/CA',
    kind: ['Automotivo', 'Web e mobile'],
    summary: 'Qualidade dos apps web e mobile MyGarage para BMW, MINI, Toyota e Rolls-Royce nos Estados Unidos e no Canadá.',
    role: 'QA principal: estratégia de testes no Xray, padrões de defeitos, acessibilidade e validação cross-browser e mobile.',
    testTypes: ['Exploratório', 'Regressão', 'Funcional', 'Acessibilidade', 'Cross-browser'],
    tools: ['Xray', 'BrowserStack', 'Axe Expert', 'Lighthouse', 'Jira'],
  },
  {
    title: 'Automação Wake Experience',
    kind: ['E-commerce'],
    summary: 'Arquitetura de automação compartilhada por vários times de uma plataforma de e-commerce.',
    role: 'Desenhei e implementei o framework e liderei a padronização dos processos de QA.',
    testTypes: ['UI', 'API', 'Regressão'],
    tools: ['Robot Framework', 'Postman', 'Swagger'],
  },
  {
    title: 'Bookshelf, Playwright + TypeScript',
    kind: ['Projeto pessoal'],
    summary: '237 testes E2E em 3 browsers, regressão visual, acessibilidade com axe-core e pipeline de CI/CD com Allure Report.',
    role: 'Autor: framework, testes e pipeline.',
    testTypes: ['E2E', 'Visual', 'Acessibilidade'],
    tools: ['Playwright', 'TypeScript', 'axe-core', 'Allure', 'GitHub Actions'],
    link: { label: 'GitHub', href: 'https://github.com/thiago8rocha/bookshelf-playwright-tests' },
  },
  {
    title: 'Bookshelf, Robot Framework + K6',
    kind: ['Projeto pessoal'],
    summary: 'Suíte de automação fullstack: API REST, UI E2E, WCAG 2.1 e performance (load, spike, soak e stress), com CI/CD.',
    role: 'Autor: suítes, cenários de performance e pipeline.',
    testTypes: ['API', 'E2E', 'Acessibilidade', 'Performance'],
    tools: ['Robot Framework', 'K6', 'GitHub Actions'],
    link: { label: 'GitHub', href: 'https://github.com/thiago8rocha/bookshelf-robotframework-tests' },
  },
  // TODO: add the personal Android apps in Kotlin (names, summary, links).
];
