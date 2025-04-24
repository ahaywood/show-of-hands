import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="pr-12 pt-6 pl-6 mb-6">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export { Layout }