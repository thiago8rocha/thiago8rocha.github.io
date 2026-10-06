import type { ProcessStep } from '../types';

// TODO: draft proposal, review and adjust the steps and deliverables.
export const process: ProcessStep[] = [
  { title: 'Analyse', text: 'Understand the requirements, the risks and what a failure would cost.', deliverables: ['Requirements review', 'Risk and impact analysis'] },
  { title: 'Plan', text: 'Choose what to test, at which layer and with which tools.', deliverables: ['Test strategy', 'Structured test plans'] },
  { title: 'Execute', text: 'Exploratory, functional, regression and black-box testing, manual where it matters.', deliverables: ['Execution records', 'Standardized defect reports'] },
  { title: 'Automate', text: 'Automate by layer (API, BFF, frontend, visual) with maintainable patterns.', deliverables: ['Automation framework', 'CI pipeline'] },
  { title: 'Report', text: 'Make results visible and traceable for the whole team.', deliverables: ['Test reports', 'Notifications and traceability'] },
];
