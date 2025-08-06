export type ProjectPreview = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const portfolioProjects: ProjectPreview[] = [
  {
    id: 'fasttyper',
    title: 'FastTyper',
    description:
      'A real-time typing speed game with user authentication, personalized profiles, and a live leaderboard. Built with performance and fun in mind — ideal for anyone wanting to improve their typing skills or challenge friends.',
    image: '/images/portfolio/fast-typer/logo.png',
    link: 'https://fast-typer-pi.vercel.app/',
  },
  {
    id: 'hardwareexplorer',
    title: 'Hardware Explorer',
    description:
      'A blog platform for tech enthusiasts, featuring live post creation, previews, and full markdown support. Designed to make writing and reading tech content smooth and visually engaging — with a clean, minimal interface.',
    image: '/images/portfolio/hardware-explorer/logo.png',
    link: 'https://hardwareexplorer.vercel.app/',
  },
];

export default portfolioProjects;
