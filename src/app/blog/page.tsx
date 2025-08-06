'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CardContainer, CardBody, CardItem } from '@/components/3d-card'
import PageTitle from '@/components/PageTitle'
import AnimatedButton from '@/components/AnimatedButton'
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

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Title A-Z', value: 'az' },
  { label: 'Title Z-A', value: 'za' },
]

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [filtered, setFiltered] = useState<BlogPost[]>([])
  const [sort, setSort] = useState('newest')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs')
        if (!res.ok) throw new Error('Failed to fetch blogs')
        const data = await res.json()
        setBlogs(data)
        setFiltered(sortBlogs(data, sort))
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  useEffect(() => {
    setFiltered(sortBlogs(blogs, sort))
  }, [sort])

  const sortBlogs = (data: BlogPost[], method: string): BlogPost[] => {
    return [...data].sort((a, b) => {
      if (method === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      if (method === 'oldest') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      if (method === 'az') return a.title.localeCompare(b.title)
      if (method === 'za') return b.title.localeCompare(a.title)
      return 0
    })
  }

  const formatDate = (iso: string) => {
    const date = new Date(iso)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <main className="min-h-screen py-16 px-4 md:px-12 bg-gradient-radial from-[#FDFDFC] via-[#F8FBFB] to-[#E6EEF6]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <PageTitle text="Insights & Ideas" />
      </motion.div>

      <motion.div
        className="flex justify-between flex-wrap items-center gap-4 mb-8 mt-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-[#B5C8DB] rounded-lg px-4 py-2 text-[#1A2F4F] bg-[#FDFDFC] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7A8FAA] transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </motion.select>
      </motion.div>

      {loading ? (
        <LoaderDots />
      ) : filtered.length === 0 ? (
        <motion.p
          className="text-center text-[#2A3D5C]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No blogs found.
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          {filtered.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[900px] mx-auto relative mt-12 md:mt-0 md:[&:nth-child(2n)]:mt-12"
            >
              <CardContainer>
                <CardBody wide className="overflow-hidden bg-[#FDFDFC] rounded-2xl border border-[#B5C8DB] shadow-md relative">
                  <motion.div
                    className="absolute top-4 left-4 bg-[#1A2F4F] text-white text-xs px-3 py-1 rounded-full shadow-sm z-10"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {formatDate(blog.createdAt)}
                  </motion.div>

                  {blog.content?.image && (
                    <CardItem translateZ={40}>
                      <motion.img
                        src={blog.content.image}
                        alt={blog.title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </CardItem>
                  )}

                  <div className="flex flex-col justify-between px-6 py-6">
                    <div>
                      <CardItem
                        as={motion.h3}
                        className="text-[#1A2F4F] text-xl font-bold mb-4"
                        translateZ={30}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {blog.title}
                      </CardItem>

                      <CardItem
                        as={motion.p}
                        className="text-[#2A3D5C] text-sm leading-relaxed"
                        translateZ={20}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        {blog.content?.preview || 'No preview available.'}
                      </CardItem>
                    </div>

                    <div className="mt-6">
                      <CardItem
                        as={motion.div}
                        translateZ={10}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <AnimatedButton
                          label="Read More"
                          href={`/blog/${blog.slug}`}
                          dark={false}
                        />
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      )}
    </main>
  )
}
