import { Lightbulb, Code2, BookOpenCheck } from 'lucide-react';
import type { ReactNode } from 'react';

export interface Fact {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const blogFacts: Fact[] = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#FDFDFC]" />,
    title: 'Design Increases Trust',
    description: '75% of users judge a company’s credibility based on its website design.',
    color: 'bg-[#044E99]',
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#FDFDFC]" />,
    title: 'Modern ≠ Complex',
    description: 'A modern website doesn’t need to be complicated — just well built.',
    color: 'bg-[#044E99]',
  },
  {
    icon: <BookOpenCheck className="w-6 h-6 text-[#FDFDFC]" />,
    title: 'Content is Still King',
    description: 'Engaging, relevant content keeps users on your site and builds authority.',
    color: 'bg-[#044E99]',
  },
];

export default blogFacts;
