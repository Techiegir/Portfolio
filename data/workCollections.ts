export const SHOWCASE_IMAGES = [
  "/images/ui-showcase-1.png",
  "/images/ui-showcase-2.png",
  "/images/ui-showcase-3.png",
  "/images/ui-showcase-4.png",
  "/images/ui-showcase-5.png",
  "/images/ui-showcase-6.png",
  "/images/showcase-a.png",
  "/images/showcase-b.png",
  "/images/showcase-c.png",
  "/images/showcase-d.png",
  "/images/showcase-e.png",
  "/images/showcase-f.png",
  "/images/showcase-g.png",
  "/images/showcase-h.png",
  "/images/showcase-j.png",
  "/images/showcase-k.png",
];

export const DASHBOARDS = [
  "/images/dashboard-r1.png",
  "/images/dashboard-r2.png",
  "/images/dashboard-r3.png",
];

export const SOULMATES_DESIGNS = [
  { src: "/images/ndiidii.png", width: 5776, height: 32768 },
  { src: "/images/biplify.png", width: 6160, height: 23812 },
  { src: "/images/mane.png", width: 5760, height: 24116 },
];

export type WorkKind = "visual" | "landing" | "soulmates";

export interface WorkCollection {
  slug: string;
  name: string;
  blurb: string;
  kind: WorkKind;
  accent: string;
  soft: string;
  href: string;
}

export const WORK_COLLECTIONS: WorkCollection[] = [
  {
    slug: "creative-mobile-ui",
    name: "Creative Mobile UI Exploration",
    blurb: "Layers, states, and interface experiments.",
    kind: "visual",
    accent: "#0284c7",
    soft: "#e0f2fe",
    href: "/work/creative-mobile-ui",
  },
  {
    slug: "sign-agency",
    name: "FinTech Card Management",
    blurb: "A seamless dashboard experience for managing cards, transactions, and everyday finances.",
    kind: "landing",
    accent: "#e11d48",
    soft: "#ffe4e6",
    href: "/work/sign-agency",
  },
  {
    slug: "soulmates",
    name: "Landing Page Explorations",
    blurb: "Exploring different visual directions, layouts, and interactions for modern web experiences.",
    kind: "soulmates",
    accent: "#db2777",
    soft: "#fce7f3",
    href: "/work/soulmates",
  },
];

export type UITileKind = "mobile" | "browser" | "dashboard" | "landing";

export interface UITile {
  name: string;
  tag: string;
  kind: UITileKind;
  from: string;
  to: string;
  image?: string;
  href?: string;
}

export const CATEGORY_TABS = [
  "Mobile Apps",
  "Websites",
  "Dashboards",
  "Case Studies",
] as const;

export type CategoryKey = (typeof CATEGORY_TABS)[number];

export const WORKS: Record<CategoryKey, UITile[]> = {
  "Mobile Apps": [
    { name: "GlobalPay", tag: "Fintech App", kind: "mobile", from: "#2563eb", to: "#1e3a8a", image: "/images/globalpay.png", href: "https://www.behance.net/gallery/216621435/Fintech-Case-Study-Mobile-App" },
    { name: "Techly", tag: "Product Design", kind: "mobile", from: "#818cf8", to: "#312e81", image: "/images/techly.png", href: "https://www.behance.net/gallery/224494853/Gadget-E-commerce-Mobile-App" },
    { name: "Super Meals", tag: "Food Delivery", kind: "mobile", from: "#2dd4bf", to: "#134e4a", image: "/images/super-meals.png", href: "https://www.behance.net/gallery/208905779/Food-Ordering-Mobile-App" },
    { name: "Lurni Kids", tag: "Kids Learning", kind: "mobile", from: "#f472b6", to: "#831843", image: "/images/lurni-kids.png", href: "https://www.behance.net/gallery/249189217/LURNI-Kids-Mobile-App" },
    { name: "Solvex", tag: "Productivity", kind: "mobile", from: "#f59e0b", to: "#78350f", image: "/images/solvex.png", href: "https://www.behance.net/gallery/207379943/Fintech-Mobile-App" },
    { name: "Telecure", tag: "Telehealth", kind: "mobile", from: "#38bdf8", to: "#0c4a6e", image: "/images/telecure.png", href: "https://www.behance.net/gallery/223625157/Telemedicine-Case-Study-Mobile-App" },
  ],
  Websites: [
    { name: "Lumi", tag: "Product Design", kind: "landing", from: "#a78bfa", to: "#4c1d95", image: "/images/lumi.png" },
    { name: "Boardly", tag: "Collaboration", kind: "browser", from: "#f59e0b", to: "#7c2d12", image: "/images/boardly.png", href: "https://www.behance.net/gallery/218182149/A-Responsive-Bus-Booking-Landing-Page" },
    { name: "Cryptoflex", tag: "Crypto", kind: "landing", from: "#0ea5e9", to: "#0c4a6e", image: "/images/cryptoflex.png", href: "https://www.behance.net/gallery/231195389/Crypto-Responsive-Landing-Page" },
    { name: "Unilink", tag: "Community", kind: "browser", from: "#a855f7", to: "#581c87", image: "/images/unilink.png", href: "https://www.behance.net/gallery/235419813/Social-Media-Networking-Platform-Responsive-Design" },
    { name: "Trendora", tag: "E-commerce", kind: "landing", from: "#f43f5e", to: "#881337", image: "/images/trendora.png", href: "https://www.behance.net/gallery/226636401/Fashion-E-commerce-Website-Design" },
    { name: "GlobalPay Website", tag: "Fintech", kind: "landing", from: "#2563eb", to: "#1e3a8a", image: "/images/globalpay-website.png", href: "https://www.behance.net/gallery/229962001/GlobalPay-Fintech-Responsive-Landing-Page" },
    { name: "Everglow", tag: "Beauty Brand", kind: "landing", from: "#f472b6", to: "#831843", image: "/images/everglow.png", href: "https://www.behance.net/gallery/236746301/Skincare-Responsive-Landing-Page" },
    { name: "Base 360", tag: "SaaS", kind: "browser", from: "#8b5cf6", to: "#312e81", image: "/images/base-360.png", href: "https://www.behance.net/gallery/252606353/Base360-SaaS-CRM-Customer-Communication-Platform" },
    { name: "VoltStorage", tag: "Energy", kind: "landing", from: "#22c55e", to: "#14532d", image: "/images/voltstorage.png", href: "https://www.behance.net/gallery/241893845/Responsive-Energy-Storage-Website-Design" },
    { name: "Medimap", tag: "Healthcare", kind: "landing", from: "#06b6d4", to: "#164e63", image: "/images/medimap.png", href: "https://www.behance.net/gallery/219102647/A-RESPONSIVE-HEALTHCARE-LANDING-PAGE" },
    { name: "Crest", tag: "Brand Identity", kind: "landing", from: "#a78bfa", to: "#3b0764", image: "/images/crest.png", href: "https://www.behance.net/gallery/217547619/A-Responsive-Project-Management-Landing-Page" },
  ],
  Dashboards: [
    { name: "Fintitek", tag: "Fintech", kind: "dashboard", from: "#6366f1", to: "#1e1b4b", image: "/images/fintitek.png", href: "https://www.behance.net/gallery/233279551/A-Fintech-Responsive-Dashboard" },
    { name: "LegalEstate", tag: "Legal / Real Estate", kind: "dashboard", from: "#06b6d4", to: "#1e3a8a", image: "/images/legalestate.png", href: "https://www.behance.net/gallery/233806035/A-Comprehensive-Real-Estate-Management-Dashboard" },
    { name: "HandyHub", tag: "Services", kind: "dashboard", from: "#22c55e", to: "#14532d", image: "/images/handyhub.png", href: "https://www.behance.net/gallery/236186589/Service-Marketplace-Booking-Platform" },
  ],
  "Case Studies": [
    { name: "GlobalPay", tag: "Fintech", kind: "landing", from: "#14b8a6", to: "#134e4a", image: "/images/globalpay.png", href: "https://www.behance.net/gallery/216621435/Fintech-Case-Study-Mobile-App" },
    { name: "UIUX Designer", tag: "Case Study", kind: "browser", from: "#f5a623", to: "#78350f", image: "/images/uiux-designer.png" },
    { name: "Telecure", tag: "Telehealth", kind: "browser", from: "#8b5cf6", to: "#312e81", image: "/images/telecure.png", href: "https://www.behance.net/gallery/223625157/Telemedicine-Case-Study-Mobile-App" },
  ],
};