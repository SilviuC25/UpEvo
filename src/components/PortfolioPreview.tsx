'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Button from './Button';
import portfolioProjects from '@/data/home/PortfolioProjects';

const PortfolioPreview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFB] py-20 px-4 md:py-32">
      <div className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F8FBFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center text-3xl md:text-5xl font-bold text-[#1A2F4F]"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-12">
          <Carousel>
            <CarouselPrevious />
            <CarouselContent className="flex justify-center gap-6">
              {portfolioProjects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                    className="bg-[#FDFDFC] rounded-2xl border border-[#B5C8DB] shadow-sm overflow-hidden w-[300px] md:w-[340px] flex-shrink-0"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4 flex flex-col h-[220px] justify-between">
                      <h3 className="text-xl font-semibold text-[#1A2F4F] mb-2">{project.title}</h3>
                      <p className="text-sm text-[#2A3D5C] flex-grow">{project.description}</p>
                      <div className="text-center scale-80">
                        <Button label="View Live →" href={project.link} />
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-base md:text-lg scale-110">
            <Button label="Explore Full Portfolio →" href="/portfolio" dark />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
