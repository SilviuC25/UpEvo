'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface AnimatedButtonProps {
  label: string
  href: string
  dark?: boolean
}

export default function AnimatedButton({ label, href, dark = false }: AnimatedButtonProps) {
  const borderColor = dark ? '#1A2F4F' : '#FDFDFC'
  const bgColor = dark ? '#1A2F4F' : '#FDFDFC'

  return (
    <Link href={href}>
      <div
        className="relative group inline-block overflow-hidden rounded-full border-2"
        style={{ borderColor }}
      >
        <span
          className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"
          style={{ backgroundColor: bgColor }}
        />
        <span
          className={clsx(
            'relative z-10 block px-5 py-2 font-medium text-sm transition-colors duration-500',
            dark
            ? 'text-[#1A2F4F] group-hover:text-[#FDFDFC]'
            : 'text-[#FDFDFC] group-hover:text-[#1A2F4F]'
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}
