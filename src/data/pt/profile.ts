import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Thiago Oliveira Rocha',
  title: 'Analista de QA Sênior',
  tagline: 'Construo arquiteturas de automação de testes e processos de qualidade em que o time pode confiar, da API à interface visual.',
  // TODO: confirm the public location to show in the footer/contact (resumes only list company cities).
  location: '',
  email: 'thiago8rocha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thiago8rocha',
  github: 'https://github.com/thiago8rocha',
  resumeFile: '/resume/Thiago-Rocha-Curriculo-PT.pdf',
  terminal: {
    command: 'npx playwright test --project=carreira',
    lines: [
      { label: 'Anos em qualidade de software', value: '9+' },
      { label: 'Certificado ISTQB CTFL', value: 'sim' },
      { label: 'Arquiteturas de automação criadas do zero', value: 'Robot Framework, Playwright' },
      { label: 'Camadas de automação cobertas', value: 'API, BFF, Frontend, Visual' },
      { label: 'Mercados atendidos', value: 'EUA, Canadá, Brasil' },
    ],
    summary: 'todas as verificações passaram',
  },
};
