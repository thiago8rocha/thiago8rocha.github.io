import type { About } from '../types';

export const about: About = {
  paragraphs: [
    'Senior QA Analyst with over 9 years in software quality across web, mobile and backend applications in agile teams. I have worked on large, internationally critical products, including BMW, MINI, Toyota and Rolls-Royce apps for the US and Canada.',
    'I design test automation architectures from the ground up, standardize how teams document tests and defects, and connect everything to CI pipelines so results are reliable and traceable.',
  ],
  currently: [
    'QA at CarBigData, automotive data intelligence',
    'Automation architecture with Playwright BDD and Feature Actions',
    'Jenkins pipelines and Xray adoption for the team',
  ],
  domains: ['Automotive', 'Data intelligence', 'E-commerce', 'Legal tech', 'Mobile devices'],
  highlights: [
    { title: 'ISTQB CTFL', text: 'Certified Tester, Foundation Level.' },
    { title: 'Automation architecture', text: 'Playwright and Robot Framework frameworks built from scratch.' },
    { title: 'Accessibility', text: 'ADA and WCAG 2.1 testing with Axe and Lighthouse.' },
    { title: 'AI in testing', text: 'Test writing, log analysis and few-shot test case generation.' },
  ],
};
