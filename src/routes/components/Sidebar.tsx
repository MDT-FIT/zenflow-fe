import { SidebarButton } from './SidebarButton'
import Logo from '../../assets/icons/logo.svg?react'

export const Sidebar = () => {
  return (
    <aside className="bg-white/5 rounded-lg border border-[rgba(255,255,255,0.05)] p-4 h-full sticky flex flex-col gap-2 justify-between items-center">
      <Logo />
      <div className="flex flex-col gap-2">
        <SidebarButton link="/" />
        <SidebarButton link="cards" />
        <SidebarButton link="transactions" />
      </div>
      <div className="flex flex-col gap-2">
        {/* <ProfileButton /> */}
        <SidebarButton link="logout" />
      </div>
    </aside>
  )
}
