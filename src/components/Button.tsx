'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  label: string
  href: string
  dark?: boolean
  onClick?: () => void
}

export default function Button({
  label,
  href,
  dark = false,
  onClick,
}: ButtonProps) {
  const borderColor = dark ? '#1A2F4F' : '#FDFDFC'
  const bgColor = dark ? 'transparent' : '#1A2F4F'
  const textColor = dark ? '#1A2F4F' : '#FDFDFC'
  const hoverTextColor = dark ? '#0F1F3C' : '#E6E6E6'

  const buttonContent = (
    <div
      className={clsx(
        'inline-block rounded-full border-2 px-5 py-2 font-medium text-sm cursor-pointer transition-colors duration-200'
      )}
      style={{
        borderColor,
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.color = hoverTextColor
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.color = textColor
      }}
    >
      {label}
    </div>
  )

  if (href && href !== '#') {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}
