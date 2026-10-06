import type { Job } from '../types';

// Sources: Resume.pdf and Curriculo.pdf. Where they differ, the Portuguese resume was used.
export const experience: Job[] = [
  {
    company: 'CarBigData',
    place: 'Florianópolis, SC (Remote), through Zallpy',
    roles: [{ title: 'Senior QA Analyst', period: 'Apr 2026 – Present' }],
    summary: 'National leader in automotive data intelligence, working on fraud prevention and asset recovery through a proprietary data and image collection and analysis pipeline.',
    bullets: [
      "Defined and implemented the project's test automation architecture from the ground up with Playwright, using the Feature Actions and Playwright BDD patterns, covering API, BFF, Frontend and Visual testing.",
      'Built the automated test trigger and execution pipeline in Jenkins, with shared libraries and Google Chat notifications.',
    ],
    extraBullets: ["Helped define Xray as the team's test management tool, with planned participation in its rollout."],
  },
  {
    company: 'Zallpy',
    place: 'Florianópolis, SC (Remote)',
    roles: [{ title: 'Senior QA Analyst', period: 'Sep 2022 – Apr 2026' }],
    summary: 'Allocated to the BMW US project, ensuring the quality of the MyGarage web and mobile apps for BMW, MINI, Toyota and Rolls-Royce in the United States and Canada.',
    bullets: [
      'Lead QA on MyGarage: web, cross-browser and mobile testing (Android, iPhone, iPad via BrowserStack) and accessibility testing (Axe Expert and Lighthouse, ADA/WCAG 2.1).',
      'Rebuilt the Xray test script base from scratch, cutting more than 5,000 scripts to about 1,000 qualified ones and creating a reliable regression history that did not exist before.',
      'Defined and standardized defect creation and documentation, improving traceability and communication between QA and development.',
    ],
    extraBullets: [
      'Risk and impact analysis of critical features to support fix and release prioritization.',
      'Active in handoff and refinement ceremonies with developers and POs, reducing rework.',
    ],
  },
  {
    company: 'Wake Experience',
    place: 'São Paulo, SP (Remote)',
    roles: [{ title: 'Quality Analyst II', period: 'Apr 2022 – Sep 2022' }],
    summary: 'E-commerce platform serving thousands of online store owners; allocated to multiple project teams.',
    bullets: [
      'Designed and implemented an automation architecture with Robot Framework (OO Actions pattern) for multiple teams, covering UI and API and replacing the previous lack of a standard.',
      'Led cross-team QA process standardization and validated REST APIs with Postman and Swagger.',
    ],
    extraBullets: [
      'Created documentation that improved testing consistency and onboarding of new QAs.',
      'Created test data through frontend and database scripts for complex scenarios.',
    ],
  },
  {
    company: 'Softplan',
    place: 'Florianópolis, SC',
    roles: [
      { title: 'Quality Assurance Analyst II', period: 'Apr 2021 – Apr 2022' },
      { title: 'Quality Assurance Analyst I', period: 'Dec 2018 – Apr 2021' },
    ],
    summary: 'Justice Unit (UNJ): first and second degree systems used by courts throughout Brazil.',
    bullets: [
      'Ensured the stability of complex legacy court management systems through exploratory, regression and black-box testing, with heavy database work (SQL Server, DB2, Oracle).',
      'Promoted from Analyst I to II in April 2021 for consistent performance and technical contributions.',
    ],
    extraBullets: ['Reported and helped prioritize defects in RTC (Rational Team Concert).', 'Proposed process and feature improvements that shipped in the products.'],
  },
  {
    company: 'BRISA',
    place: 'Salvador, BA',
    roles: [
      { title: 'QA Analyst, Team Leader', period: 'Aug 2018 – Nov 2018' },
      { title: 'QA Analyst', period: 'Mar 2017 – Aug 2018' },
    ],
    summary: 'Mobile testing project for LG devices.',
    bullets: [
      'Tested LG mobile devices (calls, SMS, camera, embedded apps, operating system) with black-box, exploratory and performance testing.',
      'Promoted to Team Leader after 18 months, coordinating the QA team across several short-term subprojects.',
    ],
    extraBullets: ['Documented critical defects in HP Quality Center.'],
  },
];
