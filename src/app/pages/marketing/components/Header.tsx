"use client";

import { NavHorizontalList, NavItem } from '@/app/components/Nav'

const Header = ({ pathname }: { pathname: string }) => {
  return (
    <div className="flex justify-between items-center px-page mt-page">
      <NavHorizontalList>
        <NavItem href="/" active={pathname === '/'}>Home</NavItem>
        <NavItem href="/features" active={pathname === '/features'}>Features</NavItem>
        <NavItem href="/pricing" active={pathname === '/pricing'}>Pricing</NavItem>
      </NavHorizontalList>
      <NavHorizontalList>
        <NavItem href="/signup" active={pathname === '/signup'}>Sign Up</NavItem>
        <NavItem href="/login" active={pathname === '/login'}>Login</NavItem>
      </NavHorizontalList>
    </div>
  )
}

export { Header }