'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type HoverItem = {
  title: string
  description: string
  slug: string
  icon: React.ReactNode
}

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: HoverItem[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
            ease: 'easeOut',
          }}
        >
          <Link
            href={`/services/${item.slug}`}
            className="relative group block p-2 w-full h-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 w-full h-full bg-[#225A93]/10 rounded-3xl z-10"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    transition: { duration: 0.2, ease: 'easeIn' },
                  }}
                />
              )}
            </AnimatePresence>

            <Card>
              <CardIcon>{item.icon}</CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'relative z-20 w-full h-full rounded-3xl overflow-hidden border border-[#E5EAF0] group-hover:border-[#225A93] transition-all duration-300',
        'bg-[#FDFDFC] shadow-sm group-hover:shadow-md',
        'transform group-hover:scale-[1.015] group-hover:-translate-y-1 ease-in-out',
        className
      )}
    >
      <div className="p-6">{children}</div>
    </div>
  )
}

const CardIcon = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-[#B1C6DC]/60 text-[#044E99]',
        'group-hover:bg-[#225A93] group-hover:text-white transition-colors duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        'text-[#1A2F4F] text-lg font-semibold tracking-wide mb-1',
        className
      )}
    >
      {children}
    </h4>
  )
}

const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn('text-sm text-[#2A3D5C]/80 leading-relaxed', className)}
    >
      {children}
    </p>
  )
}
