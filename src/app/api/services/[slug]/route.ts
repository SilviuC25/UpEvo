import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  try {
    const service = await prisma.service.findUnique({
      where: { slug },
    })

    if (!service) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(service)
  } catch (error) {
    console.error('[GET SERVICE ERROR]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
