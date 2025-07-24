import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/ServiceDetail'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = await prisma.service.findMany({
    select: { slug: true },
  })

  return services.map(service => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await prisma.service.findUnique({
    where: { slug: params.slug },
  })

  if (!service) return {}

  return {
    title: service.title,
    description: service.descriptionLong,
  }
}

export default async function ServicePage({ params }: Props) {
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
