import type { Job } from '../types';

// Sources: Resume.pdf and Curriculo.pdf. Where they differ, the Portuguese resume was used.
export const experience: Job[] = [
  {
    company: 'CarBigData',
    place: 'Florianópolis, SC (Remoto), via Zallpy',
    roles: [{ title: 'Analista de QA Sênior', period: 'Abr 2026 – Atual' }],
    summary: 'Líder nacional em inteligência de dados automotivos, atuando na prevenção a fraudes e recuperação de ativos por meio de um pipeline próprio de coleta e análise de dados e imagens.',
    bullets: [
      'Defini e implementei do zero a arquitetura de testes automatizados do projeto com Playwright, adotando os padrões Feature Actions e Playwright BDD, com cobertura de API, BFF, Frontend e Visual.',
      'Desenvolvi a trigger e o pipeline de execução dos testes automatizados no Jenkins, com shared libraries e notificações no Google Chat.',
    ],
    extraBullets: ['Atuei na definição do Xray como ferramenta de gerenciamento de testes do time, com participação prevista na implantação.'],
    tags: ['Playwright', 'Playwright BDD', 'TypeScript', 'Jenkins', 'Xray', 'Google Chat'],
    current: true,
  },
  {
    company: 'Zallpy',
    place: 'Florianópolis, SC (Remoto)',
    roles: [{ title: 'Analista de QA Sênior', period: 'Set 2022 – Abr 2026' }],
    summary: 'Alocado no projeto BMW US, assegurando a qualidade dos apps web e mobile MyGarage para BMW, MINI, Toyota e Rolls-Royce, nas versões dos Estados Unidos e do Canadá.',
    bullets: [
      'QA principal no MyGarage: testes web, cross-browser e mobile (Android, iPhone, iPad via BrowserStack) e acessibilidade (Axe Expert e Lighthouse, ADA/WCAG 2.1).',
      'Reestruturei do zero a base de scripts de teste no Xray, reduzindo de mais de 5.000 para cerca de 1.000 scripts qualificados e criando um histórico confiável de regressão que antes não existia.',
      'Defini e padronizei a criação e a documentação de defeitos, melhorando a rastreabilidade e a comunicação entre QA e desenvolvimento.',
    ],
    extraBullets: [
      'Análise de risco e impacto de funcionalidades críticas para apoiar a priorização de correções e releases.',
      'Participação ativa em cerimônias de handoff e refinamento com devs e POs, reduzindo retrabalho.',
    ],
    tags: ['Xray', 'BrowserStack', 'Axe Expert', 'Lighthouse'],
  },
  {
    company: 'Wake Experience',
    place: 'São Paulo, SP (Remoto)',
    roles: [{ title: 'Analista de Qualidade II', period: 'Abr 2022 – Set 2022' }],
    summary: 'Plataforma de e-commerce que atende milhares de lojistas online; alocado em múltiplos times de projetos.',
    bullets: [
      'Desenhei e implementei uma arquitetura de automação com Robot Framework (padrão OO Actions) para vários times, cobrindo UI e API e substituindo a falta de padrão anterior.',
      'Liderei a padronização de processos de QA entre times e validei APIs REST com Postman e Swagger.',
    ],
    extraBullets: [
      'Criei documentação que melhorou a consistência dos testes e a integração de novos QAs.',
      'Criei massa de dados via frontend e scripts de banco para cenários complexos.',
    ],
    tags: ['Robot Framework', 'Postman', 'Swagger'],
  },
  {
    company: 'Softplan',
    place: 'Florianópolis, SC',
    roles: [
      { title: 'Analista de Garantia de Qualidade II', period: 'Abr 2021 – Abr 2022' },
      { title: 'Analista de Garantia de Qualidade I', period: 'Dez 2018 – Abr 2021' },
    ],
    summary: 'Unidade de Justiça (UNJ): sistemas de primeiro e segundo grau usados por tribunais de todo o Brasil.',
    bullets: [
      'Garanti a estabilidade de sistemas legados complexos de gestão judiciária com testes exploratórios, de regressão e caixa-preta, com bastante manipulação de banco de dados (SQL Server, DB2, Oracle).',
      'Promovido de Analista I para II em abril de 2021 por desempenho consistente e contribuições técnicas.',
    ],
    extraBullets: ['Reportei e ajudei a priorizar defeitos no RTC (Rational Team Concert).', 'Propus melhorias de processo e de funcionalidades que foram implementadas nos produtos.'],
    tags: ['SQL Server', 'DB2', 'Oracle', 'RTC'],
  },
  {
    company: 'BRISA',
    place: 'Salvador, BA',
    roles: [
      { title: 'Analista de QA, Team Leader', period: 'Ago 2018 – Nov 2018' },
      { title: 'Analista de QA', period: 'Mar 2017 – Ago 2018' },
    ],
    summary: 'Projeto de testes em dispositivos móveis LG.',
    bullets: [
      'Testei dispositivos móveis LG (chamadas, SMS, câmera, apps embarcados, sistema operacional) com testes caixa-preta, exploratórios e de performance.',
      'Promovido a Team Leader após 18 meses, coordenando o time de QA em vários subprojetos de curta duração.',
    ],
    extraBullets: ['Documentei defeitos críticos no HP Quality Center.'],
    tags: ['HP Quality Center'],
  },
];
