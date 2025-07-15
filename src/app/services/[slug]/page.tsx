import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'

interface ServicePageProps {
  params: { slug: string }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  })

  if (!service) return notFound()

  return (
    <ServiceDetail
      title={service.title}
      descriptionLong={service.descriptionLong}
      image={service.image}
    />
  )
}
