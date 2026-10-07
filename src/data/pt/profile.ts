import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Thiago Oliveira Rocha',
  title: 'Analista de QA Sênior',
  tagline: 'Construo arquiteturas de automação de testes e processos de qualidade em que o time pode confiar, da API à interface visual.',
  // TODO: confirm the public location (resumes only list company cities). Empty hides it everywhere.
  location: '',
  email: 'thiago8rocha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thiago8rocha',
  github: 'https://github.com/thiago8rocha',
  resumeFile: '/resume/Thiago-Rocha-Curriculo-PT.pdf',
  terminal: {
    command: 'npx playwright test --project=thiago',
    lines: [
      '9+ anos em qualidade de software',
      'Certificado ISTQB CTFL',
      'Automação do zero: Playwright, Robot Framework',
      'Camadas cobertas: API · BFF · Frontend · Visual',
      'Produtos para EUA, Canadá e Brasil',
    ],
    summary: 'todas as verificações passaram',
  },
  stats: [
    { value: '9+', unit: 'anos', label: 'Experiência em QA e automação de testes' },
    { value: '5', label: 'Empresas, de dispositivos móveis a dados automotivos' },
    { value: '4', label: 'Camadas de automação: API, BFF, Frontend, Visual' },
  ],
};
