import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest } from 'next';
import type { NextRequest as AppRequest } from 'next/server';

type RouteContext = {
  params: { slug: string };
};

export async function GET(req: AppRequest, context: RouteContext) {
  const { slug } = context.params;

  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
      select: {
        id: true,
        slug: true,
        title: true,
        content: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!post) {
      return new NextResponse('Not Found', { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
