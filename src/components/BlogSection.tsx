'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import blogFacts from '@/data/home/BlogFacts';
import Button from './Button';

const BlogSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="w-full bg-[#0E1B2B] py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 [background-size:18px_18px] [background-image:radial-gradient(#1F334D_1px,transparent_1px)] opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-bold text-[#FDFDFC] text-center"
          ref={ref}
        >
          Choose Smarter Strategies for Your Online Success
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${fact.color}`}>
                {fact.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#FDFDFC] mb-2">{fact.title}</h3>
              <p className="text-sm text-[#B5C8DB]">{fact.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-base md:text-lg scale-110">
            <Button label="Explore All Blog Posts →" href="/blog" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
