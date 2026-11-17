import type { Metadata, ResolvingMetadata } from 'next'
import { getServiceBySlug } from '@/data/services'

interface LayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export async function generateMetadata(
  { params }: LayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      images: [service.image],
    },
  }
}

export default function ServiceDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}