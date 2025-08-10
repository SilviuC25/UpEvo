'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LoaderDots } from '@/components/LoaderDots'
import ServiceDetail from '@/components/ServiceDetail'
import services, { Service } from '@/data/services/servicesList'

export default function ServiceSlugPage() {
  const { slug } = useParams()
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    const timer = setTimeout(() => {
      const found = services.find(s => s.slug === slug)
      setService(found || null)
      setLoading(false)
    }, 200)
    return () => clearTimeout(timer)
  }, [slug])

  if (loading) return <LoaderDots />

  if (!service) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center text-xl text-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Service not found.
      </motion.div>
    )
  }

  return (
    <ServiceDetail
      title={service.title}
      descriptionLong={service.descriptionLong}
      image={service.image || '/images/services/default.jpg'}
    />
  )
}
