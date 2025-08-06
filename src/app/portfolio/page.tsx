'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CardContainer, CardBody, CardItem } from '@/components/3d-card'
import PageTitle from '@/components/PageTitle'
import AnimatedButton from '@/components/AnimatedButton'
import ProjectModal from '@/components/ProjectModal'
import { LoaderDots } from '@/components/LoaderDots'

type Project = {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  liveUrl: string
  images: string[]
  createdAt: string
  tags?: string[]
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects')
        if (!res.ok) throw new Error('Failed to fetch projects')

        const data: Project[] = await res.json()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <main className="min-h-screen bg-[#F8FBFB] py-16 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <PageTitle text="Our Expertise" />
      </motion.div>

      {loading ? (
        <LoaderDots />
      ) : projects.length === 0 ? (
        <motion.p
          className="text-center text-[#2A3D5C]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No projects found.
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <CardContainer>
                <CardBody className="bg-[#FDFDFC] shadow-md rounded-xl">
                  {project.images[0] && (
                    <CardItem translateZ={50}>
                      <motion.img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </CardItem>
                  )}

                  <CardItem
                    as={motion.h3}
                    className="text-[#1A2F4F] text-xl font-bold"
                    translateZ={40}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    as={motion.p}
                    className="text-[#2A3D5C] text-sm mt-2"
                    translateZ={30}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.shortDescription}
                  </CardItem>

                  <motion.div
                    className="flex gap-4 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <CardItem translateZ={20}>
                      <AnimatedButton
                        label="View Live"
                        href={project.liveUrl}
                        dark={false}
                      />
                    </CardItem>

                    <CardItem translateZ={20}>
                      <AnimatedButton
                        label="Details"
                        href="#"
                        dark
                        onClick={() => setSelectedProject(project)}
                      />
                    </CardItem>
                  </motion.div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          open={!!selectedProject}
          onOpenChange={(open) =>
            setSelectedProject(open ? selectedProject : null)
          }
          project={selectedProject}
        />
      )}
    </main>
  )
}
