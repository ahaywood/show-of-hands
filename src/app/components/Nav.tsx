import React from 'react'

const NavHorizontalList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex items-center gap-12 horizontal">
      {children}
    </ul>
  )
}

const NavVerticalList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex flex-col gap-4 items-start pl-10">
      {children}
    </ul>
  )
}

const NavItem = ({ active = false, href, children, className = '' }:
  { active?: boolean, href: string, children: React.ReactNode, className?: string }) => {
  return (
    <li className={`font-bold text-xl w-full
      ${active ? 'active' : ''}
    `}>
      <a href={href} className={`inset-full text-han-purple hover:text-medium-slate-blue ${className ? className : ''}`}>{children}</a>
    </li>
  )
}

export { NavHorizontalList, NavVerticalList, NavItem }