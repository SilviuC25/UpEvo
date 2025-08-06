'use client';

import { Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Image from 'next/image';

const images = [
  '/images/about-preview/1.jpg',
  '/images/about-preview/2.jpg',
  '/images/about-preview/3.jpg',
  '/images/about-preview/4.jpg',
];

export default function AboutPreviewSection() {
  return (
    <section
      className="w-full bg-[#0E1B2B] py-24 relative overflow-hidden"
      id="about-preview"
    >
      <div
        className="absolute inset-0 [background-size:18px_18px] [background-image:radial-gradient(#1F334D_1px,transparent_1px)] opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-[#044E99] text-[#FDFDFC] text-sm md:text-base font-semibold px-4 py-2 rounded-full shadow-lg shadow-[#044E99]/30 transition-all"
            >
              <Target className="w-4 h-4 md:w-5 md:h-5 text-[#FDFDFC]" />
              Our Mission
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold leading-snug text-[#FDFDFC]"
          >
            Modern websites aren't built just to look good — they're built to convert, connect, and scale your vision.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-base md:text-lg scale-100">
              <Button label="Learn More About Us" href="/about" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={src}
                alt={`About preview ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full aspect-[4/3] transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
