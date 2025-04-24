"use client"

import Aside from './Aside'
import { Toaster } from '@/app/components/Toaster'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[305px_1fr]">
      <div className="absolute">
        <Toaster />
      </div>
      <Aside />
      <div className="h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export { Layout }