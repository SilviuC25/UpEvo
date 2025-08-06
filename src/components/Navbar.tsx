'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { MenuItem, PreviewItem } from './NavbarMenuItems'
import { navbarItems } from '@/data/navbar/navbarItems'

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Navbar() {
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState<string | null>(null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="backdrop-blur-md bg-gradient-to-br from-[#1A2F4F] to-[#2A3D5C] w-full sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/">
            <Image
              src="/logo/logo-bg-removed-min-v2.png"
              alt="UpEvo Logo"
              width={200}
              height={200}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-6"
          variants={itemVariants}
        >
          {navbarItems.map((navItem) => {
            const isCurrent = currentPath === navItem.href

            if (!navItem.children) {
              return (
                <motion.div
                  key={navItem.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    href={navItem.href}
                    className={clsx(
                      'relative text-[#FDFDFC] font-medium transition-colors duration-200 hover:text-[#F8FBFB] group',
                      isCurrent && 'text-[#FDFDFC] font-semibold'
                    )}
                  >
                    {navItem.label}
                    <span
                      className={clsx(
                        'absolute left-0 -bottom-1 h-[2px] w-full transform bg-[#F8FBFB] transition-transform duration-400 ease-out origin-left',
                        isCurrent
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />
                  </Link>
                </motion.div>
              )
            }

            return (
              <motion.div key={navItem.label} variants={itemVariants}>
                <MenuItem
                  item={navItem.label}
                  href={navItem.href}
                  active={activeMenu}
                  setActive={setActiveMenu}
                >
                  {navItem.children.map((child) => (
                    <PreviewItem
                      key={child.href}
                      title={child.title}
                      href={child.href}
                      description={child.description}
                      image={child.image}
                      liveLink={child.liveLink}
                    />
                  ))}
                </MenuItem>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.nav>
  )
}
