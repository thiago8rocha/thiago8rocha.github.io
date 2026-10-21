import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'playwright-automation-architecture',
    title: 'Playwright: automation, architecture and CI/CD',
    group: 'professional',
    badge: 'Professional',
    company: 'CarBigData',
    summary: 'Test automation, CI and quality reporting built from scratch for an automotive data and fraud prevention platform, with AI in the daily testing workflow.',
    testTypes: ['E2E', 'API', 'BFF', 'UI', 'Regression', 'Smoke'],
    tools: ['Playwright', 'Playwright BDD', 'TypeScript', 'Jenkins', 'Claude Code', 'Playwright MCP'],
    caseStudy: {
      lead: "A layered Playwright framework covering E2E, API, BFF and UI tests, wired into the development teams' deploy flow, backed by a results dashboard with a weekly report and built with AI in the daily workflow.",
      meta: [
        { label: 'Company', value: 'CarBigData' },
        { label: 'Role', value: 'Senior QA Analyst' },
        { label: 'Period', value: 'Apr 2026 – Present' },
        { label: 'Domain', value: 'Automotive data intelligence · Fraud prevention' },
      ],
      overview: [
        'CarBigData is a national leader in automotive data intelligence. Its platform collects and analyses vehicle data and images through a proprietary pipeline, supporting fraud prevention and asset recovery.',
        'I was hired to build the test automation. What existed was an early-stage Cypress suite with no object-oriented pattern behind it. Before writing any test, I mapped the current product and ran a comparative analysis of frameworks against it. Playwright came out as the best fit, and I designed the architecture from scratch on top of it.',
      ],
      stats: [
        { value: '~800', label: 'automated tests across E2E, API, BFF and UI' },
        { value: '300+', label: 'pipeline builds executed' },
        { value: '4', label: 'test layers: E2E, API, BFF, UI' },
        { value: '2', label: 'automatic triggers: regression on release, smoke on hotfix' },
      ],
      howItWorks: [
        {
          steps: [
            'A release or hotfix branch is pushed by a development team.',
            'The Jenkins trigger starts the pipeline: a full regression for release branches, a smoke test for hotfix branches.',
            'Playwright runs the suite across the E2E, API, BFF and UI layers.',
            'The result is posted to Google Chat.',
            'A dashboard compiles every run, keeps a coverage map of the scenarios covered in each feature, API and BFF, and generates a weekly report emailed to the development team.',
          ],
        },
      ],
      aiWorkflow: {
        title: 'AI in the testing workflow',
        text: "Claude is part of the daily work, not a side experiment. I use Claude Code connected to the Playwright MCP, which lets it drive a real browser against the application while tests are written and maintained. Claude also supports log analysis and documentation, and the results dashboard runs on the company's Claude workspace. Every AI output goes through review before it reaches the suite.",
      },
      role: {
        items: [
          'Assessed the existing Cypress work and the product, and chose Playwright through a comparative analysis',
          'Designed the architecture with Playwright BDD and the Feature Actions pattern',
          'Implemented E2E (features and navigation), API, BFF and UI tests',
          "Built the Jenkins pipeline and trigger from scratch, with shared libraries, and integrated them into the development teams' deploy flow",
          'Built the results dashboard, the weekly report and the coverage map',
          'Brought Claude Code with the Playwright MCP into the daily test writing and maintenance workflow',
        ],
      },
      stack: ['Playwright', 'Playwright BDD', 'TypeScript', 'Jenkins', 'Google Chat', 'Claude', 'Claude Code', 'Playwright MCP'],
      testingNote: 'Planned: Performance.',
      architecture: {
        layers: [
          { name: 'Feature files', detail: 'BDD scenarios readable by the business' },
          { name: 'Feature Actions', detail: 'one reusable action per business step' },
          { name: 'Test layers', detail: 'E2E · API · BFF · UI' },
          { name: 'Core utilities', detail: 'shared helpers, data and configuration' },
        ],
        note: 'scenarios call actions, actions drive the layers, layers share the core',
      },
      challenges: [
        {
          title: 'Choosing the foundation',
          challenge: 'An early Cypress suite already existed, but it followed no pattern. Building on it meant inheriting that.',
          approach: 'Mapped the current product and compared frameworks against it before writing any test. Chose Playwright and set Playwright BDD with Feature Actions as the standard.',
          outcome: 'A single architecture now carries around 800 tests across four layers.',
        },
        {
          title: 'Tests outside the delivery flow',
          challenge: 'Automation that runs only when someone remembers to run it does not protect a release.',
          approach: "Built a Jenkins trigger tied to the development teams' branches: regression on every release branch, smoke on every hotfix branch.",
          outcome: 'Every release and hotfix is tested automatically, with more than 300 builds run so far.',
        },
        {
          title: 'Results that tell the team where the product stands',
          challenge: 'Results spread across individual builds do not show coverage or trends.',
          approach: 'Built a dashboard that compiles every run, maps coverage per feature, API and BFF, and generates a weekly report emailed to the development team.',
          outcome: 'The team gets a weekly view of results and can see which scenarios cover each feature, API and BFF.',
        },
      ],
      achievements: [
        'Replaced an unstructured Cypress start with a Playwright architecture designed from scratch',
        'Around 800 automated tests across E2E, API, BFF and UI',
        'Regression and smoke runs triggered automatically by release and hotfix branches, with 300+ builds so far',
        'Results dashboard with a coverage map and a weekly report for the development team',
        'Claude Code with the Playwright MCP as part of the daily testing workflow',
        'Performance testing planned as the next layer',
      ],
    },
  },
  {
    slug: 'mygarage-bmw',
    title: 'MyGarage, BMW US/CA',
    group: 'professional',
    badge: 'Professional',
    company: 'Zallpy · BMW US Project',
    summary: 'Test process, regression and accessibility standards for the MyGarage apps of BMW, MINI, Toyota and Rolls-Royce in the US and Canada.',
    testTypes: ['Regression', 'Functional', 'Accessibility (ADA / WCAG 2.1)', 'Test management'],
    tools: ['Xray', 'Axe Expert', 'Lighthouse', 'ADA / WCAG 2.1'],
    caseStudy: {
      lead: 'Rebuilt how QA wrote, organised, reviewed and ran tests for the MyGarage web and mobile apps, and turned accessibility checks from loose screenshots into a scheduled, documented practice.',
      meta: [
        { label: 'Company', value: 'Zallpy, BMW US Project' },
        { label: 'Role', value: 'Senior QA Analyst' },
        { label: 'Period', value: 'Sep 2022 – Apr 2026' },
        { label: 'Domain', value: 'Automotive · Web and mobile' },
        { label: 'Brands', value: 'BMW and MINI (US, CA) · Toyota (US, CA) · Rolls-Royce (US)' },
      ],
      overview: [
        'MyGarage is the web and mobile app family for BMW, MINI, Toyota and Rolls-Royce owners in the United States and Canada, spread across seven brand and market combinations.',
        'When I joined, there was no standard for writing test scripts, collecting evidence or running regressions. The Xray base had grown past 5,000 scripts, regressions were run by Product Owners with no regular schedule, new features shipped without scripts, and accessibility results lived in loose Axe Expert and Lighthouse screenshots. Together with another QA on the team, I set out to fix the process end to end.',
      ],
      stats: [
        { value: '5,000+ → ~1,000', label: 'test scripts, after removing redundant and unused ones' },
        { value: '7', label: 'brand and market combinations covered' },
        { value: 'Monthly', label: 'regressions at minimum, previously sporadic' },
        { value: 'Quarterly', label: 'full accessibility run across all brands' },
      ],
      howItWorks: [
        {
          title: 'Test lifecycle',
          steps: [
            'A new feature is delivered together with its test scripts.',
            'At least one other QA reviews and approves the scripts.',
            'Scripts live in Xray, organised by brand and then by feature.',
            'The QA team runs regressions for releases and hotfixes, at least once a month, with every execution recorded in Xray.',
            'Defects follow a defined flow, with required minimum information and labels for traceability.',
          ],
        },
        {
          title: 'Accessibility cycle',
          steps: [
            'Each sprint delivery ships with a compact ADA report.',
            'Every three months, a full run covers all brands to catch newly introduced issues.',
            'A consolidated report compiles all results and compares each run with the previous ones.',
          ],
        },
      ],
      role: {
        intro: 'As Lead QA, working with another QA on the team:',
        items: [
          'Defined the standard for writing test scripts',
          'Restructured the Xray repository by brand, then by feature',
          'Reduced the base from more than 5,000 to about 1,000 scripts by removing redundant scripts and those that added no value',
          'Moved regression ownership from Product Owners to the QA team, for both releases and hotfixes',
          'Made test scripts part of every feature delivery, with peer review by at least one QA',
          'Defined the defect flow, with labels for traceability and minimum required information',
          'Organised the accessibility practice: quarterly runs, consolidated reports and per-sprint ADA reports',
        ],
      },
      stack: ['Xray', 'Axe Expert', 'Lighthouse'],
      challenges: [
        {
          title: 'A test base too big to trust',
          challenge: 'More than 5,000 scripts written without a shared standard, many of them redundant or no longer meaningful.',
          approach: 'Defined a script standard, reorganised Xray by brand and then by feature, and kept only the scripts that were relevant and actually used in testing.',
          outcome: 'A base of about 1,000 scripts that reflects what the team really tests.',
        },
        {
          title: 'Regressions without rhythm or history',
          challenge: 'Regressions were run by Product Owners, sporadically, and left no execution history.',
          approach: 'Moved regressions to the QA team, for both releases and hotfixes, executed and recorded in Xray.',
          outcome: 'Regressions run at least once a month, with a history of every execution.',
        },
        {
          title: 'Scripts as an afterthought',
          challenge: 'New features shipped without scripts. They were written only if a QA chose to.',
          approach: 'Made scripts part of feature delivery, approved only after review by at least one QA, and defined a defect flow with labels and minimum required information.',
          outcome: 'Coverage grows with every feature, and every script and defect follows the same standard.',
        },
        {
          title: 'Accessibility results that could not be compared',
          challenge: 'Accessibility checks happened sporadically, not after every delivery, and results were saved as loose screenshots.',
          approach: 'Scheduled a full run across all brands every three months, created a consolidated report comparing runs, and added a compact ADA report to each sprint delivery.',
          outcome: 'New accessibility defects are caught on a schedule and compared run against run.',
        },
      ],
      achievements: [
        'Reduced the Xray base from more than 5,000 to about 1,000 relevant scripts, organised by brand and feature',
        'Moved regressions from Product Owners to QA, running at least monthly for releases and hotfixes, with full execution history',
        'Made test scripts part of the definition of every feature delivery, with mandatory QA peer review',
        'Standardised defect creation with labels and minimum required information',
        'Turned accessibility from sporadic screenshots into quarterly runs across all brands, comparative reports and per-sprint ADA reports',
      ],
    },
  },
  {
    slug: 'wake-experience-automation',
    title: 'Robot Framework: automation and architecture',
    group: 'professional',
    badge: 'Professional',
    company: 'Wake Experience',
    summary: 'One automation architecture, adopted by every squad of an e-commerce platform serving thousands of online stores.',
    testTypes: ['Frontend', 'API', 'BFF'],
    tools: ['Robot Framework', 'Feature Actions', 'Jenkins'],
    caseStudy: {
      lead: 'Took an automation effort where each QA worked in isolation and turned it into one Robot Framework architecture, built on the Feature Actions pattern and adopted by all four squads.',
      meta: [
        { label: 'Company', value: 'Wake Experience' },
        { label: 'Role', value: 'Quality Analyst II' },
        { label: 'Period', value: 'Apr 2022 – Sep 2022' },
        { label: 'Domain', value: 'E-commerce platform' },
        { label: 'Team', value: '4 squads · 5 QAs' },
      ],
      overview: [
        'Wake Experience is an e-commerce platform used by thousands of online store owners.',
        'When I joined, test automation with Robot Framework was already in place, but there was no architecture defined for the company, no integration between the QAs across squads and no object-oriented structure in the code. I took the lead on defining a single architecture, using Feature Actions as the object-oriented pattern, and on organising how the squads would work on it together. Every team adopted it as the standard. The main focus was frontend, API and BFF testing.',
      ],
      stats: [
        { value: '4', label: 'squads on the same architecture' },
        { value: '5', label: 'QAs working to one standard' },
        { value: '3', label: 'test layers: frontend, API, BFF' },
        { value: '1', label: 'shared architecture, replacing per-team approaches' },
      ],
      howItWorks: [
        {
          steps: [
            'Business steps are implemented once, as Feature Actions, and reused across tests.',
            'Each squad covers its own features using the same structure and conventions.',
            'Suites cover the frontend, API and BFF layers.',
            'A Jenkins pipeline, defined in a Jenkinsfile inside the project repository, runs the suites.',
          ],
        },
      ],
      role: {
        items: [
          'Defined the automation architecture for the company, with Feature Actions as the object-oriented pattern',
          'Structured how QAs across squads worked together on it, until all four squads adopted it as the standard',
          'Automated frontend, API and BFF tests',
          'Built the Jenkins pipeline as a Jenkinsfile in the project repository',
        ],
      },
      stack: ['Robot Framework', 'Feature Actions', 'Jenkins'],
      challenges: [
        {
          title: 'One tool, many ways of using it',
          challenge: "Every squad's QA automated in isolation, with no shared architecture and no object-oriented structure.",
          approach: 'Defined one architecture with Feature Actions as the standard pattern and organised how the squads would work on it together.',
          outcome: 'All four squads and five QAs adopted the same architecture.',
        },
        {
          title: 'A pipeline without shared libraries',
          challenge: 'The company did not use Jenkins shared libraries, so there was no common pipeline to build on.',
          approach: 'Wrote the pipeline as a Jenkinsfile inside the project repository.',
          outcome: 'The pipeline was built and delivered. Its execution depended on the infrastructure team granting access to Jenkins, which was still pending when I left.',
        },
      ],
      achievements: [
        "Defined the company's first shared automation architecture with Robot Framework and Feature Actions",
        'Brought four squads and five QAs onto the same standard',
        'Covered frontend, API and BFF layers',
        'Delivered a Jenkins pipeline ready to run from the project repository',
      ],
    },
  },
  {
    slug: 'bookshelf-playwright',
    title: 'Bookshelf, Playwright + TypeScript',
    group: 'opensource',
    badge: 'Open Source',
    subtitle: 'Personal project, public on GitHub',
    summary: '237 end-to-end tests across 3 browsers, visual regression, accessibility with axe-core and a CI/CD pipeline publishing an Allure report.',
    testTypes: ['E2E', 'Visual', 'Accessibility'],
    tools: ['Playwright', 'TypeScript', 'axe-core', 'Allure', 'GitHub Actions'],
    links: [{ label: 'GitHub repo', href: 'https://github.com/thiago8rocha/bookshelf-playwright-tests' }],
    caseStudy: {
      meta: [
        { label: 'Project', value: 'Personal project, public on GitHub' },
        { label: 'Domain', value: 'Open source · E2E and accessibility' },
      ],
      overview: [],
      role: { intro: 'Author of the framework, the tests and the pipeline.', items: [] },
    },
  },
  {
    slug: 'bookshelf-robot-k6',
    title: 'Bookshelf, Robot Framework + K6',
    group: 'opensource',
    badge: 'Open Source',
    subtitle: 'Personal project, public on GitHub',
    summary: 'Full-stack automation suite covering REST API, UI E2E, WCAG 2.1 and load, spike, soak and stress performance, with CI/CD on GitHub Actions.',
    testTypes: ['API', 'E2E', 'Accessibility', 'Performance'],
    tools: ['Robot Framework', 'K6', 'GitHub Actions'],
    links: [{ label: 'GitHub repo', href: 'https://github.com/thiago8rocha/bookshelf-robotframework-tests' }],
    caseStudy: {
      meta: [
        { label: 'Project', value: 'Personal project, public on GitHub' },
        { label: 'Domain', value: 'Open source · API, UI and performance' },
      ],
      overview: [],
      role: { intro: 'Author of the suites, the performance scenarios and the pipeline.', items: [] },
    },
  },
];
