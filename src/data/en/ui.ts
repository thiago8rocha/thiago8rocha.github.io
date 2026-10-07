import type { Ui } from '../types';

export const ui: Ui = {
  htmlLang: 'en',
  siteTitle: 'Thiago Rocha, Senior QA Analyst',
  metaDescription: 'Portfolio of Thiago Oliveira Rocha, Senior QA Analyst with 9+ years in test automation architecture, quality processes and accessibility.',
  nav: { about: 'About', process: 'How I test', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact', resume: 'Resume' },
  skipToContent: 'Skip to content',
  menu: 'Menu',
  themeToggle: 'Toggle dark theme',
  langSwitch: { label: 'Language', targetName: 'Português', targetHref: '/pt/', short: 'PT' },
  sections: {
    about: { label: 'About', heading: 'Quality is built in, not tested in at the end.', intro: undefined },
    process: { label: 'Process', heading: 'How I test', intro: 'A structured process I follow on every project, from the first requirement to the report the team reads.' },
    experience: { label: 'Experience', heading: 'Where I have worked on quality' },
    projects: { label: 'Projects', heading: 'Work I can talk about', intro: 'Professional and personal projects, from automotive and e-commerce to open source test suites.' },
    skills: { label: 'Skills', heading: 'My testing toolkit', intro: 'Highlighted items are what I use day to day.' },
    education: { label: 'Education', heading: 'Education and certifications' },
    contact: { label: 'Contact', heading: "Let's talk about quality", intro: 'Open to conversations about QA, test automation and quality processes.' },
  },
  hero: { greeting: "Hi, I'm", viewProjects: 'See my work', downloadResume: 'Download resume (PDF)', terminalTitle: 'terminal', passed: 'passed' },
  about: { currently: 'Currently', domains: 'Domains', illustrationLabel: 'Illustration of a test checklist with a magnifying glass and a bug' },
  experience: { showMore: 'Show {n} more', showLess: 'Show less', current: 'Current' },
  projects: { featured: 'Featured', filterAll: 'All', filterLabel: 'Filter projects', filterProfessional: 'Professional', filterPersonal: 'Personal', role: 'My role', testTypes: 'Testing', tools: 'Tools', architecture: 'Framework architecture' },
  skills: { dailyNote: 'Highlighted items are what I use day to day.' },
  contact: { intro: 'Open to conversations about QA, test automation and quality processes.', cta: 'Send an email', location: 'Location', formTitle: 'Send a message', name: 'Name', email: 'Your email', message: 'Message', send: 'Send message', direct: 'Or reach me directly' },
  footer: { builtBy: 'Designed and built by Thiago Rocha, Senior QA Analyst', pipeline: 'CI/CD pipeline', testReport: 'Test report', rights: 'All rights reserved.', backToTop: 'Back to top', quality: 'Quality' },
};
