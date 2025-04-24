"use client"

import React, { useState } from 'react'

const ToggleButton = ({ defaultChecked, label, onClick, ...rest }:
  { defaultChecked: boolean, label: string, onClick?: () => void }) => {
  const [isActive, setIsActive] = useState(defaultChecked)

  return (
    <button
      role="button"
      onClick={(e) => {
        e.preventDefault();
        setIsActive(prev => !prev);
        onClick?.();
      }}
      className={`text-sm font-bold h-8 px-6 rounded-full cursor-pointer
        ${isActive ? 'bg-han-purple text-unbleached-silk' : 'bg-unbleached-silk text-han-purple'}
      `}
      {...rest}
    >
      {label}
    </button>
  )
}

export { ToggleButton }