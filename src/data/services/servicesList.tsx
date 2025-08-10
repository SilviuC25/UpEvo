export type Service = {
  title: string
  slug: string
  shortDescription: string
  descriptionLong: string
  image?: string
}

const services: Service[] = [
  {
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Building fast, scalable, modern websites and apps.",
    descriptionLong:
      "We create high-performance websites and web applications using the latest technologies. From landing pages to full-stack platforms, we ensure responsive, accessible and user-friendly solutions tailored to your goals.",
    image: "/images/services/development.gif",
  },
  {
    title: "Branding",
    slug: "branding",
    shortDescription: "Memorable brand identity design and strategy.",
    descriptionLong:
      "Your brand is more than just a logo. We design cohesive branding systems that reflect your company’s values, including logos, color palettes, typography, and visual guidelines for consistent communication.",
    image: "/images/services/branding.gif",
  },
  {
    title: "SEO Optimization",
    slug: "seo",
    shortDescription: "Improve your visibility on search engines.",
    descriptionLong:
      "We optimize your site technically and strategically to rank higher on Google and other search engines. This includes metadata, structure, keyword planning, performance tuning, and ongoing SEO audits.",
    image: "/images/services/seo.gif",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    shortDescription: "Beautiful, intuitive interfaces that convert.",
    descriptionLong:
      "We craft delightful user experiences with accessible, responsive, and aesthetically pleasing interfaces. Our process is user-centered, balancing functionality and design for better engagement and conversions.",
    image: "/images/services/uiux.gif",
  },
  {
    title: "Hosting & Domain Setup",
    slug: "hosting-domain",
    shortDescription: "Reliable hosting & domain management.",
    descriptionLong:
      "We handle domain registration, DNS setup, hosting deployment, SSL, and performance optimization so your website stays online, secure, and fast, no matter where your users are.",
    image: "/images/services/hosting.gif",
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce",
    shortDescription: "Online stores that drive conversions.",
    descriptionLong:
      "We build scalable e-commerce solutions using modern platforms like Shopify, WooCommerce, or custom stacks. Focused on usability, security, and performance to help you sell more, faster.",
    image: "/images/services/ecommerce.gif",
  },
  {
    title: "Performance Optimization",
    slug: "performance",
    shortDescription: "Make your site lightning fast.",
    descriptionLong:
      "A fast website improves user experience and SEO. We audit and optimize your assets, code, images, caching, and delivery to ensure your site is blazing fast across devices and networks.",
    image: "/images/services/performance.gif",
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance",
    shortDescription: "Keep your site secure and up-to-date.",
    descriptionLong:
      "We provide ongoing technical support, updates, security patches, and performance monitoring so you can focus on your business while we keep everything running smoothly.",
    image: "/images/services/support.gif",
  },
  {
    title: "Content Strategy & Copywriting",
    slug: "content-strategy",
    shortDescription: "Words that connect and convert.",
    descriptionLong:
      "We help craft clear, compelling content strategies tailored to your brand and audience. From web copy to blog posts, we write with purpose—optimized for humans and search engines alike.",
    image: "/images/services/content.gif",
  },
]

export default services
