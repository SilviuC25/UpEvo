'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { LoaderDots } from '@/components/LoaderDots'

type BlogPost = {
  id: string
  slug: string
  title: string
  content: {
    preview?: string
    image?: string
    body?: string
  }
  published: boolean
  createdAt: string
  updatedAt: string
}

export default function BlogSlugPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

    fetch(`/api/blogs/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Post not found')
        return res.json()
      })
      .then(data => {
        setPost(data)
        setError(false)
      })
      .catch(err => {
        console.error(err)
        setPost(null)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return <LoaderDots />
  }

  if (error || !post) {
    return (
      <motion.div className="min-h-screen flex items-center justify-center text-xl text-[#E74C3C]">
        Blog not found.
      </motion.div>
    )
  }

  return (
    <main className="relative bg-[#F8FBFB] min-h-screen px-6 md:px-16 lg:px-32 py-20 overflow-x-hidden">
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#B1C6DC] opacity-30 rounded-full blur-3xl z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-black text-center text-[#1A2F4F] mb-14 leading-tight"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {post.title}
        </motion.h1>

        {post.content?.image && (
          <motion.div
            className="rounded-3xl overflow-hidden mb-16 shadow-xl border border-[#B5C8DB]"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={post.content.image}
              alt={post.title}
              className="w-full object-cover h-[420px]"
            />
          </motion.div>
        )}

        {post.content?.body ? (
          <motion.article
            className="prose prose-lg max-w-none text-[#2A3D5C] prose-blockquote:border-[#B5C8DB] prose-blockquote:text-[#044E99] prose-a:text-[#044E99] prose-a:no-underline hover:prose-a:underline prose-headings:text-[#0D4E8C] prose-strong:text-[#1A2F4F] prose-img:rounded-xl prose-img:shadow-md prose-code:text-sm prose-code:bg-[#FDFDFC] prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:border prose-code:border-[#B5C8DB]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content.body }}
          />
        ) : (
          <p className="text-center text-[#2C3E50] mt-10">No content available.</p>
        )}
      </div>
    </main>
  )
}
