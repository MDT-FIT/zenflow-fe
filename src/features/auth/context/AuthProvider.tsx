import { useEffect, useState } from 'react'
import { useRefreshMutation } from '../service/useRefreshMutation'
import { useLogOutMutation } from '../service/useLogOutMutation'
import { useLogInMutation } from '../service/useLogInMutation'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import type { User } from '../models/User'

export interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })
  const navigate = useNavigate()
  const loginMutation = useLogInMutation({
    onSuccess: (data) => {
      setUser(data)
      localStorage.setItem('user', JSON.stringify(data))
      navigate('/')
    },
  })

  const logoutMutation = useLogOutMutation({
    onSuccess: () => {
      setUser(null)
      localStorage.removeItem('user')
    },
  })

  const refreshMutation = useRefreshMutation({})

  useEffect(() => {
    console.log(user)
    if (!user) {
      const token = getCookie('jwt_refresh_token')

      if (token) {
        refreshMutation.mutate(token)
      } else {
        navigate('/log-in')
      }
    }
  }, [user])

  const value = {
    user,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoginIn: loginMutation.isPending,
    isLogingOut: logoutMutation.isPending,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}
