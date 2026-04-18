export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "AI / ML Solutions", href: "/services/ai-ml-solutions" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
] as const;
