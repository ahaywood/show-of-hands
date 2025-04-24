import { NavHorizontalList, NavItem } from '@/app/components/Nav'

const Header = () => {
  return (
    <div className="flex justify-end absolute right-12 top-6">
      <NavHorizontalList>
        <NavItem href="/signup" active={false}>Sign Up</NavItem>
        <NavItem href="/login" active={false}>Login</NavItem>
      </NavHorizontalList>
    </div>
  )
}

export { Header }