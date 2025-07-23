'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface AnimatedButtonProps {
  label: string
  href: string
  dark?: boolean
  onClick?: () => void
}

export default function AnimatedButton({
  label,
  href,
  dark = false,
  onClick,
}: AnimatedButtonProps) {
  const baseBorderColor = dark ? '#1A2F4F' : '#FDFDFC'
  const hoverBorderColor = '#1A2F4F'
  const bgColor = dark ? '#1A2F4F' : '#FDFDFC'
  const defaultBg = dark ? 'transparent' : '#1A2F4F'

  const buttonContent = (
    <div
      className={clsx(
        'relative group inline-block overflow-hidden rounded-full border-2 transition-colors duration-500 cursor-pointer'
      )}
      style={{
        borderColor: baseBorderColor,
        backgroundColor: defaultBg,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = hoverBorderColor
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = baseBorderColor
      }}
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
  )

  if (href && href !== '#') {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}
