import { AccountBar } from '@/app/components/AccountBar'
import { Logo } from '@/app/components/Logo'
import { NavItem, NavVerticalList } from '@/app/components/Nav'
import { NotificationCount } from '@/app/components/NotificationCount'
import { link } from '@/app/shared/links'

const Aside = () => {
  return (
    <div className="aside-nav border-r-[3px] border-white h-screen flex flex-col justify-between overflow-y-scroll">
      <div className="pl-3 pr-page pt-5">
        <a href={link("/admin/dashboard")} className="mb-10 block"><Logo width="100%" height="auto" /></a>
        <NavVerticalList>
          <NavItem href="/admin/dashboard">Dashboard</NavItem>
          <NavItem href="/admin/forms">Forms</NavItem>
          <NavItem href="/admin/messages" className="flex justify-between items-center w-full">
            <div>Messages</div>
            <NotificationCount count={3} />
          </NavItem>
          <NavItem href="/admin/contacts">Contacts</NavItem>
        </NavVerticalList>
      </div>

      <AccountBar />
    </div>
  )
}

export default Aside