import { prisma } from '../src/lib/prisma'

async function main() {
  await prisma.service.createMany({
    data: [
      {
        title: 'Web Development',
        slug: 'web-development',
        description: 'Building fast, scalable, modern websites and apps.',
        descriptionLong: `We create high-performance websites and web applications using the latest technologies. From landing pages to full-stack platforms, we ensure responsive, accessible and user-friendly solutions tailored to your goals.`,
        icon: 'web-icon',
        image: '/images/services/development.gif',
      },
      {
        title: 'Branding',
        slug: 'branding',
        description: 'Memorable brand identity design and strategy.',
        descriptionLong: `Your brand is more than just a logo. We design cohesive branding systems that reflect your company’s values, including logos, color palettes, typography, and visual guidelines for consistent communication.`,
        icon: 'branding-icon',
        image: '/images/services/branding.gif',
      },
      {
        title: 'SEO Optimization',
        slug: 'seo',
        description: 'Improve your visibility on search engines.',
        descriptionLong: `We optimize your site technically and strategically to rank higher on Google and other search engines. This includes metadata, structure, keyword planning, performance tuning, and ongoing SEO audits.`,
        icon: 'seo-icon',
        image: '/images/services/seo.gif',
      },
      {
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        description: 'Beautiful, intuitive interfaces that convert.',
        descriptionLong: `We craft delightful user experiences with accessible, responsive, and aesthetically pleasing interfaces. Our process is user-centered, balancing functionality and design for better engagement and conversions.`,
        icon: 'uiux-icon',
        image: '/images/services/uiux.gif',
      },
      {
        title: 'Hosting & Domain Setup',
        slug: 'hosting-domain',
        description: 'Reliable hosting & domain management.',
        descriptionLong: `We handle domain registration, DNS setup, hosting deployment, SSL, and performance optimization so your website stays online, secure, and fast, no matter where your users are.`,
        icon: 'hosting-icon',
        image: '/images/services/hosting.gif',
      },
      {
        title: 'E-commerce Development',
        slug: 'ecommerce',
        description: 'Online stores that drive conversions.',
        descriptionLong: `We build scalable e-commerce solutions using modern platforms like Shopify, WooCommerce, or custom stacks. Focused on usability, security, and performance to help you sell more, faster.`,
        icon: 'ecommerce-icon',
        image: '/images/services/ecommerce.gif',
      },
      {
        title: 'Performance Optimization',
        slug: 'performance',
        description: 'Make your site lightning fast.',
        descriptionLong: `A fast website improves user experience and SEO. We audit and optimize your assets, code, images, caching, and delivery to ensure your site is blazing fast across devices and networks.`,
        icon: 'performance-icon',
        image: '/images/services/performance.gif',
      },
      {
        title: 'Maintenance & Support',
        slug: 'maintenance',
        description: 'Keep your site secure and up-to-date.',
        descriptionLong: `We provide ongoing technical support, updates, security patches, and performance monitoring so you can focus on your business while we keep everything running smoothly.`,
        icon: 'support-icon',
        image: '/images/services/support.gif',
      },
      {
        title: 'Content Strategy & Copywriting',
        slug: 'content-strategy',
        description: 'Words that connect and convert.',
        descriptionLong: `We help craft clear, compelling content strategies tailored to your brand and audience. From web copy to blog posts, we write with purpose—optimized for humans and search engines alike.`,
        icon: 'content-icon',
        image: '/images/content.gif',
      },
    ],
  })
}

main()
  .then(() => {
    console.log('Seeded successfully.');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });