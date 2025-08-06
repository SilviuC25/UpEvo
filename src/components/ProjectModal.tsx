'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { useEffect, useRef } from 'react'

interface ProjectModalProps {
  open: boolean
  onOpenChange: (value: boolean) => void
  project: {
    title: string
    longDescription: string
    liveUrl: string
    images: string[]
    tags?: string[]
  }
}

export default function ProjectModal({ open, onOpenChange, project }: ProjectModalProps) {
  const { title, longDescription, liveUrl, images, tags = [] } = project
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onOpenChange])

  const handleClickOutside = (e: React.MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      onOpenChange(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={handleClickOutside}
          >
            <motion.div
              ref={containerRef}
              className="relative max-w-4xl w-full rounded-xl bg-[#FDFDFC] shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                onClick={() => onOpenChange(false)}
                whileHover={{ rotate: 90, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#044E99] hover:bg-[#0D4E8C] transition-colors cursor-pointer"
                aria-label="Close modal"
                type="button"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                  className="h-6 w-6"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              </motion.button>

              <div className="pt-6 px-6">
                <InfiniteMovingCards
                  items={images.map((src) => ({ image: src }))}
                  direction="right"
                  speed="fast"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#044E99]">{title}</h2>
                <p className="text-md md:text-lg text-[#2A3D5C] mt-2">{longDescription}</p>
              </div>

              <motion.div
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {tags.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {tags.map((tag) => (
                      <motion.div
                        key={tag}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="cursor-pointer bg-[#B1C6DC]/30 text-[#044E99] border-[#B1C6DC] hover:bg-[#B1C6DC]/50 transition-colors"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                <Button
                  asChild
                  variant="ghost"
                  className="text-[#044E99] hover:text-[#0D4E8C] whitespace-nowrap"
                >
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
