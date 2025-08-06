import { ReactNode } from 'react';
import { IconLayout, IconCode, IconRocket } from '@tabler/icons-react';

export interface Service {
  title: string;
  category: string;
  icon: ReactNode;
  bullets: string[];
  color: string;
}

const services: Service[] = [
  {
    title: 'Custom Website Development',
    category: 'Development',
    icon: <IconCode className="w-6 h-6 text-white" />,
    bullets: [
      'Next.js + Tailwind stack',
      'Built from scratch — no templates',
      'Fully responsive & optimized',
    ],
    color: 'bg-[#225A93]',
  },
  {
    title: 'Brand‑Driven UI/UX Design',
    category: 'Design',
    icon: <IconLayout className="w-6 h-6 text-white" />,
    bullets: [
      'Custom visual identity',
      'Logo & brand direction',
      'Design tailored to your story',
    ],
    color: 'bg-[#044E99]',
  },
  {
    title: '7‑Day Delivery',
    category: 'Efficiency',
    icon: <IconRocket className="w-6 h-6 text-white" />,
    bullets: [
      'From brief to live in under a week',
      'Everything you need, nothing you don’t',
      'Clear process, zero delays',
    ],
    color: 'bg-[#0D4E8C]',
  },
];

export default services;
