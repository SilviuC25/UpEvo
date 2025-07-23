'use client'

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenChange(false)}
            />

            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <motion.div
                className="w-full max-w-4xl p-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => onOpenChange(false)}
                  className="absolute top-4 right-4 z-50 text-[#1A2F4F] hover:text-[#044E99] cursor-pointer transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="rounded-xl bg-[#FDFDFC] text-[#1A2F4F] shadow-2xl overflow-hidden">
                  <div className="pt-6 px-6">
                    <InfiniteMovingCards
                      items={images.map((src) => ({ image: src }))}
                      direction="right"
                      speed="fast"
                    />
                  </div>

                  <DialogHeader className="p-6">
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-[#044E99]">
                      {title}
                    </DialogTitle>
                    <DialogDescription className="text-md md:text-lg text-[#2A3D5C] mt-2">
                      {longDescription}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Tags & Button on same row */}
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
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
