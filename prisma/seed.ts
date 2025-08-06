import { prisma } from '../src/lib/prisma'

async function main() {
  await prisma.blogPost.createMany({
    data: [
      {
        slug: 'tech-trends-2025',
        title: 'Tech Trends That Will Define 2025',
        content: {
          preview: 'Explore the groundbreaking technologies shaping the future...',
          image: '/images/about-preview/1.jpg',
          body: 'Full article content here...',
        },
        published: true,
      },
      {
        slug: 'design-magic-uiux',
        title: 'The Magic of Great UI/UX Design',
        content: {
          preview: 'Design can make or break your product. Let\'s dive into what matters...',
          image: '/images/about-preview/2.jpg',
          body: 'Full article content here...',
        },
        published: true,
      },
      {
        slug: 'performance-nextjs',
        title: 'Boosting Performance in Next.js Apps',
        content: {
          preview: 'Speed matters. Learn how to optimize your Next.js project...',
          image: '/images/about-preview/3.jpg',
          body: 'Full article content here...',
        },
        published: true,
      },
      {
        slug: 'future-ai',
        title: 'AI: The Friend or the Foe?',
        content: {
          preview: 'Artificial Intelligence is everywhere, but what does it mean for us?',
          image: '/images/about-preview/4.jpg',
          body: 'Full article content here...',
        },
        published: true,
      },
      {
        slug: 'minimalism-coding',
        title: 'Coding with Minimalism in Mind',
        content: {
          preview: 'Less is more. Let\'s build cleaner, maintainable codebases...',
          image: '/images/about-preview/1.jpg',
          body: 'Full article content here...',
        },
        published: true,
      },
      {
        slug: 'darkmode-ux',
        title: 'Why Dark Mode Is More Than a Trend',
        content: {
          preview: 'Dark mode isn\'t just cool — it’s practical. Here’s why...',
          image: '/images/about-preview/2.jpg',
          body: 'Full article content here...',
        },
        published: true,
      },
    ],
  })

  console.log('Blog posts seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
