'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CardContainer, CardBody, CardItem } from '@/components/3d-card'
import PageTitle from '@/components/PageTitle'
import AnimatedButton from '@/components/AnimatedButton'
import ProjectModal from '@/components/ProjectModal'

type Project = {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  liveUrl: string
  images: string[]
  createdAt: string
  tags?: string[] // optional, dacă vrei să adaugi taguri în DB mai târziu
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
      <PageTitle text="Our Expertise" />

      {loading ? (
        <p className="text-center text-[#2A3D5C]">Loading projects...</p>
      ) : projects.length === 0 ? (
        <p className="text-center text-[#2A3D5C]">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
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
                <CardBody>
                  {project.images[0] && (
                    <CardItem translateZ={50}>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
                      />
                    </CardItem>
                  )}

                  <CardItem
                    as="h3"
                    className="text-[#1A2F4F] text-xl font-bold"
                    translateZ={40}
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    className="text-[#2A3D5C] text-sm mt-2"
                    translateZ={30}
                  >
                    {project.shortDescription}
                  </CardItem>

                  <div className="flex gap-4 mt-6">
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
                  </div>
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
