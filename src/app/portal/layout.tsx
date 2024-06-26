'use client'

import { lazy } from 'react'

const BasePortal = lazy(() => import('@afx/views/base/index.layout'))

export default function PortalLayout({
  children
}: {
  children: React.ReactNode
}) {

  return <BasePortal>{children}</BasePortal>
}