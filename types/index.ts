export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Product Design" | "UI/UX" | "Design Systems" | "Mobile";
  role: string;
  timeline: string;
  tags: string[];
  slug: string;
  imageUrl: string;
  featured?: boolean;
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}
