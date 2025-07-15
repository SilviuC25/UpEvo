"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: (item: string | null) => void
  active: string | null
  item: string
  href: string
  children?: React.ReactNode
}) => {
  const isActive = active === item
  const pathname = usePathname()

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={href}
          className={clsx(
            'relative text-[#FDFDFC] font-medium transition-colors duration-200 hover:text-[#F8FBFB] group',
            pathname === href && 'text-[#FDFDFC] font-semibold'
          )}
        >
          {item}
          <span
            className={clsx(
              'absolute left-0 -bottom-1 h-[2px] w-full transform bg-[#F8FBFB] transition-transform duration-400 ease-out origin-left',
              pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            )}
          />
        </Link>
      </motion.div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 pt-6 z-50"
        >
          <motion.div
            layoutId="active"
            className="bg-[#FDFDFC] rounded-xl shadow-xl p-6"
            style={{
              width: "50vw",
              display: "flex",
              justifyContent: "center",
            }}
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
          >
            <div
              className="grid gap-6 justify-center"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                maxWidth: "800px",
                width: "100%",
              }}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export const PreviewItem = ({
  title,
  description,
  href,
  image,
  liveLink,
}: {
  title: string
  description?: string
  href: string
  image?: string
  liveLink?: string
}) => {
  const onlyTitle = !image && !description

  return (
    <div
      className={clsx(
        "hover:bg-[#F8FBFB] rounded-lg p-4 w-full max-w-[220px] min-w-[200px] shadow-sm transition-shadow duration-200",
        onlyTitle ? "flex justify-center items-center text-center" : "flex flex-col items-start gap-3"
      )}
    >
      <Link href={href} className="w-full flex flex-col gap-3">
        {image && (
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md shadow-md">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 220px"
            />
          </div>
        )}

        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[#1A2F4F] text-sm">{title}</p>
          {description && (
            <p className="text-xs text-[#7A8FAA] leading-snug">{description}</p>
          )}
        </div>
      </Link>

      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-[#225A93] text-sm font-medium inline-flex items-center gap-2 transition-all duration-200 hover:font-semibold hover:text-[#1A2F4F]"
        >
          <span className="text-base text-[#1A2F4F] transition-transform duration-200 group-hover:translate-x-0.5">
            <svg
              className="w-5 h-5 text-[#1A2F4F]/90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
              <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169
                2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
            </svg>
          </span>
          View Live
        </a>
      )}
    </div>
  )
}
