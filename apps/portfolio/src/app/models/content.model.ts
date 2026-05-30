export interface HeroContent {
  id: string;
  name: string;
  title: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutContent {
  id: string;
  bio: string;
  experienceSummary: string;
  strengths: string[];
}

export interface Skill {
  name: string;
  category: string;
  sortOrder: number;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  techStack: string[];
  architectureImage?: string;
  liveUrl?: string;
  repoUrl?: string;
  impactMetrics: { label: string; value: string }[];
  featured: boolean;
  sortOrder: number;
  published: boolean;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  domain: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  sortOrder: number;
  published: boolean;
}

export interface ContactDetail {
  id: string;
  type: "Email" | "Phone" | "Location";
  value: string;
  icon: string;
  sortOrder: number;
  published: boolean;
}

export interface FooterLink {
  id: string;
  label: string;
  url: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  published: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "new" | "read" | "archived";
}

export interface PublicContent {
  hero: HeroContent;
  about: AboutContent;
  skills: Skill[];
  projects: Project[];
  experience: ExperienceEntry[];
  testimonials: Testimonial[];
  contactDetails: ContactDetail[];
}

export interface AnalyticsMetrics {
  totalProjects: number;
  publishedProjects: number;
  draftProjects: number;
  totalContacts: number;
  contactsOverTime: { date: string; count: number }[];
  recentActivity: { type: string; description: string; timestamp: string }[];
  topProjects: { id: string; title: string; views: number }[];
  categoryBreakdown: { category: string; count: number }[];
}
