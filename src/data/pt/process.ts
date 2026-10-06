import type { ProcessStep } from '../types';

// TODO: draft proposal, review and adjust the steps and deliverables.
export const process: ProcessStep[] = [
  { title: 'Analisar', text: 'Entender os requisitos, os riscos e o custo de uma falha.', deliverables: ['Revisão de requisitos', 'Análise de risco e impacto'] },
  { title: 'Planejar', text: 'Escolher o que testar, em qual camada e com quais ferramentas.', deliverables: ['Estratégia de testes', 'Planos de teste estruturados'] },
  { title: 'Executar', text: 'Testes exploratórios, funcionais, de regressão e caixa-preta, manuais onde fazem diferença.', deliverables: ['Registros de execução', 'Defeitos padronizados'] },
  { title: 'Automatizar', text: 'Automatizar por camada (API, BFF, frontend, visual) com padrões de fácil manutenção.', deliverables: ['Framework de automação', 'Pipeline de CI'] },
  { title: 'Reportar', text: 'Tornar os resultados visíveis e rastreáveis para todo o time.', deliverables: ['Relatórios de teste', 'Notificações e rastreabilidade'] },
];
