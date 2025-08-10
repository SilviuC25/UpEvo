import services from '@/data/services/servicesList'
import ServiceDetail from '@/components/ServiceDetail'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug
  }))
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <ServiceDetail
      title={service.title}
      descriptionLong={service.descriptionLong}
      image={service.image || '/images/services/default.jpg'}
    />
  )
}
