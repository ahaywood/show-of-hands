import React from 'react'

const DropdownButton = ({ children, onClick, destructive = false }:
  { children: React.ReactNode, onClick: () => void, destructive?: boolean }) => {
  return (
    <li className="px-4">
      <button className={`flex items-center gap-2 whitespace-nowrap font-bold cursor-pointer
        ${destructive ? 'text-coral-red' : 'text-han-purple hover:text-medium-slate-blue'}
        `} onClick={onClick}>
        {children}
      </button>
    </li>
  )
}

const DropdownLink = ({ children, href, destructive = false }:
  { children: React.ReactNode, href: string, destructive?: boolean }) => {
  return (
    <li className="px-4">
      <a href={href} className={`flex items-center gap-2 whitespace-nowrap  font-bold
        ${destructive ? 'text-coral-red' : 'text-han-purple hover:text-medium-slate-blue'}
        `}>
        {children}
      </a>
    </li>
  )
}

const DropdownDivider = () => {
  return (
    <li>
      <div className="border-t-1 border-han-purple w-full" />
    </li>
  )
}
const DropdownMenu = ({ children, position }: { children: React.ReactNode, position: 'top' | 'bottom' }) => {
  return (
    <ul className={`bg-fair-pink rounded-xl border-2 border-han-purple min-w-[200px] py-4 relative z-menu flex flex-col gap-4 dropdown
      ${position === 'top' ? 'top' : 'bottom'}
    `}>
      {children}
    </ul>
  )
}

export { DropdownMenu, DropdownLink, DropdownButton, DropdownDivider }