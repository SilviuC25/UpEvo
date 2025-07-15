'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CardHoverEffect } from '@/components/CardHoverEffect'

import {
  Paintbrush,
  Code,
  Globe,
  ShoppingCart,
  Search,
  Settings,
  Loader2,
  FileText,
  PenTool,
} from 'lucide-react'

type Service = {
  title: string
  description: string
  slug: string
  icon: string
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch('/api/services')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then(data => setServices(data))
      .catch(err => {
        console.error('Failed to fetch services:', err)
      })
  }, [])

  const iconMap: Record<string, React.ReactNode> = {
    'branding-icon': <Paintbrush className="w-6 h-6" />,
    'web-icon': <Code className="w-6 h-6" />,
    'seo-icon': <Search className="w-6 h-6" />,
    'uiux-icon': <PenTool className="w-6 h-6" />,
    'hosting-icon': <Globe className="w-6 h-6" />,
    'ecommerce-icon': <ShoppingCart className="w-6 h-6" />,
    'performance-icon': <Loader2 className="w-6 h-6" />,
    'support-icon': <Settings className="w-6 h-6" />,
    'content-icon': <FileText className="w-6 h-6" />,
  }

  const servicesWithIcons = services.map(service => ({
    ...service,
    icon: iconMap[service.icon] || <Settings className="w-6 h-6" />,
  }))

  return (
    <motion.main
      className="min-h-screen bg-[#FDFDFC] px-4 md:px-8 lg:px-16 pt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.section
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#1A2F4F] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <CardHoverEffect items={servicesWithIcons} />
        </motion.div>
      </motion.section>
    </motion.main>
  )
}
