import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'

export default async function ServicePage({
  params,
}: {
  params: { slug: string }
}) {
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
