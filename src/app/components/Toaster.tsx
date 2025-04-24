"use client"

/**
 * This component is a wrapper for the Sonner Toaster component because
 * it needs to be a client component.
 */

import { Toaster as ToasterComponent } from 'sonner'

const Toaster = () => {
  return (
    <ToasterComponent position="bottom-right" richColors />
  )
}

export { Toaster }