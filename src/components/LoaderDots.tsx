'use client'

import { motion } from 'framer-motion'

export const LoaderDots = () => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#FDFDFC] backdrop-blur-sm">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-[#1A2F4F]"
            initial={{ y: 0, opacity: 0.6 }}
            animate={{
              y: [0, -6, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 0.1,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}
