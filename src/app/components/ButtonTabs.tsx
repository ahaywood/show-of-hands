"use client"

import React from 'react'

const ButtonTabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center border-2 border-r-0 border-han-purple">{children}</div>
  )
}

const Tab = ({ handleClick = () => { }, isActive = false, children }:
  { handleClick?: () => void, isActive?: boolean, children: React.ReactNode }) => {
  return (
    <button
      onClick={handleClick}
      className={`text-han-purple p-2 center w-14 h-12 border-r-2 border-han-purple ${isActive ? "bg-han-purple text-unbleached-silk" : ""}`}>
      {children}
    </button>
  )
}

export { ButtonTabs, Tab }