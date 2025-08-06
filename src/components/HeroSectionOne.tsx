'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import AnimatedButton from '@/components/AnimatedButton'
import { FlipWords } from '@/components/ui/FlipWords'

const services = ['Premium Custom Websites', 'On-Brand Visual Experiences', 'Launch-Ready in 7 Days']

export default function HeroSectionOne() {
  const words = ['perform', 'sell', 'inspire', 'scale', 'innovate', 'deliver']

  return (
    <div className="relative w-full overflow-hidden bg-[#F8FBFB] px-4 py-10 md:py-20">
      <div
        className="absolute inset-0 [background-size:20px_20px]
        [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] 
        dark:[background-image:radial-gradient(#404040_1px,transparent_1px)] z-0"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F8FBFB] dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mx-auto max-w-4xl text-center text-2xl font-bold text-[#1A2F4F] md:text-4xl lg:text-7xl leading-tight"
        >
          <span className="inline-block">
            We build websites that&nbsp; <br />
            <span className="inline-block relative min-w-[6ch] min-h-[1em]">
              <FlipWords words={words} />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mx-auto max-w-xl py-6 text-center text-lg font-normal text-[#2A3D5C]"
        >
          At UpEvo, we design and develop high-performance websites that reflect who you are and where you’re going. 
          Our mission is simple: help modern businesses upgrade their online presence and evolve into brands that lead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="mt-4 flex flex-col items-center gap-4 md:flex-row md:justify-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex items-center gap-2 rounded-full bg-[#FDFDFC] px-5 py-2 shadow-md transition-all duration-300 hover:bg-[#E8F0F7]"
            >
              <CheckCircle className="h-5 w-5 text-[#044E99]" />
              <span className="text-sm font-medium text-[#2A3D5C]">{service}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="text-base md:text-lg scale-110">
            <AnimatedButton label="Start Your Project" href="/contact" />
          </div>
          <div className="text-base md:text-lg scale-110">
            <AnimatedButton label="Explore Now" href="/portfolio" dark />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
