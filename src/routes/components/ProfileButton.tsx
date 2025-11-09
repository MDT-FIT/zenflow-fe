import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Profile from '../../assets/icons/profile.svg?react'
import { useAuth } from '@/features/auth/context/useAuth'

export const ProfileButton = () => {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Profile icon */}
        <div className="w-11 h-11 flex justify-center items-center">
          <Profile />
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit">
        <p className="text-white flex gap-2 p-2">
          <span className="text-foreground font-medium">Username:</span> {user.username}
        </p>
        <p className="text-white flex gap-2 p-2">
          <span className="text-foreground font-medium">Email:</span>
          {user.email}
        </p>
      </PopoverContent>
    </Popover>
  )
}
