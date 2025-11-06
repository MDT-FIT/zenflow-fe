import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export const AuthGuard = () => {
  const { user, isUserLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserLoading && !user) {
      navigate('/log-in', { replace: true })
    }
  }, [user, isUserLoading, navigate])

  if (isUserLoading) {
      return <div className="w-full h-full flex justify-center items-center">
        <Loader2 className="h-14 w-14 animate-spin text-primary" />
      </div>
  }

  return <Outlet />
}
