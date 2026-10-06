export type Lang = 'en' | 'pt';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeFile: string;
  terminal: { command: string; lines: { label: string; value: string }[]; summary: string };
}

export interface About {
  paragraphs: string[];
  currently: string[];
  domains: string[];
  highlights: { title: string; text: string }[];
}

export interface ProcessStep {
  title: string;
  text: string;
  deliverables: string[];
}

export interface Job {
  company: string;
  place: string;
  roles: { title: string; period: string }[];
  summary: string;
  bullets: string[];
  extraBullets: string[];
}

export interface Project {
  title: string;
  kind: string[];
  summary: string;
  role: string;
  testTypes: string[];
  tools: string[];
  link?: { label: string; href: string };
}

export interface FeaturedProject extends Project {
  layers: { name: string; detail: string }[];
  confidentialityNote: string;
}

export interface SkillGroup {
  group: string;
  items: { name: string; daily?: boolean }[];
}

export interface Education {
  degrees: { title: string; place: string; year: string }[];
  certifications: { title: string; year?: string }[];
  languages: { name: string; level: string }[];
}

export interface Ui {
  htmlLang: string;
  siteTitle: string;
  metaDescription: string;
  nav: { about: string; process: string; experience: string; projects: string; skills: string; contact: string; resume: string };
  skipToContent: string;
  menu: string;
  themeToggle: string;
  langSwitch: { label: string; targetName: string; targetHref: string };
  sections: Record<'about' | 'process' | 'experience' | 'projects' | 'skills' | 'education' | 'contact', string>;
  hero: { viewProjects: string; downloadResume: string };
  about: { currently: string; domains: string };
  experience: { showMore: string; showLess: string };
  projects: { featured: string; others: string; filterAll: string; filterLabel: string; role: string; testTypes: string; tools: string };
  skills: { daily: string; dailyNote: string };
  contact: { intro: string; cta: string; location: string };
  footer: { builtBy: string; pipeline: string; testReport: string; rights: string };
}
