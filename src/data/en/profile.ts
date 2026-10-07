import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Thiago Oliveira Rocha',
  title: 'Senior QA Analyst',
  tagline: 'I build test automation architectures and quality processes that teams can trust, from API to visual UI.',
  // TODO: confirm the public location (resumes only list company cities). Empty hides it everywhere.
  location: '',
  email: 'thiago8rocha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thiago8rocha',
  github: 'https://github.com/thiago8rocha',
  resumeFile: '/resume/Thiago-Rocha-Resume-EN.pdf',
  terminal: {
    command: 'npx playwright test --project=thiago',
    lines: [
      '9+ years in software quality',
      'ISTQB CTFL certified',
      'Automation built from scratch: Playwright, Robot Framework',
      'Layers covered: API · BFF · Frontend · Visual',
      'Products for the US, Canada and Brazil',
    ],
    summary: 'all checks passed',
  },
  stats: [
    { value: '9+', unit: 'yrs', label: 'QA and test automation experience' },
    { value: '5', label: 'Companies, from mobile devices to automotive data' },
    { value: '4', label: 'Automation layers: API, BFF, Frontend, Visual' },
  ],
};
