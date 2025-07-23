'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import AnimatedButton from '@/components/AnimatedButton'
import PageTitle from '@/components/PageTitle'

interface Props {
  title: string
  descriptionLong: string
  image: string
}

export default function ServiceDetail({ title, descriptionLong, image }: Props) {
  return (
    <div className="min-h-screen bg-[#F8FBFB] text-[#1A2F4F] px-6 md:px-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <PageTitle text={title} />
          <style jsx>{`
            :global(h1) {
              text-align: left !important;
            }
          `}</style>
          <p className="text-lg md:text-xl text-[#2A3D5C] leading-relaxed">{descriptionLong}</p>
          <AnimatedButton label="Contact Us" href="/contact" dark />
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
