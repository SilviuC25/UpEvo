export type NavbarItem = {
  label: string
  href: string
  children?: {
    title: string
    description?: string
    image?: string
    href: string
    liveLink?: string
  }[]
}

export const navbarItems: NavbarItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Branding",
        href: "/services/branding",
      },
      {
        title: "SEO Optimization",
        href: "/services/seo",
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
      },
      {
        title: "Hosting & Domain Setup",
        href: "/services/hosting-domain",
      },
      {
        title: "E-commerce Development",
        href: "/services/ecommerce",
      },
      {
        title: "Performance Optimization",
        href: "/services/performance",
      },
      {
        title: "Maintenance & Support",
        href: "/services/maintenance",
      },
      {
        title: "Content Strategy & Copywriting",
        href: "/services/content-strategy",
      },
    ]
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      {
        title: "FastTyper",
        description: "Typing‑speed game with user auth, profiles & leaderboard",
        image: "/images/portfolio/fast-typer.png",
        href: "/portfolio/fast-typer",
        liveLink: "https://fast-typer-pi.vercel.app/"
      },
      {
        title: "Hardware Explorer",
        description: "Tech blog platform with in‑app post creation & previews",
        image: "/images/portfolio/hardware-explorer.png",
        href: "/portfolio/hardware-explorer",
        liveLink: "https://hardwareexplorer.vercel.app/"
      }
    ]
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      {
        title: "Latest Trends in Web Dev",
        description: "2025 frontend frameworks overview",
        image: "/images/blog/frontend.png",
        href: "/blog/frontend-trends",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
]
