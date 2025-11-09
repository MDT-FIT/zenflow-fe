import { useAuth } from '@/features/auth/context/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  useEffect(() => {
    logout()
  }, [logout, navigate])

  return null
}
