import type { About } from '../types';

export const about: About = {
  paragraphs: [
    'Analista de QA Sênior com mais de 9 anos em qualidade de software, em aplicações web, mobile e backend, em times ágeis. Já atuei em produtos grandes e críticos internacionalmente, como os apps de BMW, MINI, Toyota e Rolls-Royce para EUA e Canadá.',
    'Desenho arquiteturas de automação de testes do zero, padronizo como os times documentam testes e defeitos e conecto tudo a pipelines de CI para que os resultados sejam confiáveis e rastreáveis.',
  ],
  currently: [
    'QA na CarBigData, inteligência de dados automotivos',
    'Arquitetura de automação com Playwright BDD e Feature Actions',
    'Pipelines Jenkins e adoção do Xray pelo time',
  ],
  domains: ['Automotivo', 'Inteligência de dados', 'E-commerce', 'Judiciário', 'Dispositivos móveis'],
  highlights: [
    { title: 'ISTQB CTFL', text: 'Certified Tester, Foundation Level.' },
    { title: 'Arquitetura de automação', text: 'Frameworks Playwright e Robot Framework criados do zero.' },
    { title: 'Acessibilidade', text: 'Testes ADA e WCAG 2.1 com Axe e Lighthouse.' },
    { title: 'IA em testes', text: 'Escrita de testes, análise de logs e geração de casos de teste com few-shot.' },
  ],
};
