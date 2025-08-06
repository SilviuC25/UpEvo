'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'
import { LoaderDots } from '@/components/LoaderDots'
import { motion } from 'framer-motion'

type Service = {
  title: string
  descriptionLong: string
  image: string
}

export default function ServiceSlugPage() {
  const { slug } = useParams()
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

    fetch(`/api/services/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.json()
      })
      .then(data => {
        setService(data)
        setError(false)
      })
      .catch(err => {
        console.error('Failed to fetch service:', err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <LoaderDots />

  if (error || !service) {
    return (
      <motion.div className="min-h-screen flex items-center justify-center text-xl text-[#E74C3C]">
        Service not found.
      </motion.div>
    )
  }

  return (
    <ServiceDetail
      title={service.title}
      descriptionLong={service.descriptionLong}
      image={service.image}
    />
  )
}
