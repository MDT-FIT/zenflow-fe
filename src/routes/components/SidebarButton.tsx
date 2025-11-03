import type { ComponentType, SVGProps } from 'react'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '../../assets/icons/home.svg?react'
import CardsIcons from '../../assets/icons/credit.svg?react'
import TransactionIcon from '../../assets/icons/transaction.svg?react'
import LogoutIcon from '../../assets/icons/exit.svg?react'

export const SidebarButtonMapper: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  '/': DashboardIcon,
  '/cards': CardsIcons,
  '/transactions': TransactionIcon,
  '/logout': LogoutIcon,
}

export const SidebarButton = ({ link }: { link: string }) => {
  const Icon = SidebarButtonMapper[link]

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `w-12 h-12 flex items-center justify-center rounded-lg transition ${
          isActive
            ? 'bg-[#A0BA84]/20 text-[#A0BA84]'
            : 'bg-white/5 text-[#5A6262] hover:bg-white/10 hover:text-[#9B9E9E]'
        }`
      }
    >
      {Icon ? <Icon /> : null}
    </NavLink>
  )
}
