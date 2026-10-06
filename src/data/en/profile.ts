import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Thiago Oliveira Rocha',
  title: 'Senior QA Analyst',
  tagline: 'I build test automation architectures and quality processes that teams can trust, from API to visual UI.',
  // TODO: confirm the public location to show in the footer/contact (resumes only list company cities).
  location: '',
  email: 'thiago8rocha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thiago8rocha',
  github: 'https://github.com/thiago8rocha',
  resumeFile: '/resume/Thiago-Rocha-Resume-EN.pdf',
  terminal: {
    command: 'npx playwright test --project=career',
    lines: [
      { label: 'Years in software quality', value: '9+' },
      { label: 'ISTQB CTFL certified', value: 'yes' },
      { label: 'Automation architectures built from scratch', value: 'Robot Framework, Playwright' },
      { label: 'Automation layers covered', value: 'API, BFF, Frontend, Visual' },
      { label: 'Markets served', value: 'US, Canada, Brazil' },
    ],
    summary: 'all checks passed',
  },
};
