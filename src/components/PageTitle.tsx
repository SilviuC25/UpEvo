'use client'

import { motion } from 'framer-motion'

interface PageTitleProps {
  text: string
}

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-[#1A2F4F] text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      {text}
    </motion.h1>
  )
}
