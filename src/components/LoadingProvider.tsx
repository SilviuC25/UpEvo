'use client'

import { useTransition } from 'react'
import { LoaderDots } from './LoaderDots'

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <>
      {isPending && <LoaderDots />}
      {children}
    </>
  )
}
