import { prisma } from '../src/lib/prisma'

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "FastTyper",
        shortDescription: "Typing‑speed game with user auth, profiles & leaderboard",
        longDescription:
          "FastTyper is a fun typing-speed web game built with authentication, user profiles, and a dynamic leaderboard. Built with Next.js, Prisma, and PostgreSQL. Features include real-time WPM tracking and score saving.",
        liveUrl: "https://fast-typer-pi.vercel.app/",
        images: ["/images/portfolio/fast-typer.png"],
        tags: [
          "Next.js",
          "Prisma",
          "PostgreSQL",
          "Game",
          "Authentication",
          "Real-time",
          "Leaderboard",
          "Typing",
        ],
      },
      {
        title: "Hardware Explorer",
        shortDescription: "Tech blog platform with in‑app post creation & previews",
        longDescription:
          "Hardware Explorer is a blog-style web platform where users can write, preview, and publish tech articles. Built with Next.js and Markdown support, featuring user-friendly post creation tools.",
        liveUrl: "https://hardwareexplorer.vercel.app/",
        images: ["/images/portfolio/hardware-explorer.png"],
        tags: [
          "Next.js",
          "Blog",
          "Markdown",
          "MDX",
          "Content Creation",
          "Responsive Design",
          "Tech",
        ],
      },
    ],
  })

  console.log("Projects seeded successfully.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
