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
  terminal: { command: string; lines: string[]; summary: string };
  stats: { value: string; unit?: string; label: string }[];
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
  tags: string[];
  current?: boolean;
}

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  group: 'professional' | 'personal';
  badge: string;
  domain: string;
  client: string;
  summary: string;
  role: string;
  testTypes: string[];
  tools: string[];
  links?: Link[];
}

export interface FeaturedProject extends Project {
  metrics: { value: string; label: string }[];
  layers: { name: string; detail: string }[];
  layersNote: string;
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

export type SectionKey = 'about' | 'process' | 'experience' | 'projects' | 'skills' | 'education' | 'contact';

export interface Ui {
  htmlLang: string;
  siteTitle: string;
  metaDescription: string;
  nav: { about: string; process: string; experience: string; projects: string; skills: string; contact: string; resume: string };
  skipToContent: string;
  menu: string;
  themeToggle: string;
  langSwitch: { label: string; targetName: string; targetHref: string; short: string };
  sections: Record<SectionKey, { label: string; heading: string; intro?: string }>;
  hero: { greeting: string; viewProjects: string; downloadResume: string; terminalTitle: string; passed: string };
  about: { currently: string; domains: string; illustrationLabel: string };
  experience: { showMore: string; showLess: string; current: string };
  projects: { featured: string; filterAll: string; filterLabel: string; filterProfessional: string; filterPersonal: string; role: string; testTypes: string; tools: string; architecture: string };
  skills: { dailyNote: string };
  contact: { intro: string; cta: string; location: string; formTitle: string; name: string; email: string; message: string; send: string; direct: string };
  footer: { builtBy: string; pipeline: string; testReport: string; rights: string; backToTop: string; quality: string };
}
