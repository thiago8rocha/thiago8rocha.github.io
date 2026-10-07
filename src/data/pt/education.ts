import type { Education } from '../types';

// Order: extension course, certification, degree.
export const education: Education = [
  // TODO: replace the placeholders with the real course title, institution and year.
  { icon: 'course', title: 'Curso de extensão em Playwright', place: 'Instituição a informar', meta: 'Ano a informar' },
  { icon: 'cert', title: 'ISTQB CTFL, Certified Tester Foundation Level', place: 'ISTQB', meta: 'Certificação' },
  { icon: 'degree', title: 'Bacharelado em Sistemas de Informação', place: 'Unifacs, Salvador, BA', meta: '2016' },
];
