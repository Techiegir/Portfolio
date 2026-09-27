import { Project, NavItem, SocialLink, SkillGroup, ExperienceItem } from "@/types";

export const siteConfig = {
  name: "Nafisat Akinyokun",
  role: "Senior Product Designer",
  title: "Product Designer & UX Strategist",
  description: "Crafting thoughtful digital experiences, scalable design systems, and user-centered products.",
  url: "https://nafisat-akinyokun.netlify.app",
  ogImage: "/og.png",
  twitterHandle: "@nakinyokun",
  author: "Nafisat",
  email: "nakinyokun@gmail.com",
  location: "Available Worldwide / Remote",
  availability: "Available for select opportunities",
  profileImage: "/images/mine.jpeg",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About Me", href: "/about" },
  { label: "Contact Me", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com", label: "Connect on LinkedIn" },
  { platform: "Dribbble", url: "https://dribbble.com", label: "View Dribbble shots" },
  { platform: "GitHub", url: "https://github.com", label: "Follow on GitHub" },
  { platform: "Twitter / X", url: "https://twitter.com", label: "Follow on X" },
];

export const sampleProjects: Project[] = [
  {
    id: "project-globalpay",
    title: "GlobalPay Fintech App",
    tagline: "A Fintech mobile App Case study — Multi-currency transfers & savings.",
    description: "End-to-end mobile financial app design featuring multi-currency transactions, automated savings plans, and virtual debit card management.",
    category: "Mobile",
    role: "Lead Product Designer",
    timeline: "3 months",
    tags: ["Fintech", "Mobile UX", "iOS", "Figma"],
    slug: "globalpay-fintech-app",
    imageUrl: "/images/globalpay.png",
    featured: true,
  },
  {
    id: "project-mubapay",
    title: "MubaPay Digital Wallet",
    tagline: "Next-gen contactless payments and instant peer-to-peer transfers.",
    description: "Intuitive mobile payment interface simplifying daily transactions, QR pay, and instant split bill features.",
    category: "Mobile",
    role: "Product Designer",
    timeline: "2 months",
    tags: ["Mobile UI", "Payments", "Design System"],
    slug: "mubapay-digital-wallet",
    imageUrl: "/images/mubapay.jpg",
    featured: true,
  },
  {
    id: "project-medimap",
    title: "Medimap Health Companion",
    tagline: "Personalized telemedicine booking & prescription tracking.",
    description: "Empathetic mobile health app enabling patients to schedule consultations, monitor telemetry, and manage prescriptions effortlessly.",
    category: "Mobile",
    role: "UX Strategist & Designer",
    timeline: "3 months",
    tags: ["Healthcare", "Mobile App", "Accessibility"],
    slug: "medimap-health-companion",
    imageUrl: "/images/medimap.jpg",
    featured: true,
  },
  {
    id: "project-1",
    title: "Design System Architecture",
    tagline: "Scalable component library and tokens for enterprise workflows.",
    description: "A comprehensive multi-platform design system establishing shared foundations, accessible components, and unified guidelines for cross-functional product teams.",
    category: "Design Systems",
    role: "Lead Product Designer",
    timeline: "3 months",
    tags: ["Design Systems", "Figma", "Accessibility", "Tokens"],
    slug: "design-system-architecture",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "project-2",
    title: "Fintech Dashboard Experience",
    tagline: "Simplifying wealth management and transactional insights.",
    description: "End-to-end UX architecture and visual redesign for modern financial analytics, transforming complex transactional records into clear, actionable data visualizations.",
    category: "Product Design",
    role: "Product Designer",
    timeline: "4 months",
    tags: ["Product Design", "Web App", "Data Visualization", "Fintech"],
    slug: "fintech-dashboard-experience",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "project-3",
    title: "Mobile Commerce Experience",
    tagline: "Frictionless checkout and intuitive discovery for mobile shoppers.",
    description: "User research, rapid prototyping, and high-fidelity mobile application flows designed to reduce abandonment rates and elevate customer delight.",
    category: "Mobile",
    role: "UX/UI Designer",
    timeline: "2 months",
    tags: ["Mobile UX", "iOS", "Prototyping", "E-Commerce"],
    slug: "mobile-commerce-experience",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "project-4",
    title: "Healthcare Patient Portal",
    tagline: "Accessible appointment booking and telemetry records.",
    description: "Empathetic design focused on accessibility (WCAG AAA), seamless doctor-patient communication, and intuitive telemetry tracking for all demographics.",
    category: "UI/UX",
    role: "Product Designer & Researcher",
    timeline: "3 months",
    tags: ["Accessibility", "Healthcare", "User Research", "WCAG"],
    slug: "healthcare-patient-portal",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product & Strategy",
    skills: ["User Experience (UX)", "User Interface (UI)", "Design Thinking", "Product Strategy", "Wireframing & Prototyping"],
  },
  {
    title: "Research & Systems",
    skills: ["User Interviews", "Usability Testing", "Design Systems", "Component Architecture", "Accessibility (WCAG)"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Figma", "FigJam", "Next.js & React Basics", "HTML/CSS", "Design Tokens"],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Senior Product Designer",
    company: "Design Studio / Tech Co",
    period: "2023 — Present",
    description: "Leading user experience initiatives, cross-functional collaboration with engineering, and design system governance for core web products.",
  },
  {
    role: "Product Designer",
    company: "Digital Agency",
    period: "2021 — 2023",
    description: "Designed responsive web and mobile applications from research and low-fidelity prototypes to final design handoff and QA.",
  },
  {
    role: "Junior UI/UX Designer",
    company: "Creative Collective",
    period: "2020 — 2021",
    description: "Conducted usability tests, designed UI assets, and maintained scalable Figma libraries.",
  },
];
