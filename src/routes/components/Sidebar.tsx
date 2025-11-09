import { SidebarButton } from './SidebarButton'
import Logo from '../../assets/icons/logo.svg?react'
import { ProfileButton } from './ProfileButton'

export const Sidebar = () => {
  return (
    <aside className="bg-white/5 rounded-lg border border-[rgba(255,255,255,0.05)] p-3 h-full sticky flex flex-col gap-2 justify-between items-center">
      <Logo className="w-11 h-11" />
      <div className="flex flex-col gap-2">
        <SidebarButton link="/" />
        <SidebarButton link="/cards" />
        <SidebarButton link="/transactions" />
      </div>
      <div className="flex flex-col gap-2">
        <ProfileButton />
        <SidebarButton link="/log-out" />
      </div>
    </aside>
  )
}
