import type { Education } from '../types';

// Order: extension course, certification, degree.
export const education: Education = [
  // TODO: replace the placeholders with the real course title, institution and year.
  { icon: 'course', title: 'Playwright extension course', place: 'Institution to be added', meta: 'Year to be added' },
  { icon: 'cert', title: 'ISTQB CTFL, Certified Tester Foundation Level', place: 'ISTQB', meta: 'Certification' },
  { icon: 'degree', title: "Bachelor's degree in Information Systems", place: 'Unifacs, Salvador, BA', meta: '2016' },
];
