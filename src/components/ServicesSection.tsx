'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import services from '@/data/home/ServicesSection';

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFB] py-20 px-4 md:py-32">
      <div className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F8FBFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A2F4F]"
        >
          Your Website. Our Expertise. Endless Possibilities.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="rounded-2xl border border-[#B1C6DC] bg-[#FDFDFC] shadow-sm p-6 transition hover:shadow-md hover:scale-[1.02] flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color} mb-4`}>
                {service.icon}
              </div>

              <motion.span
                className="text-sm font-medium text-[#7A8FAA] uppercase tracking-wide mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index + 0.2, duration: 0.4 }}
              >
                {service.category}
              </motion.span>

              <motion.h3
                className="text-xl font-semibold text-[#1A2F4F] mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
              >
                {service.title}
              </motion.h3>

              <motion.ul
                className="space-y-1 text-sm text-[#2A3D5C]"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
              >
                {service.bullets.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </motion.ul>
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
            <Button label="See all services →" href="/services" dark />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
